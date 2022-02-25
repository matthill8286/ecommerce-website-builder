/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductEntityModel, ProductEntityModelType } from "./ProductEntityModel"
import { ProductEntityModelSelector } from "./ProductEntityModel.base"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<ProductEntityModelType>;
}

/**
 * ProductEntityResponseCollectionBase
 * auto generated base class for the model ProductEntityResponseCollectionModel.
 */
export const ProductEntityResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ProductEntityResponseCollection')
  .props({
    __typename: types.optional(types.literal("ProductEntityResponseCollection"), "ProductEntityResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => ProductEntityModel)))),
    meta: types.union(types.undefined, types.late((): any => ResponseCollectionMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductEntityResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | ProductEntityModelSelector | ((selector: ProductEntityModelSelector) => ProductEntityModelSelector)) { return this.__child(`data`, ProductEntityModelSelector, builder) }
  meta(builder?: string | ResponseCollectionMetaModelSelector | ((selector: ResponseCollectionMetaModelSelector) => ResponseCollectionMetaModelSelector)) { return this.__child(`meta`, ResponseCollectionMetaModelSelector, builder) }
}
export function selectFromProductEntityResponseCollection() {
  return new ProductEntityResponseCollectionModelSelector()
}

export const productEntityResponseCollectionModelPrimitives = selectFromProductEntityResponseCollection()
