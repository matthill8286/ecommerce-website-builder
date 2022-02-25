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
 * ComponentElementsTestimonialBase
 * auto generated base class for the model ComponentElementsTestimonialModel.
 */
export const ComponentElementsTestimonialModelBase = ModelBase
  .named('ComponentElementsTestimonial')
  .props({
    __typename: types.optional(types.literal("ComponentElementsTestimonial"), "ComponentElementsTestimonial"),
    id: types.identifier,
    logo: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    picture: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    text: types.union(types.undefined, types.null, types.string),
    authorName: types.union(types.undefined, types.null, types.string),
    authorTitle: types.union(types.undefined, types.null, types.string),
    link: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentElementsTestimonialModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get text() { return this.__attr(`text`) }
  get authorName() { return this.__attr(`authorName`) }
  get authorTitle() { return this.__attr(`authorTitle`) }
  get link() { return this.__attr(`link`) }
  logo(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`logo`, UploadFileEntityResponseModelSelector, builder) }
  picture(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`picture`, UploadFileEntityResponseModelSelector, builder) }
}
export function selectFromComponentElementsTestimonial() {
  return new ComponentElementsTestimonialModelSelector()
}

export const componentElementsTestimonialModelPrimitives = selectFromComponentElementsTestimonial().text.authorName.authorTitle.link
