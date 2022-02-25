/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { I18NLocaleEntityModel, I18NLocaleEntityModelType } from "./I18NLocaleEntityModel"
import { I18NLocaleEntityModelSelector } from "./I18NLocaleEntityModel.base"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<I18NLocaleEntityModelType>;
}

/**
 * I18NLocaleEntityResponseCollectionBase
 * auto generated base class for the model I18NLocaleEntityResponseCollectionModel.
 */
export const I18NLocaleEntityResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('I18NLocaleEntityResponseCollection')
  .props({
    __typename: types.optional(types.literal("I18NLocaleEntityResponseCollection"), "I18NLocaleEntityResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => I18NLocaleEntityModel)))),
    meta: types.union(types.undefined, types.late((): any => ResponseCollectionMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class I18NLocaleEntityResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | I18NLocaleEntityModelSelector | ((selector: I18NLocaleEntityModelSelector) => I18NLocaleEntityModelSelector)) { return this.__child(`data`, I18NLocaleEntityModelSelector, builder) }
  meta(builder?: string | ResponseCollectionMetaModelSelector | ((selector: ResponseCollectionMetaModelSelector) => ResponseCollectionMetaModelSelector)) { return this.__child(`meta`, ResponseCollectionMetaModelSelector, builder) }
}
export function selectFromI18NLocaleEntityResponseCollection() {
  return new I18NLocaleEntityResponseCollectionModelSelector()
}

export const i18NLocaleEntityResponseCollectionModelPrimitives = selectFromI18NLocaleEntityResponseCollection()
