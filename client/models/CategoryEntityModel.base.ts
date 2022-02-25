/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CategoryModel, CategoryModelType } from "./CategoryModel"
import { CategoryModelSelector } from "./CategoryModel.base"
import { RootStoreType } from "./index"


/**
 * CategoryEntityBase
 * auto generated base class for the model CategoryEntityModel.
 */
export const CategoryEntityModelBase = ModelBase
  .named('CategoryEntity')
  .props({
    __typename: types.optional(types.literal("CategoryEntity"), "CategoryEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => CategoryModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CategoryEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | CategoryModelSelector | ((selector: CategoryModelSelector) => CategoryModelSelector)) { return this.__child(`attributes`, CategoryModelSelector, builder) }
}
export function selectFromCategoryEntity() {
  return new CategoryEntityModelSelector()
}

export const categoryEntityModelPrimitives = selectFromCategoryEntity()
