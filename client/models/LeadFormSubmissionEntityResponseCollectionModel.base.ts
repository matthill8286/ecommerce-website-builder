/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LeadFormSubmissionEntityModel, LeadFormSubmissionEntityModelType } from "./LeadFormSubmissionEntityModel"
import { LeadFormSubmissionEntityModelSelector } from "./LeadFormSubmissionEntityModel.base"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<LeadFormSubmissionEntityModelType>;
}

/**
 * LeadFormSubmissionEntityResponseCollectionBase
 * auto generated base class for the model LeadFormSubmissionEntityResponseCollectionModel.
 */
export const LeadFormSubmissionEntityResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LeadFormSubmissionEntityResponseCollection')
  .props({
    __typename: types.optional(types.literal("LeadFormSubmissionEntityResponseCollection"), "LeadFormSubmissionEntityResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => LeadFormSubmissionEntityModel)))),
    meta: types.union(types.undefined, types.late((): any => ResponseCollectionMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LeadFormSubmissionEntityResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | LeadFormSubmissionEntityModelSelector | ((selector: LeadFormSubmissionEntityModelSelector) => LeadFormSubmissionEntityModelSelector)) { return this.__child(`data`, LeadFormSubmissionEntityModelSelector, builder) }
  meta(builder?: string | ResponseCollectionMetaModelSelector | ((selector: ResponseCollectionMetaModelSelector) => ResponseCollectionMetaModelSelector)) { return this.__child(`meta`, ResponseCollectionMetaModelSelector, builder) }
}
export function selectFromLeadFormSubmissionEntityResponseCollection() {
  return new LeadFormSubmissionEntityResponseCollectionModelSelector()
}

export const leadFormSubmissionEntityResponseCollectionModelPrimitives = selectFromLeadFormSubmissionEntityResponseCollection()
