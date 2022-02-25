/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ComponentSectionsRichTextBase
 * auto generated base class for the model ComponentSectionsRichTextModel.
 */
export const ComponentSectionsRichTextModelBase = ModelBase
  .named('ComponentSectionsRichText')
  .props({
    __typename: types.optional(types.literal("ComponentSectionsRichText"), "ComponentSectionsRichText"),
    id: types.identifier,
    content: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentSectionsRichTextModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get content() { return this.__attr(`content`) }
}
export function selectFromComponentSectionsRichText() {
  return new ComponentSectionsRichTextModelSelector()
}

export const componentSectionsRichTextModelPrimitives = selectFromComponentSectionsRichText().content
