/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PaginationBase
 * auto generated base class for the model PaginationModel.
 */
export const PaginationModelBase = ModelBase
  .named('Pagination')
  .props({
    __typename: types.optional(types.literal("Pagination"), "Pagination"),
    total: types.union(types.undefined, types.integer),
    page: types.union(types.undefined, types.integer),
    pageSize: types.union(types.undefined, types.integer),
    pageCount: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PaginationModelSelector extends QueryBuilder {
  get total() { return this.__attr(`total`) }
  get page() { return this.__attr(`page`) }
  get pageSize() { return this.__attr(`pageSize`) }
  get pageCount() { return this.__attr(`pageCount`) }
}
export function selectFromPagination() {
  return new PaginationModelSelector()
}

export const paginationModelPrimitives = selectFromPagination().total.page.pageSize.pageCount
