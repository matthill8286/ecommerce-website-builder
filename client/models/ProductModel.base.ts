/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CategoryRelationResponseCollectionModel, CategoryRelationResponseCollectionModelType } from "./CategoryRelationResponseCollectionModel"
import { CategoryRelationResponseCollectionModelSelector } from "./CategoryRelationResponseCollectionModel.base"
import { ComponentElementsFeatureModel, ComponentElementsFeatureModelType } from "./ComponentElementsFeatureModel"
import { ComponentElementsFeatureModelSelector } from "./ComponentElementsFeatureModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { UploadFileRelationResponseCollectionModel, UploadFileRelationResponseCollectionModelType } from "./UploadFileRelationResponseCollectionModel"
import { UploadFileRelationResponseCollectionModelSelector } from "./UploadFileRelationResponseCollectionModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  feature: IObservableArray<ComponentElementsFeatureModelType>;
}

/**
 * ProductBase
 * auto generated base class for the model ProductModel.
 */
export const ProductModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Product')
  .props({
    __typename: types.optional(types.literal("Product"), "Product"),
    name: types.union(types.undefined, types.null, types.string),
    slug: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    price: types.union(types.undefined, types.null, types.number),
    productimage: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    feature: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentElementsFeatureModel))))),
    categories: types.union(types.undefined, types.null, types.late((): any => CategoryRelationResponseCollectionModel)),
    featuredImages: types.union(types.undefined, types.null, types.late((): any => UploadFileRelationResponseCollectionModel)),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
    publishedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get slug() { return this.__attr(`slug`) }
  get description() { return this.__attr(`description`) }
  get price() { return this.__attr(`price`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get publishedAt() { return this.__attr(`publishedAt`) }
  productimage(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`productimage`, UploadFileEntityResponseModelSelector, builder) }
  feature(builder?: string | ComponentElementsFeatureModelSelector | ((selector: ComponentElementsFeatureModelSelector) => ComponentElementsFeatureModelSelector)) { return this.__child(`feature`, ComponentElementsFeatureModelSelector, builder) }
  categories(builder?: string | CategoryRelationResponseCollectionModelSelector | ((selector: CategoryRelationResponseCollectionModelSelector) => CategoryRelationResponseCollectionModelSelector)) { return this.__child(`categories`, CategoryRelationResponseCollectionModelSelector, builder) }
  featuredImages(builder?: string | UploadFileRelationResponseCollectionModelSelector | ((selector: UploadFileRelationResponseCollectionModelSelector) => UploadFileRelationResponseCollectionModelSelector)) { return this.__child(`featuredImages`, UploadFileRelationResponseCollectionModelSelector, builder) }
}
export function selectFromProduct() {
  return new ProductModelSelector()
}

export const productModelPrimitives = selectFromProduct().name.slug.description.price.createdAt.updatedAt.publishedAt
