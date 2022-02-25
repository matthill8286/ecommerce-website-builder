/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { I18NLocaleEntityModel, I18NLocaleEntityModelType } from "./I18NLocaleEntityModel"
import { I18NLocaleEntityModelSelector } from "./I18NLocaleEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: I18NLocaleEntityModelType;
}

/**
 * I18NLocaleEntityResponseBase
 * auto generated base class for the model I18NLocaleEntityResponseModel.
 */
export const I18NLocaleEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('I18NLocaleEntityResponse')
  .props({
    __typename: types.optional(types.literal("I18NLocaleEntityResponse"), "I18NLocaleEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => I18NLocaleEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class I18NLocaleEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | I18NLocaleEntityModelSelector | ((selector: I18NLocaleEntityModelSelector) => I18NLocaleEntityModelSelector)) { return this.__child(`data`, I18NLocaleEntityModelSelector, builder) }
}
export function selectFromI18NLocaleEntityResponse() {
  return new I18NLocaleEntityResponseModelSelector()
}

export const i18NLocaleEntityResponseModelPrimitives = selectFromI18NLocaleEntityResponse()
