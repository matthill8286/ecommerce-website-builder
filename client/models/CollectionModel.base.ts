/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentMetaMetadataModel, ComponentMetaMetadataModelType } from "./ComponentMetaMetadataModel"
import { ComponentMetaMetadataModelSelector } from "./ComponentMetaMetadataModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  collectionMetadata: ComponentMetaMetadataModelType;
}

/**
 * CollectionBase
 * auto generated base class for the model CollectionModel.
 */
export const CollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Collection')
  .props({
    __typename: types.optional(types.literal("Collection"), "Collection"),
    name: types.union(types.undefined, types.null, types.string),
    slug: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    backgroundImage: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    collectionMetadata: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentMetaMetadataModel))),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
    publishedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CollectionModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get slug() { return this.__attr(`slug`) }
  get description() { return this.__attr(`description`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get publishedAt() { return this.__attr(`publishedAt`) }
  backgroundImage(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`backgroundImage`, UploadFileEntityResponseModelSelector, builder) }
  collectionMetadata(builder?: string | ComponentMetaMetadataModelSelector | ((selector: ComponentMetaMetadataModelSelector) => ComponentMetaMetadataModelSelector)) { return this.__child(`collectionMetadata`, ComponentMetaMetadataModelSelector, builder) }
}
export function selectFromCollection() {
  return new CollectionModelSelector()
}

export const collectionModelPrimitives = selectFromCollection().name.slug.description.createdAt.updatedAt.publishedAt
