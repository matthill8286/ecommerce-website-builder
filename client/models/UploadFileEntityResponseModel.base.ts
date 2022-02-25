/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UploadFileEntityModel, UploadFileEntityModelType } from "./UploadFileEntityModel"
import { UploadFileEntityModelSelector } from "./UploadFileEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: UploadFileEntityModelType;
}

/**
 * UploadFileEntityResponseBase
 * auto generated base class for the model UploadFileEntityResponseModel.
 */
export const UploadFileEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UploadFileEntityResponse')
  .props({
    __typename: types.optional(types.literal("UploadFileEntityResponse"), "UploadFileEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UploadFileEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UploadFileEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | UploadFileEntityModelSelector | ((selector: UploadFileEntityModelSelector) => UploadFileEntityModelSelector)) { return this.__child(`data`, UploadFileEntityModelSelector, builder) }
}
export function selectFromUploadFileEntityResponse() {
  return new UploadFileEntityResponseModelSelector()
}

export const uploadFileEntityResponseModelPrimitives = selectFromUploadFileEntityResponse()
