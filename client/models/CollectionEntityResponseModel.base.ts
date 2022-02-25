/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CollectionEntityModel, CollectionEntityModelType } from "./CollectionEntityModel"
import { CollectionEntityModelSelector } from "./CollectionEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: CollectionEntityModelType;
}

/**
 * CollectionEntityResponseBase
 * auto generated base class for the model CollectionEntityResponseModel.
 */
export const CollectionEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CollectionEntityResponse')
  .props({
    __typename: types.optional(types.literal("CollectionEntityResponse"), "CollectionEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => CollectionEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CollectionEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | CollectionEntityModelSelector | ((selector: CollectionEntityModelSelector) => CollectionEntityModelSelector)) { return this.__child(`data`, CollectionEntityModelSelector, builder) }
}
export function selectFromCollectionEntityResponse() {
  return new CollectionEntityResponseModelSelector()
}

export const collectionEntityResponseModelPrimitives = selectFromCollectionEntityResponse()
