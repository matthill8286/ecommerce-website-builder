/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ComponentElementsFeatureBase
 * auto generated base class for the model ComponentElementsFeatureModel.
 */
export const ComponentElementsFeatureModelBase = ModelBase
  .named('ComponentElementsFeature')
  .props({
    __typename: types.optional(types.literal("ComponentElementsFeature"), "ComponentElementsFeature"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentElementsFeatureModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromComponentElementsFeature() {
  return new ComponentElementsFeatureModelSelector()
}

export const componentElementsFeatureModelPrimitives = selectFromComponentElementsFeature().name
