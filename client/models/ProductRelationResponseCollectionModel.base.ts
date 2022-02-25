/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductEntityModel, ProductEntityModelType } from "./ProductEntityModel"
import { ProductEntityModelSelector } from "./ProductEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<ProductEntityModelType>;
}

/**
 * ProductRelationResponseCollectionBase
 * auto generated base class for the model ProductRelationResponseCollectionModel.
 */
export const ProductRelationResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ProductRelationResponseCollection')
  .props({
    __typename: types.optional(types.literal("ProductRelationResponseCollection"), "ProductRelationResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => ProductEntityModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductRelationResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | ProductEntityModelSelector | ((selector: ProductEntityModelSelector) => ProductEntityModelSelector)) { return this.__child(`data`, ProductEntityModelSelector, builder) }
}
export function selectFromProductRelationResponseCollection() {
  return new ProductRelationResponseCollectionModelSelector()
}

export const productRelationResponseCollectionModelPrimitives = selectFromProductRelationResponseCollection()
