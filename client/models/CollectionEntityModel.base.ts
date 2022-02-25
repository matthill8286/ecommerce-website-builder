/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CollectionModel, CollectionModelType } from "./CollectionModel"
import { CollectionModelSelector } from "./CollectionModel.base"
import { RootStoreType } from "./index"


/**
 * CollectionEntityBase
 * auto generated base class for the model CollectionEntityModel.
 */
export const CollectionEntityModelBase = ModelBase
  .named('CollectionEntity')
  .props({
    __typename: types.optional(types.literal("CollectionEntity"), "CollectionEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => CollectionModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CollectionEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | CollectionModelSelector | ((selector: CollectionModelSelector) => CollectionModelSelector)) { return this.__child(`attributes`, CollectionModelSelector, builder) }
}
export function selectFromCollectionEntity() {
  return new CollectionEntityModelSelector()
}

export const collectionEntityModelPrimitives = selectFromCollectionEntity()
