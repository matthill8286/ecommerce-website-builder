/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PageEntityModel, PageEntityModelType } from "./PageEntityModel"
import { PageEntityModelSelector } from "./PageEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: PageEntityModelType;
}

/**
 * PageEntityResponseBase
 * auto generated base class for the model PageEntityResponseModel.
 */
export const PageEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PageEntityResponse')
  .props({
    __typename: types.optional(types.literal("PageEntityResponse"), "PageEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PageEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PageEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | PageEntityModelSelector | ((selector: PageEntityModelSelector) => PageEntityModelSelector)) { return this.__child(`data`, PageEntityModelSelector, builder) }
}
export function selectFromPageEntityResponse() {
  return new PageEntityResponseModelSelector()
}

export const pageEntityResponseModelPrimitives = selectFromPageEntityResponse()
