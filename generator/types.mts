import { ReferenceObject, SchemaObject } from 'openapi3-ts';

type DefintionType =
  | 'primitive'
  | 'normal'
  | 'genericParams'
  | 'appliedToInterface';

export interface DefinitionObject<
  T extends DefintionType = 'normal' | 'genericParams'
> {
  tags: string[];
  component: string;
  ref: SchemaObject;
  module: T extends 'primitive'
    ? {
        type: 'primitive';
      }
    : T extends 'normal'
    ? {
        type: 'normal';
        name: string;
        fileName: string;
      }
    : T extends 'genericParams'
    ? {
        type: 'genericParams';
        interfaceName: string;
        parameterName: string;
        importName: string;
        fileName: string;
        interfaces: ServiceInterfaces[];
        additionalReferences: string[];
      }
    : {
        type: 'appliedToInterface';
        parameterName: (...args: string[]) => string;
        childRef: ReferenceObject | null;
        interface: ServiceInterfaces;
      };
  data: {
    manifest?: string;
    hasConditionalComponents?: boolean;
  };
}

export const DictionaryComponentPattern =
  /DictionaryComponentResponseOf(\w+)And(\w+)$/;
export const SingleComponentPattern = /SingleComponentResponseOf(\w+)/;
export const ItemComponentSetPattern = /DestinyItemComponentSetOf(\w+)/;
export const BaseItemComponentSetPattern = /DestinyBaseItemComponentSetOf(\w+)/;

export enum ServiceInterfaces {
  BungieResponse = 'BungieNetResponse',
  DictionaryComponent = 'DictionaryComponentResponse',
  SingleComponent = 'SingleComponentResponse',
  ItemComponentSet = 'DestinyItemComponentSet',
  BaseItemComponentSet = 'DestinyBaseItemComponentSet',
  ResponseComponent = 'ResponseComponent',
  DestinyDefinition = 'DestinyDefinition'
}

export const frequentlyNullProperties = ['itemCategoryHashes'];

export const DestinyComponentTypeEnumComponent =
  '#/components/schemas/Destiny.DestinyComponentType';

export const DestinyDefinitionModel =
  '#/components/schemas/Destiny.Definitions.DestinyDefinition';
