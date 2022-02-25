/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { EnumComponentlinksbuttonlinkTypeEnumType } from "./EnumComponentlinksbuttonlinkTypeEnum"
import { RootStoreType } from "./index"


/**
 * ComponentLinksButtonLinkBase
 * auto generated base class for the model ComponentLinksButtonLinkModel.
 */
export const ComponentLinksButtonLinkModelBase = ModelBase
  .named('ComponentLinksButtonLink')
  .props({
    __typename: types.optional(types.literal("ComponentLinksButtonLink"), "ComponentLinksButtonLink"),
    id: types.identifier,
    url: types.union(types.undefined, types.null, types.string),
    newTab: types.union(types.undefined, types.null, types.boolean),
    text: types.union(types.undefined, types.null, types.string),
    type: types.union(types.undefined, types.null, EnumComponentlinksbuttonlinkTypeEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentLinksButtonLinkModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get url() { return this.__attr(`url`) }
  get newTab() { return this.__attr(`newTab`) }
  get text() { return this.__attr(`text`) }
  get type() { return this.__attr(`type`) }
}
export function selectFromComponentLinksButtonLink() {
  return new ComponentLinksButtonLinkModelSelector()
}

export const componentLinksButtonLinkModelPrimitives = selectFromComponentLinksButtonLink().url.newTab.text.type
