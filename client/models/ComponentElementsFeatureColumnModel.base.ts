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
 * ComponentElementsFeatureColumnBase
 * auto generated base class for the model ComponentElementsFeatureColumnModel.
 */
export const ComponentElementsFeatureColumnModelBase = ModelBase
  .named('ComponentElementsFeatureColumn')
  .props({
    __typename: types.optional(types.literal("ComponentElementsFeatureColumn"), "ComponentElementsFeatureColumn"),
    id: types.identifier,
    title: types.union(types.undefined, types.string),
    description: types.union(types.undefined, types.null, types.string),
    icon: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentElementsFeatureColumnModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get description() { return this.__attr(`description`) }
  icon(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`icon`, UploadFileEntityResponseModelSelector, builder) }
}
export function selectFromComponentElementsFeatureColumn() {
  return new ComponentElementsFeatureColumnModelSelector()
}

export const componentElementsFeatureColumnModelPrimitives = selectFromComponentElementsFeatureColumn().title.description
