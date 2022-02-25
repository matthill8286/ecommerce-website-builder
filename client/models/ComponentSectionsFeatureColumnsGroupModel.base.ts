/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentElementsFeatureColumnModel, ComponentElementsFeatureColumnModelType } from "./ComponentElementsFeatureColumnModel"
import { ComponentElementsFeatureColumnModelSelector } from "./ComponentElementsFeatureColumnModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  features: IObservableArray<ComponentElementsFeatureColumnModelType>;
}

/**
 * ComponentSectionsFeatureColumnsGroupBase
 * auto generated base class for the model ComponentSectionsFeatureColumnsGroupModel.
 */
export const ComponentSectionsFeatureColumnsGroupModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentSectionsFeatureColumnsGroup')
  .props({
    __typename: types.optional(types.literal("ComponentSectionsFeatureColumnsGroup"), "ComponentSectionsFeatureColumnsGroup"),
    id: types.identifier,
    features: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentElementsFeatureColumnModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentSectionsFeatureColumnsGroupModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  features(builder?: string | ComponentElementsFeatureColumnModelSelector | ((selector: ComponentElementsFeatureColumnModelSelector) => ComponentElementsFeatureColumnModelSelector)) { return this.__child(`features`, ComponentElementsFeatureColumnModelSelector, builder) }
}
export function selectFromComponentSectionsFeatureColumnsGroup() {
  return new ComponentSectionsFeatureColumnsGroupModelSelector()
}

export const componentSectionsFeatureColumnsGroupModelPrimitives = selectFromComponentSectionsFeatureColumnsGroup()
