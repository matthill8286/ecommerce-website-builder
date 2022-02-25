/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentLinksButtonLinkModel, ComponentLinksButtonLinkModelType } from "./ComponentLinksButtonLinkModel"
import { ComponentLinksButtonLinkModelSelector } from "./ComponentLinksButtonLinkModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  buttons: IObservableArray<ComponentLinksButtonLinkModelType>;
}

/**
 * ComponentSectionsBottomActionsBase
 * auto generated base class for the model ComponentSectionsBottomActionsModel.
 */
export const ComponentSectionsBottomActionsModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentSectionsBottomActions')
  .props({
    __typename: types.optional(types.literal("ComponentSectionsBottomActions"), "ComponentSectionsBottomActions"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    buttons: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentLinksButtonLinkModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentSectionsBottomActionsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  buttons(builder?: string | ComponentLinksButtonLinkModelSelector | ((selector: ComponentLinksButtonLinkModelSelector) => ComponentLinksButtonLinkModelSelector)) { return this.__child(`buttons`, ComponentLinksButtonLinkModelSelector, builder) }
}
export function selectFromComponentSectionsBottomActions() {
  return new ComponentSectionsBottomActionsModelSelector()
}

export const componentSectionsBottomActionsModelPrimitives = selectFromComponentSectionsBottomActions().title
