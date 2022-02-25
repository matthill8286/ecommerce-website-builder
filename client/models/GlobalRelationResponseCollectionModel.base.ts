/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { GlobalEntityModel, GlobalEntityModelType } from "./GlobalEntityModel"
import { GlobalEntityModelSelector } from "./GlobalEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<GlobalEntityModelType>;
}

/**
 * GlobalRelationResponseCollectionBase
 * auto generated base class for the model GlobalRelationResponseCollectionModel.
 */
export const GlobalRelationResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('GlobalRelationResponseCollection')
  .props({
    __typename: types.optional(types.literal("GlobalRelationResponseCollection"), "GlobalRelationResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => GlobalEntityModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class GlobalRelationResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | GlobalEntityModelSelector | ((selector: GlobalEntityModelSelector) => GlobalEntityModelSelector)) { return this.__child(`data`, GlobalEntityModelSelector, builder) }
}
export function selectFromGlobalRelationResponseCollection() {
  return new GlobalRelationResponseCollectionModelSelector()
}

export const globalRelationResponseCollectionModelPrimitives = selectFromGlobalRelationResponseCollection()
