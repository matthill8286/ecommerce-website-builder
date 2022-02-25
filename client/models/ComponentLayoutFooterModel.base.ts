/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentElementsFooterSectionModel, ComponentElementsFooterSectionModelType } from "./ComponentElementsFooterSectionModel"
import { ComponentElementsFooterSectionModelSelector } from "./ComponentElementsFooterSectionModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  columns: IObservableArray<ComponentElementsFooterSectionModelType>;
}

/**
 * ComponentLayoutFooterBase
 * auto generated base class for the model ComponentLayoutFooterModel.
 */
export const ComponentLayoutFooterModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentLayoutFooter')
  .props({
    __typename: types.optional(types.literal("ComponentLayoutFooter"), "ComponentLayoutFooter"),
    id: types.identifier,
    logo: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    columns: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentElementsFooterSectionModel))))),
    smallText: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentLayoutFooterModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get smallText() { return this.__attr(`smallText`) }
  logo(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`logo`, UploadFileEntityResponseModelSelector, builder) }
  columns(builder?: string | ComponentElementsFooterSectionModelSelector | ((selector: ComponentElementsFooterSectionModelSelector) => ComponentElementsFooterSectionModelSelector)) { return this.__child(`columns`, ComponentElementsFooterSectionModelSelector, builder) }
}
export function selectFromComponentLayoutFooter() {
  return new ComponentLayoutFooterModelSelector()
}

export const componentLayoutFooterModelPrimitives = selectFromComponentLayoutFooter().smallText
