/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PageEntityModel, PageEntityModelType } from "./PageEntityModel"
import { PageEntityModelSelector } from "./PageEntityModel.base"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<PageEntityModelType>;
}

/**
 * PageEntityResponseCollectionBase
 * auto generated base class for the model PageEntityResponseCollectionModel.
 */
export const PageEntityResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PageEntityResponseCollection')
  .props({
    __typename: types.optional(types.literal("PageEntityResponseCollection"), "PageEntityResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => PageEntityModel)))),
    meta: types.union(types.undefined, types.late((): any => ResponseCollectionMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PageEntityResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | PageEntityModelSelector | ((selector: PageEntityModelSelector) => PageEntityModelSelector)) { return this.__child(`data`, PageEntityModelSelector, builder) }
  meta(builder?: string | ResponseCollectionMetaModelSelector | ((selector: ResponseCollectionMetaModelSelector) => ResponseCollectionMetaModelSelector)) { return this.__child(`meta`, ResponseCollectionMetaModelSelector, builder) }
}
export function selectFromPageEntityResponseCollection() {
  return new PageEntityResponseCollectionModelSelector()
}

export const pageEntityResponseCollectionModelPrimitives = selectFromPageEntityResponseCollection()
