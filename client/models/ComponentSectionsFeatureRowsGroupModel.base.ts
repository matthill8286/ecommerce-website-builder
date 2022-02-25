/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentElementsFeatureRowModel, ComponentElementsFeatureRowModelType } from "./ComponentElementsFeatureRowModel"
import { ComponentElementsFeatureRowModelSelector } from "./ComponentElementsFeatureRowModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  features: IObservableArray<ComponentElementsFeatureRowModelType>;
}

/**
 * ComponentSectionsFeatureRowsGroupBase
 * auto generated base class for the model ComponentSectionsFeatureRowsGroupModel.
 */
export const ComponentSectionsFeatureRowsGroupModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentSectionsFeatureRowsGroup')
  .props({
    __typename: types.optional(types.literal("ComponentSectionsFeatureRowsGroup"), "ComponentSectionsFeatureRowsGroup"),
    id: types.identifier,
    features: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentElementsFeatureRowModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentSectionsFeatureRowsGroupModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  features(builder?: string | ComponentElementsFeatureRowModelSelector | ((selector: ComponentElementsFeatureRowModelSelector) => ComponentElementsFeatureRowModelSelector)) { return this.__child(`features`, ComponentElementsFeatureRowModelSelector, builder) }
}
export function selectFromComponentSectionsFeatureRowsGroup() {
  return new ComponentSectionsFeatureRowsGroupModelSelector()
}

export const componentSectionsFeatureRowsGroupModelPrimitives = selectFromComponentSectionsFeatureRowsGroup()
