/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CategoryEntityModel, CategoryEntityModelType } from "./CategoryEntityModel"
import { CategoryEntityModelSelector } from "./CategoryEntityModel.base"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<CategoryEntityModelType>;
}

/**
 * CategoryEntityResponseCollectionBase
 * auto generated base class for the model CategoryEntityResponseCollectionModel.
 */
export const CategoryEntityResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CategoryEntityResponseCollection')
  .props({
    __typename: types.optional(types.literal("CategoryEntityResponseCollection"), "CategoryEntityResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => CategoryEntityModel)))),
    meta: types.union(types.undefined, types.late((): any => ResponseCollectionMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CategoryEntityResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | CategoryEntityModelSelector | ((selector: CategoryEntityModelSelector) => CategoryEntityModelSelector)) { return this.__child(`data`, CategoryEntityModelSelector, builder) }
  meta(builder?: string | ResponseCollectionMetaModelSelector | ((selector: ResponseCollectionMetaModelSelector) => ResponseCollectionMetaModelSelector)) { return this.__child(`meta`, ResponseCollectionMetaModelSelector, builder) }
}
export function selectFromCategoryEntityResponseCollection() {
  return new CategoryEntityResponseCollectionModelSelector()
}

export const categoryEntityResponseCollectionModelPrimitives = selectFromCategoryEntityResponseCollection()
