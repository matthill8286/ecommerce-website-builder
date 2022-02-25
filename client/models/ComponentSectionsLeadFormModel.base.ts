/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentLinksButtonModel, ComponentLinksButtonModelType } from "./ComponentLinksButtonModel"
import { ComponentLinksButtonModelSelector } from "./ComponentLinksButtonModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  submitButton: ComponentLinksButtonModelType;
}

/**
 * ComponentSectionsLeadFormBase
 * auto generated base class for the model ComponentSectionsLeadFormModel.
 */
export const ComponentSectionsLeadFormModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentSectionsLeadForm')
  .props({
    __typename: types.optional(types.literal("ComponentSectionsLeadForm"), "ComponentSectionsLeadForm"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    emailPlaceholder: types.union(types.undefined, types.null, types.string),
    submitButton: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentLinksButtonModel))),
    location: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentSectionsLeadFormModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get emailPlaceholder() { return this.__attr(`emailPlaceholder`) }
  get location() { return this.__attr(`location`) }
  submitButton(builder?: string | ComponentLinksButtonModelSelector | ((selector: ComponentLinksButtonModelSelector) => ComponentLinksButtonModelSelector)) { return this.__child(`submitButton`, ComponentLinksButtonModelSelector, builder) }
}
export function selectFromComponentSectionsLeadForm() {
  return new ComponentSectionsLeadFormModelSelector()
}

export const componentSectionsLeadFormModelPrimitives = selectFromComponentSectionsLeadForm().title.emailPlaceholder.location
