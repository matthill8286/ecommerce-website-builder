/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentLinksLinkModel, ComponentLinksLinkModelType } from "./ComponentLinksLinkModel"
import { ComponentLinksLinkModelSelector } from "./ComponentLinksLinkModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  links: IObservableArray<ComponentLinksLinkModelType>;
}

/**
 * ComponentElementsFooterSectionBase
 * auto generated base class for the model ComponentElementsFooterSectionModel.
 */
export const ComponentElementsFooterSectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentElementsFooterSection')
  .props({
    __typename: types.optional(types.literal("ComponentElementsFooterSection"), "ComponentElementsFooterSection"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    links: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentLinksLinkModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentElementsFooterSectionModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  links(builder?: string | ComponentLinksLinkModelSelector | ((selector: ComponentLinksLinkModelSelector) => ComponentLinksLinkModelSelector)) { return this.__child(`links`, ComponentLinksLinkModelSelector, builder) }
}
export function selectFromComponentElementsFooterSection() {
  return new ComponentElementsFooterSectionModelSelector()
}

export const componentElementsFooterSectionModelPrimitives = selectFromComponentElementsFooterSection().title
