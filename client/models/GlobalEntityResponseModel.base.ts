/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { GlobalEntityModel, GlobalEntityModelType } from "./GlobalEntityModel"
import { GlobalEntityModelSelector } from "./GlobalEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: GlobalEntityModelType;
}

/**
 * GlobalEntityResponseBase
 * auto generated base class for the model GlobalEntityResponseModel.
 */
export const GlobalEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('GlobalEntityResponse')
  .props({
    __typename: types.optional(types.literal("GlobalEntityResponse"), "GlobalEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => GlobalEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class GlobalEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | GlobalEntityModelSelector | ((selector: GlobalEntityModelSelector) => GlobalEntityModelSelector)) { return this.__child(`data`, GlobalEntityModelSelector, builder) }
}
export function selectFromGlobalEntityResponse() {
  return new GlobalEntityResponseModelSelector()
}

export const globalEntityResponseModelPrimitives = selectFromGlobalEntityResponse()
