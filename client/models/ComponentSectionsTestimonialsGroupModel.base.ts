/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentElementsLogosModel, ComponentElementsLogosModelType } from "./ComponentElementsLogosModel"
import { ComponentElementsLogosModelSelector } from "./ComponentElementsLogosModel.base"
import { ComponentElementsTestimonialModel, ComponentElementsTestimonialModelType } from "./ComponentElementsTestimonialModel"
import { ComponentElementsTestimonialModelSelector } from "./ComponentElementsTestimonialModel.base"
import { ComponentLinksLinkModel, ComponentLinksLinkModelType } from "./ComponentLinksLinkModel"
import { ComponentLinksLinkModelSelector } from "./ComponentLinksLinkModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  link: ComponentLinksLinkModelType;
  logos: IObservableArray<ComponentElementsLogosModelType>;
  testimonials: IObservableArray<ComponentElementsTestimonialModelType>;
}

/**
 * ComponentSectionsTestimonialsGroupBase
 * auto generated base class for the model ComponentSectionsTestimonialsGroupModel.
 */
export const ComponentSectionsTestimonialsGroupModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentSectionsTestimonialsGroup')
  .props({
    __typename: types.optional(types.literal("ComponentSectionsTestimonialsGroup"), "ComponentSectionsTestimonialsGroup"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    link: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentLinksLinkModel))),
    logos: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentElementsLogosModel))))),
    testimonials: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentElementsTestimonialModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentSectionsTestimonialsGroupModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get description() { return this.__attr(`description`) }
  link(builder?: string | ComponentLinksLinkModelSelector | ((selector: ComponentLinksLinkModelSelector) => ComponentLinksLinkModelSelector)) { return this.__child(`link`, ComponentLinksLinkModelSelector, builder) }
  logos(builder?: string | ComponentElementsLogosModelSelector | ((selector: ComponentElementsLogosModelSelector) => ComponentElementsLogosModelSelector)) { return this.__child(`logos`, ComponentElementsLogosModelSelector, builder) }
  testimonials(builder?: string | ComponentElementsTestimonialModelSelector | ((selector: ComponentElementsTestimonialModelSelector) => ComponentElementsTestimonialModelSelector)) { return this.__child(`testimonials`, ComponentElementsTestimonialModelSelector, builder) }
}
export function selectFromComponentSectionsTestimonialsGroup() {
  return new ComponentSectionsTestimonialsGroupModelSelector()
}

export const componentSectionsTestimonialsGroupModelPrimitives = selectFromComponentSectionsTestimonialsGroup().title.description
