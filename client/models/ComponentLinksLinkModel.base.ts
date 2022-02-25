/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ComponentLinksLinkBase
 * auto generated base class for the model ComponentLinksLinkModel.
 */
export const ComponentLinksLinkModelBase = ModelBase
  .named('ComponentLinksLink')
  .props({
    __typename: types.optional(types.literal("ComponentLinksLink"), "ComponentLinksLink"),
    id: types.identifier,
    url: types.union(types.undefined, types.string),
    newTab: types.union(types.undefined, types.null, types.boolean),
    text: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentLinksLinkModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get url() { return this.__attr(`url`) }
  get newTab() { return this.__attr(`newTab`) }
  get text() { return this.__attr(`text`) }
}
export function selectFromComponentLinksLink() {
  return new ComponentLinksLinkModelSelector()
}

export const componentLinksLinkModelPrimitives = selectFromComponentLinksLink().url.newTab.text
