/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UploadFileEntityModel, UploadFileEntityModelType } from "./UploadFileEntityModel"
import { UploadFileEntityModelSelector } from "./UploadFileEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<UploadFileEntityModelType>;
}

/**
 * UploadFileRelationResponseCollectionBase
 * auto generated base class for the model UploadFileRelationResponseCollectionModel.
 */
export const UploadFileRelationResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UploadFileRelationResponseCollection')
  .props({
    __typename: types.optional(types.literal("UploadFileRelationResponseCollection"), "UploadFileRelationResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => UploadFileEntityModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UploadFileRelationResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | UploadFileEntityModelSelector | ((selector: UploadFileEntityModelSelector) => UploadFileEntityModelSelector)) { return this.__child(`data`, UploadFileEntityModelSelector, builder) }
}
export function selectFromUploadFileRelationResponseCollection() {
  return new UploadFileRelationResponseCollectionModelSelector()
}

export const uploadFileRelationResponseCollectionModelPrimitives = selectFromUploadFileRelationResponseCollection()
