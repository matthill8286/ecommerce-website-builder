/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { EnumComponentsharedmetasocialSocialnetworkEnumType } from "./EnumComponentsharedmetasocialSocialnetworkEnum"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/**
 * ComponentSharedMetaSocialBase
 * auto generated base class for the model ComponentSharedMetaSocialModel.
 */
export const ComponentSharedMetaSocialModelBase = ModelBase
  .named('ComponentSharedMetaSocial')
  .props({
    __typename: types.optional(types.literal("ComponentSharedMetaSocial"), "ComponentSharedMetaSocial"),
    id: types.identifier,
    socialNetwork: types.union(types.undefined, EnumComponentsharedmetasocialSocialnetworkEnumType),
    title: types.union(types.undefined, types.string),
    description: types.union(types.undefined, types.string),
    image: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentSharedMetaSocialModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get socialNetwork() { return this.__attr(`socialNetwork`) }
  get title() { return this.__attr(`title`) }
  get description() { return this.__attr(`description`) }
  image(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`image`, UploadFileEntityResponseModelSelector, builder) }
}
export function selectFromComponentSharedMetaSocial() {
  return new ComponentSharedMetaSocialModelSelector()
}

export const componentSharedMetaSocialModelPrimitives = selectFromComponentSharedMetaSocial().socialNetwork.title.description
