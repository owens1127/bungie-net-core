import _ from 'underscore';
import { getRef, getReferencedTypes, isRequestBodyObject, DictionaryComponentPattern, SingleComponentPattern, componentName, lastPart, isComponentResponse } from './util.mjs';
export function computeTypeMaps(pathPairsByTag, doc) {
    const allDefsEverywhere = new Set();
    const defsByTag = {};
    _.each(pathPairsByTag, (paths, tag) => {
        const defs = findReachableComponents(tag, paths, doc);
        addAll(allDefsEverywhere, defs);
        defsByTag[tag] = defs;
    });
    const componentsByFile = new Map();
    const componentsByTag = {};
    const componentByDef = {};
    const manifestComponents = [];
    const directoryExportsMap = new Map();
    for (const def of Array.from(allDefsEverywhere).filter(def => !def.match(DictionaryComponentPattern) &&
        !def.match(SingleComponentPattern))) {
        const tags = [];
        _.each(defsByTag, (defs, tag) => {
            if (defs.has(def)) {
                tags.push(tag);
            }
        });
        const info = {
            def,
            tags,
            filename: addFile(def, doc),
            typeName: typeName(def, doc),
            componentName: componentName(def, doc),
            isComponentResponse: isComponentResponse(def, doc)
        };
        if (info.filename) {
            if (isMobileManifestEntity(def, doc)) {
                manifestComponents.push(info);
            }
            componentsByFile.set(info.filename, info);
            info.tags.forEach(tag => {
                componentsByTag[tag] = componentsByTag[tag] || [];
                componentsByTag[tag].push(info);
            });
            componentByDef[info.def] = info;
        }
    }
    return {
        manifestComponents,
        directoryExportsMap,
        componentsByFile,
        componentsByTag,
        componentByDef
    };
}
function typeName(componentPath, doc) {
    const name = lastPart(componentPath);
    const component = getRef(doc, componentPath);
    if (!component) {
        return 'any';
    }
    return name;
}
function addFile(def, doc) {
    const split = def.split('/');
    if (split[2] === 'responses')
        return '';
    const schemaName = _.last(split);
    const root = split.slice(2, split.length - 1).join('/');
    const subDirectories = schemaName.split('.');
    const pathToDefinition = subDirectories.join('/');
    if (pathToDefinition === 'boolean' ||
        pathToDefinition === 'int32' ||
        pathToDefinition === 'int64')
        return '';
    return (root.replace('schemas', getRef(doc, def)?.['x-enum-values'] ? 'enums' : 'models') +
        '/' +
        pathToDefinition +
        `.ts`);
}
function findReachableComponents(tag, paths, doc) {
    const pathDefinitions = paths.reduce((memo, [_, pathDef]) => addAll(memo, findReachableComponentsFromPath(pathDef)), new Set());
    const allDefinitions = new Set(pathDefinitions);
    pathDefinitions.forEach(definition => addReachableComponentsFromComponent(allDefinitions, definition, doc));
    return allDefinitions;
}
function addAll(first, second) {
    for (const value of second) {
        first.add(value);
    }
    return first;
}
function findReachableComponentsFromPath(pathDef) {
    const methodDef = pathDef.get || pathDef.post;
    const params = (methodDef.parameters || []);
    const paramTypes = new Set(params.map(param => getReferencedTypes(param.schema)).filter(p => p));
    const requestBody = methodDef.requestBody;
    if (requestBody && isRequestBodyObject(requestBody)) {
        const schema = requestBody.content['application/json'].schema;
        const paramType = getReferencedTypes(schema);
        if (paramType) {
            paramTypes.add(paramType);
        }
    }
    const returnType = getReferencedTypes(methodDef.responses['200']);
    if (returnType) {
        paramTypes.add(returnType);
    }
    return paramTypes;
}
function addReachableComponentsFromComponent(allDefinitions, definition, doc) {
    const component = getRef(doc, definition);
    if (!component) {
        return;
    }
    if (component && component.type === 'array') {
        addDefinitions(allDefinitions, component.items, doc);
    }
    else if (component.type === 'object') {
        if (component.properties) {
            Object.values(component.properties).forEach((schema) => {
                addDefinitions(allDefinitions, schema, doc);
            });
        }
        (component.allOf || []).forEach((schema) => {
            addDefinitions(allDefinitions, schema, doc);
        });
        if (component.additionalProperties &&
            typeof component.additionalProperties !== 'boolean') {
            addDefinitions(allDefinitions, component.additionalProperties, doc);
        }
    }
}
function addDefinitions(allDefinitions, schema, doc) {
    const newDefinition = getReferencedTypes(schema);
    addDefinitionsFromComponent(allDefinitions, newDefinition, doc);
    if (schema['x-mapped-definition']) {
        addDefinitionsFromComponent(allDefinitions, schema['x-mapped-definition'].$ref, doc);
    }
}
function addDefinitionsFromComponent(allDefinitions, definition, doc) {
    if (definition && !allDefinitions.has(definition)) {
        allDefinitions.add(definition);
        addReachableComponentsFromComponent(allDefinitions, definition, doc);
    }
}
function isMobileManifestEntity(def, doc) {
    return getRef(doc, def)['x-mobile-manifest-name'] !== undefined;
}
