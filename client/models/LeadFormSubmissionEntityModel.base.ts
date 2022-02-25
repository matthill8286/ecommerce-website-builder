/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LeadFormSubmissionModel, LeadFormSubmissionModelType } from "./LeadFormSubmissionModel"
import { LeadFormSubmissionModelSelector } from "./LeadFormSubmissionModel.base"
import { RootStoreType } from "./index"


/**
 * LeadFormSubmissionEntityBase
 * auto generated base class for the model LeadFormSubmissionEntityModel.
 */
export const LeadFormSubmissionEntityModelBase = ModelBase
  .named('LeadFormSubmissionEntity')
  .props({
    __typename: types.optional(types.literal("LeadFormSubmissionEntity"), "LeadFormSubmissionEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => LeadFormSubmissionModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LeadFormSubmissionEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | LeadFormSubmissionModelSelector | ((selector: LeadFormSubmissionModelSelector) => LeadFormSubmissionModelSelector)) { return this.__child(`attributes`, LeadFormSubmissionModelSelector, builder) }
}
export function selectFromLeadFormSubmissionEntity() {
  return new LeadFormSubmissionEntityModelSelector()
}

export const leadFormSubmissionEntityModelPrimitives = selectFromLeadFormSubmissionEntity()
