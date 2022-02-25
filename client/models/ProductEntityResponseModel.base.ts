/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductEntityModel, ProductEntityModelType } from "./ProductEntityModel"
import { ProductEntityModelSelector } from "./ProductEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: ProductEntityModelType;
}

/**
 * ProductEntityResponseBase
 * auto generated base class for the model ProductEntityResponseModel.
 */
export const ProductEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ProductEntityResponse')
  .props({
    __typename: types.optional(types.literal("ProductEntityResponse"), "ProductEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | ProductEntityModelSelector | ((selector: ProductEntityModelSelector) => ProductEntityModelSelector)) { return this.__child(`data`, ProductEntityModelSelector, builder) }
}
export function selectFromProductEntityResponse() {
  return new ProductEntityResponseModelSelector()
}

export const productEntityResponseModelPrimitives = selectFromProductEntityResponse()
