/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { GlobalModel, GlobalModelType } from "./GlobalModel"
import { GlobalModelSelector } from "./GlobalModel.base"
import { RootStoreType } from "./index"


/**
 * GlobalEntityBase
 * auto generated base class for the model GlobalEntityModel.
 */
export const GlobalEntityModelBase = ModelBase
  .named('GlobalEntity')
  .props({
    __typename: types.optional(types.literal("GlobalEntity"), "GlobalEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => GlobalModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class GlobalEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | GlobalModelSelector | ((selector: GlobalModelSelector) => GlobalModelSelector)) { return this.__child(`attributes`, GlobalModelSelector, builder) }
}
export function selectFromGlobalEntity() {
  return new GlobalEntityModelSelector()
}

export const globalEntityModelPrimitives = selectFromGlobalEntity()
