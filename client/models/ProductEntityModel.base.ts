/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { RootStoreType } from "./index"


/**
 * ProductEntityBase
 * auto generated base class for the model ProductEntityModel.
 */
export const ProductEntityModelBase = ModelBase
  .named('ProductEntity')
  .props({
    __typename: types.optional(types.literal("ProductEntity"), "ProductEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => ProductModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector)) { return this.__child(`attributes`, ProductModelSelector, builder) }
}
export function selectFromProductEntity() {
  return new ProductEntityModelSelector()
}

export const productEntityModelPrimitives = selectFromProductEntity()
