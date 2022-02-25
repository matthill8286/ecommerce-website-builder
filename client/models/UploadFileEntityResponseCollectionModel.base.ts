/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { UploadFileEntityModel, UploadFileEntityModelType } from "./UploadFileEntityModel"
import { UploadFileEntityModelSelector } from "./UploadFileEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<UploadFileEntityModelType>;
}

/**
 * UploadFileEntityResponseCollectionBase
 * auto generated base class for the model UploadFileEntityResponseCollectionModel.
 */
export const UploadFileEntityResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UploadFileEntityResponseCollection')
  .props({
    __typename: types.optional(types.literal("UploadFileEntityResponseCollection"), "UploadFileEntityResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => UploadFileEntityModel)))),
    meta: types.union(types.undefined, types.late((): any => ResponseCollectionMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UploadFileEntityResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | UploadFileEntityModelSelector | ((selector: UploadFileEntityModelSelector) => UploadFileEntityModelSelector)) { return this.__child(`data`, UploadFileEntityModelSelector, builder) }
  meta(builder?: string | ResponseCollectionMetaModelSelector | ((selector: ResponseCollectionMetaModelSelector) => ResponseCollectionMetaModelSelector)) { return this.__child(`meta`, ResponseCollectionMetaModelSelector, builder) }
}
export function selectFromUploadFileEntityResponseCollection() {
  return new UploadFileEntityResponseCollectionModelSelector()
}

export const uploadFileEntityResponseCollectionModelPrimitives = selectFromUploadFileEntityResponseCollection()
