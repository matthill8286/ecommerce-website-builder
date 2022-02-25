/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { I18NLocaleModel, I18NLocaleModelType } from "./I18NLocaleModel"
import { I18NLocaleModelSelector } from "./I18NLocaleModel.base"
import { RootStoreType } from "./index"


/**
 * I18NLocaleEntityBase
 * auto generated base class for the model I18NLocaleEntityModel.
 */
export const I18NLocaleEntityModelBase = ModelBase
  .named('I18NLocaleEntity')
  .props({
    __typename: types.optional(types.literal("I18NLocaleEntity"), "I18NLocaleEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => I18NLocaleModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class I18NLocaleEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | I18NLocaleModelSelector | ((selector: I18NLocaleModelSelector) => I18NLocaleModelSelector)) { return this.__child(`attributes`, I18NLocaleModelSelector, builder) }
}
export function selectFromI18NLocaleEntity() {
  return new I18NLocaleEntityModelSelector()
}

export const i18NLocaleEntityModelPrimitives = selectFromI18NLocaleEntity()
