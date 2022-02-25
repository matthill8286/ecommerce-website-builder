/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/**
 * ComponentSectionsLargeVideoBase
 * auto generated base class for the model ComponentSectionsLargeVideoModel.
 */
export const ComponentSectionsLargeVideoModelBase = ModelBase
  .named('ComponentSectionsLargeVideo')
  .props({
    __typename: types.optional(types.literal("ComponentSectionsLargeVideo"), "ComponentSectionsLargeVideo"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    video: types.union(types.undefined, types.late((): any => UploadFileEntityResponseModel)),
    poster: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentSectionsLargeVideoModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get description() { return this.__attr(`description`) }
  video(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`video`, UploadFileEntityResponseModelSelector, builder) }
  poster(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`poster`, UploadFileEntityResponseModelSelector, builder) }
}
export function selectFromComponentSectionsLargeVideo() {
  return new ComponentSectionsLargeVideoModelSelector()
}

export const componentSectionsLargeVideoModelPrimitives = selectFromComponentSectionsLargeVideo().title.description
