/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PageModel, PageModelType } from "./PageModel"
import { PageModelSelector } from "./PageModel.base"
import { RootStoreType } from "./index"


/**
 * PageEntityBase
 * auto generated base class for the model PageEntityModel.
 */
export const PageEntityModelBase = ModelBase
  .named('PageEntity')
  .props({
    __typename: types.optional(types.literal("PageEntity"), "PageEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => PageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PageEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | PageModelSelector | ((selector: PageModelSelector) => PageModelSelector)) { return this.__child(`attributes`, PageModelSelector, builder) }
}
export function selectFromPageEntity() {
  return new PageEntityModelSelector()
}

export const pageEntityModelPrimitives = selectFromPageEntity()
