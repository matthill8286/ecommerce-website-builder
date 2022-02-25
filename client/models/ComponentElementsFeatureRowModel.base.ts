/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentLinksLinkModel, ComponentLinksLinkModelType } from "./ComponentLinksLinkModel"
import { ComponentLinksLinkModelSelector } from "./ComponentLinksLinkModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  link: ComponentLinksLinkModelType;
}

/**
 * ComponentElementsFeatureRowBase
 * auto generated base class for the model ComponentElementsFeatureRowModel.
 */
export const ComponentElementsFeatureRowModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentElementsFeatureRow')
  .props({
    __typename: types.optional(types.literal("ComponentElementsFeatureRow"), "ComponentElementsFeatureRow"),
    id: types.identifier,
    title: types.union(types.undefined, types.string),
    description: types.union(types.undefined, types.null, types.string),
    media: types.union(types.undefined, types.late((): any => UploadFileEntityResponseModel)),
    link: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentLinksLinkModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentElementsFeatureRowModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get description() { return this.__attr(`description`) }
  media(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`media`, UploadFileEntityResponseModelSelector, builder) }
  link(builder?: string | ComponentLinksLinkModelSelector | ((selector: ComponentLinksLinkModelSelector) => ComponentLinksLinkModelSelector)) { return this.__child(`link`, ComponentLinksLinkModelSelector, builder) }
}
export function selectFromComponentElementsFeatureRow() {
  return new ComponentElementsFeatureRowModelSelector()
}

export const componentElementsFeatureRowModelPrimitives = selectFromComponentElementsFeatureRow().title.description
