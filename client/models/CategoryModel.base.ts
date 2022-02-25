/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentMetaMetadataModel, ComponentMetaMetadataModelType } from "./ComponentMetaMetadataModel"
import { ComponentMetaMetadataModelSelector } from "./ComponentMetaMetadataModel.base"
import { ProductRelationResponseCollectionModel, ProductRelationResponseCollectionModelType } from "./ProductRelationResponseCollectionModel"
import { ProductRelationResponseCollectionModelSelector } from "./ProductRelationResponseCollectionModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  categoryMetadata: ComponentMetaMetadataModelType;
}

/**
 * CategoryBase
 * auto generated base class for the model CategoryModel.
 */
export const CategoryModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Category')
  .props({
    __typename: types.optional(types.literal("Category"), "Category"),
    name: types.union(types.undefined, types.null, types.string),
    slug: types.union(types.undefined, types.null, types.string),
    categoryImage: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    products: types.union(types.undefined, types.null, types.late((): any => ProductRelationResponseCollectionModel)),
    categoryMetadata: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentMetaMetadataModel))),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
    publishedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CategoryModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get slug() { return this.__attr(`slug`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get publishedAt() { return this.__attr(`publishedAt`) }
  categoryImage(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`categoryImage`, UploadFileEntityResponseModelSelector, builder) }
  products(builder?: string | ProductRelationResponseCollectionModelSelector | ((selector: ProductRelationResponseCollectionModelSelector) => ProductRelationResponseCollectionModelSelector)) { return this.__child(`products`, ProductRelationResponseCollectionModelSelector, builder) }
  categoryMetadata(builder?: string | ComponentMetaMetadataModelSelector | ((selector: ComponentMetaMetadataModelSelector) => ComponentMetaMetadataModelSelector)) { return this.__child(`categoryMetadata`, ComponentMetaMetadataModelSelector, builder) }
}
export function selectFromCategory() {
  return new CategoryModelSelector()
}

export const categoryModelPrimitives = selectFromCategory().name.slug.createdAt.updatedAt.publishedAt
