/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentLinksButtonLinkModel, ComponentLinksButtonLinkModelType } from "./ComponentLinksButtonLinkModel"
import { ComponentLinksButtonLinkModelSelector } from "./ComponentLinksButtonLinkModel.base"
import { ComponentLinksLinkModel, ComponentLinksLinkModelType } from "./ComponentLinksLinkModel"
import { ComponentLinksLinkModelSelector } from "./ComponentLinksLinkModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  links: IObservableArray<ComponentLinksLinkModelType>;
  button: ComponentLinksButtonLinkModelType;
}

/**
 * ComponentLayoutNavbarBase
 * auto generated base class for the model ComponentLayoutNavbarModel.
 */
export const ComponentLayoutNavbarModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentLayoutNavbar')
  .props({
    __typename: types.optional(types.literal("ComponentLayoutNavbar"), "ComponentLayoutNavbar"),
    id: types.identifier,
    links: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentLinksLinkModel))))),
    button: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentLinksButtonLinkModel))),
    logo: types.union(types.undefined, types.late((): any => UploadFileEntityResponseModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentLayoutNavbarModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  links(builder?: string | ComponentLinksLinkModelSelector | ((selector: ComponentLinksLinkModelSelector) => ComponentLinksLinkModelSelector)) { return this.__child(`links`, ComponentLinksLinkModelSelector, builder) }
  button(builder?: string | ComponentLinksButtonLinkModelSelector | ((selector: ComponentLinksButtonLinkModelSelector) => ComponentLinksButtonLinkModelSelector)) { return this.__child(`button`, ComponentLinksButtonLinkModelSelector, builder) }
  logo(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`logo`, UploadFileEntityResponseModelSelector, builder) }
}
export function selectFromComponentLayoutNavbar() {
  return new ComponentLayoutNavbarModelSelector()
}

export const componentLayoutNavbarModelPrimitives = selectFromComponentLayoutNavbar()
