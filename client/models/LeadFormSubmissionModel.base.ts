/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { EnumLeadformsubmissionStatusEnumType } from "./EnumLeadformsubmissionStatusEnum"
import { RootStoreType } from "./index"


/**
 * LeadFormSubmissionBase
 * auto generated base class for the model LeadFormSubmissionModel.
 */
export const LeadFormSubmissionModelBase = ModelBase
  .named('LeadFormSubmission')
  .props({
    __typename: types.optional(types.literal("LeadFormSubmission"), "LeadFormSubmission"),
    email: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, EnumLeadformsubmissionStatusEnumType),
    location: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LeadFormSubmissionModelSelector extends QueryBuilder {
  get email() { return this.__attr(`email`) }
  get status() { return this.__attr(`status`) }
  get location() { return this.__attr(`location`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromLeadFormSubmission() {
  return new LeadFormSubmissionModelSelector()
}

export const leadFormSubmissionModelPrimitives = selectFromLeadFormSubmission().email.status.location.createdAt.updatedAt
