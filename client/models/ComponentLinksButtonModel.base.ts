/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { EnumComponentlinksbuttonTypeEnumType } from "./EnumComponentlinksbuttonTypeEnum"
import { RootStoreType } from "./index"


/**
 * ComponentLinksButtonBase
 * auto generated base class for the model ComponentLinksButtonModel.
 */
export const ComponentLinksButtonModelBase = ModelBase
  .named('ComponentLinksButton')
  .props({
    __typename: types.optional(types.literal("ComponentLinksButton"), "ComponentLinksButton"),
    id: types.identifier,
    text: types.union(types.undefined, types.null, types.string),
    type: types.union(types.undefined, types.null, EnumComponentlinksbuttonTypeEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentLinksButtonModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get text() { return this.__attr(`text`) }
  get type() { return this.__attr(`type`) }
}
export function selectFromComponentLinksButton() {
  return new ComponentLinksButtonModelSelector()
}

export const componentLinksButtonModelPrimitives = selectFromComponentLinksButton().text.type
