/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CategoryEntityModel, CategoryEntityModelType } from "./CategoryEntityModel"
import { CategoryEntityModelSelector } from "./CategoryEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: CategoryEntityModelType;
}

/**
 * CategoryEntityResponseBase
 * auto generated base class for the model CategoryEntityResponseModel.
 */
export const CategoryEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CategoryEntityResponse')
  .props({
    __typename: types.optional(types.literal("CategoryEntityResponse"), "CategoryEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => CategoryEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CategoryEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | CategoryEntityModelSelector | ((selector: CategoryEntityModelSelector) => CategoryEntityModelSelector)) { return this.__child(`data`, CategoryEntityModelSelector, builder) }
}
export function selectFromCategoryEntityResponse() {
  return new CategoryEntityResponseModelSelector()
}

export const categoryEntityResponseModelPrimitives = selectFromCategoryEntityResponse()
