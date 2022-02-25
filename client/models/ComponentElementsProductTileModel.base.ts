/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CategoryRelationResponseCollectionModel, CategoryRelationResponseCollectionModelType } from "./CategoryRelationResponseCollectionModel"
import { CategoryRelationResponseCollectionModelSelector } from "./CategoryRelationResponseCollectionModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { UploadFileRelationResponseCollectionModel, UploadFileRelationResponseCollectionModelType } from "./UploadFileRelationResponseCollectionModel"
import { UploadFileRelationResponseCollectionModelSelector } from "./UploadFileRelationResponseCollectionModel.base"
import { RootStoreType } from "./index"


/**
 * ComponentElementsProductTileBase
 * auto generated base class for the model ComponentElementsProductTileModel.
 */
export const ComponentElementsProductTileModelBase = ModelBase
  .named('ComponentElementsProductTile')
  .props({
    __typename: types.optional(types.literal("ComponentElementsProductTile"), "ComponentElementsProductTile"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    price: types.union(types.undefined, types.null, types.number),
    collection_name: types.union(types.undefined, types.null, types.string),
    category_name: types.union(types.undefined, types.null, types.string),
    product_image: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    featured_images: types.union(types.undefined, types.null, types.late((): any => UploadFileRelationResponseCollectionModel)),
    categories: types.union(types.undefined, types.null, types.late((): any => CategoryRelationResponseCollectionModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentElementsProductTileModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get description() { return this.__attr(`description`) }
  get price() { return this.__attr(`price`) }
  get collection_name() { return this.__attr(`collection_name`) }
  get category_name() { return this.__attr(`category_name`) }
  product_image(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`product_image`, UploadFileEntityResponseModelSelector, builder) }
  featured_images(builder?: string | UploadFileRelationResponseCollectionModelSelector | ((selector: UploadFileRelationResponseCollectionModelSelector) => UploadFileRelationResponseCollectionModelSelector)) { return this.__child(`featured_images`, UploadFileRelationResponseCollectionModelSelector, builder) }
  categories(builder?: string | CategoryRelationResponseCollectionModelSelector | ((selector: CategoryRelationResponseCollectionModelSelector) => CategoryRelationResponseCollectionModelSelector)) { return this.__child(`categories`, CategoryRelationResponseCollectionModelSelector, builder) }
}
export function selectFromComponentElementsProductTile() {
  return new ComponentElementsProductTileModelSelector()
}

export const componentElementsProductTileModelPrimitives = selectFromComponentElementsProductTile().name.description.price.collection_name.category_name
