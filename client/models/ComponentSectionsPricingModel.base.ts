/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentElementsPlanModel, ComponentElementsPlanModelType } from "./ComponentElementsPlanModel"
import { ComponentElementsPlanModelSelector } from "./ComponentElementsPlanModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  plans: IObservableArray<ComponentElementsPlanModelType>;
}

/**
 * ComponentSectionsPricingBase
 * auto generated base class for the model ComponentSectionsPricingModel.
 */
export const ComponentSectionsPricingModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentSectionsPricing')
  .props({
    __typename: types.optional(types.literal("ComponentSectionsPricing"), "ComponentSectionsPricing"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    plans: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentElementsPlanModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentSectionsPricingModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  plans(builder?: string | ComponentElementsPlanModelSelector | ((selector: ComponentElementsPlanModelSelector) => ComponentElementsPlanModelSelector)) { return this.__child(`plans`, ComponentElementsPlanModelSelector, builder) }
}
export function selectFromComponentSectionsPricing() {
  return new ComponentSectionsPricingModelSelector()
}

export const componentSectionsPricingModelPrimitives = selectFromComponentSectionsPricing().title
