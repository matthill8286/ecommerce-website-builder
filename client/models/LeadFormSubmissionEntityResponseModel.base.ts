/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LeadFormSubmissionEntityModel, LeadFormSubmissionEntityModelType } from "./LeadFormSubmissionEntityModel"
import { LeadFormSubmissionEntityModelSelector } from "./LeadFormSubmissionEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: LeadFormSubmissionEntityModelType;
}

/**
 * LeadFormSubmissionEntityResponseBase
 * auto generated base class for the model LeadFormSubmissionEntityResponseModel.
 */
export const LeadFormSubmissionEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LeadFormSubmissionEntityResponse')
  .props({
    __typename: types.optional(types.literal("LeadFormSubmissionEntityResponse"), "LeadFormSubmissionEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => LeadFormSubmissionEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LeadFormSubmissionEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | LeadFormSubmissionEntityModelSelector | ((selector: LeadFormSubmissionEntityModelSelector) => LeadFormSubmissionEntityModelSelector)) { return this.__child(`data`, LeadFormSubmissionEntityModelSelector, builder) }
}
export function selectFromLeadFormSubmissionEntityResponse() {
  return new LeadFormSubmissionEntityResponseModelSelector()
}

export const leadFormSubmissionEntityResponseModelPrimitives = selectFromLeadFormSubmissionEntityResponse()
