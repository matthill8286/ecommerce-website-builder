/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PaginationModel, PaginationModelType } from "./PaginationModel"
import { PaginationModelSelector } from "./PaginationModel.base"
import { RootStoreType } from "./index"


/**
 * ResponseCollectionMetaBase
 * auto generated base class for the model ResponseCollectionMetaModel.
 */
export const ResponseCollectionMetaModelBase = ModelBase
  .named('ResponseCollectionMeta')
  .props({
    __typename: types.optional(types.literal("ResponseCollectionMeta"), "ResponseCollectionMeta"),
    pagination: types.union(types.undefined, types.late((): any => PaginationModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ResponseCollectionMetaModelSelector extends QueryBuilder {
  pagination(builder?: string | PaginationModelSelector | ((selector: PaginationModelSelector) => PaginationModelSelector)) { return this.__child(`pagination`, PaginationModelSelector, builder) }
}
export function selectFromResponseCollectionMeta() {
  return new ResponseCollectionMetaModelSelector()
}

export const responseCollectionMetaModelPrimitives = selectFromResponseCollectionMeta()
