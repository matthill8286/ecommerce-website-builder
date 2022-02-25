/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/**
 * ComponentElementsLogosBase
 * auto generated base class for the model ComponentElementsLogosModel.
 */
export const ComponentElementsLogosModelBase = ModelBase
  .named('ComponentElementsLogos')
  .props({
    __typename: types.optional(types.literal("ComponentElementsLogos"), "ComponentElementsLogos"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    logo: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentElementsLogosModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  logo(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`logo`, UploadFileEntityResponseModelSelector, builder) }
}
export function selectFromComponentElementsLogos() {
  return new ComponentElementsLogosModelSelector()
}

export const componentElementsLogosModelPrimitives = selectFromComponentElementsLogos().title
