/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ErrorBase
 * auto generated base class for the model ErrorModel.
 */
export const ErrorModelBase = ModelBase
  .named('Error')
  .props({
    __typename: types.optional(types.literal("Error"), "Error"),
    code: types.union(types.undefined, types.string),
    message: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ErrorModelSelector extends QueryBuilder {
  get code() { return this.__attr(`code`) }
  get message() { return this.__attr(`message`) }
}
export function selectFromError() {
  return new ErrorModelSelector()
}

export const errorModelPrimitives = selectFromError().code.message
