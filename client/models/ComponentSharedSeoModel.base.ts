/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentSharedMetaSocialModel, ComponentSharedMetaSocialModelType } from "./ComponentSharedMetaSocialModel"
import { ComponentSharedMetaSocialModelSelector } from "./ComponentSharedMetaSocialModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  metaSocial: IObservableArray<ComponentSharedMetaSocialModelType>;
}

/**
 * ComponentSharedSeoBase
 * auto generated base class for the model ComponentSharedSeoModel.
 */
export const ComponentSharedSeoModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentSharedSeo')
  .props({
    __typename: types.optional(types.literal("ComponentSharedSeo"), "ComponentSharedSeo"),
    id: types.identifier,
    metaTitle: types.union(types.undefined, types.string),
    metaDescription: types.union(types.undefined, types.string),
    metaImage: types.union(types.undefined, types.late((): any => UploadFileEntityResponseModel)),
    metaSocial: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentSharedMetaSocialModel))))),
    keywords: types.union(types.undefined, types.null, types.string),
    metaRobots: types.union(types.undefined, types.null, types.string),
    structuredData: types.union(types.undefined, types.null, types.frozen()),
    metaViewport: types.union(types.undefined, types.null, types.string),
    canonicalURL: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentSharedSeoModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get metaTitle() { return this.__attr(`metaTitle`) }
  get metaDescription() { return this.__attr(`metaDescription`) }
  get keywords() { return this.__attr(`keywords`) }
  get metaRobots() { return this.__attr(`metaRobots`) }
  get structuredData() { return this.__attr(`structuredData`) }
  get metaViewport() { return this.__attr(`metaViewport`) }
  get canonicalURL() { return this.__attr(`canonicalURL`) }
  metaImage(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`metaImage`, UploadFileEntityResponseModelSelector, builder) }
  metaSocial(builder?: string | ComponentSharedMetaSocialModelSelector | ((selector: ComponentSharedMetaSocialModelSelector) => ComponentSharedMetaSocialModelSelector)) { return this.__child(`metaSocial`, ComponentSharedMetaSocialModelSelector, builder) }
}
export function selectFromComponentSharedSeo() {
  return new ComponentSharedSeoModelSelector()
}

export const componentSharedSeoModelPrimitives = selectFromComponentSharedSeo().metaTitle.metaDescription.keywords.metaRobots.structuredData.metaViewport.canonicalURL
