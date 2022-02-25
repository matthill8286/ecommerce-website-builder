/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CollectionEntityModel, CollectionEntityModelType } from "./CollectionEntityModel"
import { CollectionEntityModelSelector } from "./CollectionEntityModel.base"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<CollectionEntityModelType>;
}

/**
 * CollectionEntityResponseCollectionBase
 * auto generated base class for the model CollectionEntityResponseCollectionModel.
 */
export const CollectionEntityResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CollectionEntityResponseCollection')
  .props({
    __typename: types.optional(types.literal("CollectionEntityResponseCollection"), "CollectionEntityResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => CollectionEntityModel)))),
    meta: types.union(types.undefined, types.late((): any => ResponseCollectionMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CollectionEntityResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | CollectionEntityModelSelector | ((selector: CollectionEntityModelSelector) => CollectionEntityModelSelector)) { return this.__child(`data`, CollectionEntityModelSelector, builder) }
  meta(builder?: string | ResponseCollectionMetaModelSelector | ((selector: ResponseCollectionMetaModelSelector) => ResponseCollectionMetaModelSelector)) { return this.__child(`meta`, ResponseCollectionMetaModelSelector, builder) }
}
export function selectFromCollectionEntityResponseCollection() {
  return new CollectionEntityResponseCollectionModelSelector()
}

export const collectionEntityResponseCollectionModelPrimitives = selectFromCollectionEntityResponseCollection()
