/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { EnumComponentmetametadataTwittercardtypeEnumType } from "./EnumComponentmetametadataTwittercardtypeEnum"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/**
 * ComponentMetaMetadataBase
 * auto generated base class for the model ComponentMetaMetadataModel.
 */
export const ComponentMetaMetadataModelBase = ModelBase
  .named('ComponentMetaMetadata')
  .props({
    __typename: types.optional(types.literal("ComponentMetaMetadata"), "ComponentMetaMetadata"),
    id: types.identifier,
    metaTitle: types.union(types.undefined, types.string),
    metaDescription: types.union(types.undefined, types.string),
    shareImage: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    twitterCardType: types.union(types.undefined, types.null, EnumComponentmetametadataTwittercardtypeEnumType),
    twitterUsername: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentMetaMetadataModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get metaTitle() { return this.__attr(`metaTitle`) }
  get metaDescription() { return this.__attr(`metaDescription`) }
  get twitterCardType() { return this.__attr(`twitterCardType`) }
  get twitterUsername() { return this.__attr(`twitterUsername`) }
  shareImage(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`shareImage`, UploadFileEntityResponseModelSelector, builder) }
}
export function selectFromComponentMetaMetadata() {
  return new ComponentMetaMetadataModelSelector()
}

export const componentMetaMetadataModelPrimitives = selectFromComponentMetaMetadata().metaTitle.metaDescription.twitterCardType.twitterUsername
