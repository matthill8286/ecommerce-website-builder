/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PageEntityModel, PageEntityModelType } from "./PageEntityModel"
import { PageEntityModelSelector } from "./PageEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<PageEntityModelType>;
}

/**
 * PageRelationResponseCollectionBase
 * auto generated base class for the model PageRelationResponseCollectionModel.
 */
export const PageRelationResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PageRelationResponseCollection')
  .props({
    __typename: types.optional(types.literal("PageRelationResponseCollection"), "PageRelationResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => PageEntityModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PageRelationResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | PageEntityModelSelector | ((selector: PageEntityModelSelector) => PageEntityModelSelector)) { return this.__child(`data`, PageEntityModelSelector, builder) }
}
export function selectFromPageRelationResponseCollection() {
  return new PageRelationResponseCollectionModelSelector()
}

export const pageRelationResponseCollectionModelPrimitives = selectFromPageRelationResponseCollection()
