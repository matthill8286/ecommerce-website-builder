/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentLinksButtonLinkModel, ComponentLinksButtonLinkModelType } from "./ComponentLinksButtonLinkModel"
import { ComponentLinksButtonLinkModelSelector } from "./ComponentLinksButtonLinkModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  buttons: IObservableArray<ComponentLinksButtonLinkModelType>;
}

/**
 * ComponentSectionsHeroBase
 * auto generated base class for the model ComponentSectionsHeroModel.
 */
export const ComponentSectionsHeroModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentSectionsHero')
  .props({
    __typename: types.optional(types.literal("ComponentSectionsHero"), "ComponentSectionsHero"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    label: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    picture: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    smallTextWithLink: types.union(types.undefined, types.null, types.string),
    buttons: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentLinksButtonLinkModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentSectionsHeroModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get label() { return this.__attr(`label`) }
  get description() { return this.__attr(`description`) }
  get smallTextWithLink() { return this.__attr(`smallTextWithLink`) }
  picture(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`picture`, UploadFileEntityResponseModelSelector, builder) }
  buttons(builder?: string | ComponentLinksButtonLinkModelSelector | ((selector: ComponentLinksButtonLinkModelSelector) => ComponentLinksButtonLinkModelSelector)) { return this.__child(`buttons`, ComponentLinksButtonLinkModelSelector, builder) }
}
export function selectFromComponentSectionsHero() {
  return new ComponentSectionsHeroModelSelector()
}

export const componentSectionsHeroModelPrimitives = selectFromComponentSectionsHero().title.label.description.smallTextWithLink
