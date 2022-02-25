/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CategoryEntityModel, CategoryEntityModelType } from "./CategoryEntityModel"
import { CategoryEntityModelSelector } from "./CategoryEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<CategoryEntityModelType>;
}

/**
 * CategoryRelationResponseCollectionBase
 * auto generated base class for the model CategoryRelationResponseCollectionModel.
 */
export const CategoryRelationResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CategoryRelationResponseCollection')
  .props({
    __typename: types.optional(types.literal("CategoryRelationResponseCollection"), "CategoryRelationResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => CategoryEntityModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CategoryRelationResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | CategoryEntityModelSelector | ((selector: CategoryEntityModelSelector) => CategoryEntityModelSelector)) { return this.__child(`data`, CategoryEntityModelSelector, builder) }
}
export function selectFromCategoryRelationResponseCollection() {
  return new CategoryRelationResponseCollectionModelSelector()
}

export const categoryRelationResponseCollectionModelPrimitives = selectFromCategoryRelationResponseCollection()
