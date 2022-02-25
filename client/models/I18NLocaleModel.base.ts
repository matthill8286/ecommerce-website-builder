/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * I18NLocaleBase
 * auto generated base class for the model I18NLocaleModel.
 */
export const I18NLocaleModelBase = ModelBase
  .named('I18NLocale')
  .props({
    __typename: types.optional(types.literal("I18NLocale"), "I18NLocale"),
    name: types.union(types.undefined, types.null, types.string),
    code: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class I18NLocaleModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get code() { return this.__attr(`code`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromI18NLocale() {
  return new I18NLocaleModelSelector()
}

export const i18NLocaleModelPrimitives = selectFromI18NLocale().name.code.createdAt.updatedAt
