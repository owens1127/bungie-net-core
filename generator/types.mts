import { SchemaObject } from 'openapi3-ts';

export interface DefinitionObject {
  tags: string[];
  component: string;
  ref: SchemaObject;
  module: {
    interfaceName: string;
    componentName: string;
    importFrom: string | null | { interface: ServiceInterfaces; ref: string };
    exportTo: string | null;
  };
  data: {
    manifest?: string;
    hasConditionalComponents?: boolean;
    dependsOnComponent?: string;
  };
}

export const DictionaryComponentPattern =
  /DictionaryComponentResponseOf(\w+)And(\w+)$/;
export const SingleComponentPattern = /SingleComponentResponseOf(\w+)/;

export enum ServiceInterfaces {
  BungieResponse = './interfaces/BungieNetResponse',
  DictionaryComponent = './interfaces/DictionaryComponentResponse',
  SingleComponent = './interfaces/SingleComponentResponse'
}

export const frequentlyNullProperties = ['itemCategoryHashes'];
