/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UploadFileModel, UploadFileModelType } from "./UploadFileModel"
import { UploadFileModelSelector } from "./UploadFileModel.base"
import { RootStoreType } from "./index"


/**
 * UploadFileEntityBase
 * auto generated base class for the model UploadFileEntityModel.
 */
export const UploadFileEntityModelBase = ModelBase
  .named('UploadFileEntity')
  .props({
    __typename: types.optional(types.literal("UploadFileEntity"), "UploadFileEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => UploadFileModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UploadFileEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | UploadFileModelSelector | ((selector: UploadFileModelSelector) => UploadFileModelSelector)) { return this.__child(`attributes`, UploadFileModelSelector, builder) }
}
export function selectFromUploadFileEntity() {
  return new UploadFileEntityModelSelector()
}

export const uploadFileEntityModelPrimitives = selectFromUploadFileEntity()
