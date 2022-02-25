/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentElementsFeatureModel, ComponentElementsFeatureModelType } from "./ComponentElementsFeatureModel"
import { ComponentElementsFeatureModelSelector } from "./ComponentElementsFeatureModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  features: IObservableArray<ComponentElementsFeatureModelType>;
}

/**
 * ComponentElementsPlanBase
 * auto generated base class for the model ComponentElementsPlanModel.
 */
export const ComponentElementsPlanModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentElementsPlan')
  .props({
    __typename: types.optional(types.literal("ComponentElementsPlan"), "ComponentElementsPlan"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    features: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentElementsFeatureModel))))),
    isRecommended: types.union(types.undefined, types.null, types.boolean),
    price: types.union(types.undefined, types.null, types.number),
    pricePeriod: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentElementsPlanModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get description() { return this.__attr(`description`) }
  get isRecommended() { return this.__attr(`isRecommended`) }
  get price() { return this.__attr(`price`) }
  get pricePeriod() { return this.__attr(`pricePeriod`) }
  features(builder?: string | ComponentElementsFeatureModelSelector | ((selector: ComponentElementsFeatureModelSelector) => ComponentElementsFeatureModelSelector)) { return this.__child(`features`, ComponentElementsFeatureModelSelector, builder) }
}
export function selectFromComponentElementsPlan() {
  return new ComponentElementsPlanModelSelector()
}

export const componentElementsPlanModelPrimitives = selectFromComponentElementsPlan().name.description.isRecommended.price.pricePeriod
