/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentElementsNotificationBannerModel, ComponentElementsNotificationBannerModelType } from "./ComponentElementsNotificationBannerModel"
import { ComponentElementsNotificationBannerModelSelector } from "./ComponentElementsNotificationBannerModel.base"
import { ComponentLayoutFooterModel, ComponentLayoutFooterModelType } from "./ComponentLayoutFooterModel"
import { ComponentLayoutFooterModelSelector } from "./ComponentLayoutFooterModel.base"
import { ComponentLayoutNavbarModel, ComponentLayoutNavbarModelType } from "./ComponentLayoutNavbarModel"
import { ComponentLayoutNavbarModelSelector } from "./ComponentLayoutNavbarModel.base"
import { ComponentMetaMetadataModel, ComponentMetaMetadataModelType } from "./ComponentMetaMetadataModel"
import { ComponentMetaMetadataModelSelector } from "./ComponentMetaMetadataModel.base"
import { GlobalRelationResponseCollectionModel, GlobalRelationResponseCollectionModelType } from "./GlobalRelationResponseCollectionModel"
import { GlobalRelationResponseCollectionModelSelector } from "./GlobalRelationResponseCollectionModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  metadata: ComponentMetaMetadataModelType;
  notificationBanner: ComponentElementsNotificationBannerModelType;
  navbar: ComponentLayoutNavbarModelType;
  footer: ComponentLayoutFooterModelType;
}

/**
 * GlobalBase
 * auto generated base class for the model GlobalModel.
 */
export const GlobalModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Global')
  .props({
    __typename: types.optional(types.literal("Global"), "Global"),
    metadata: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentMetaMetadataModel))),
    metaTitleSuffix: types.union(types.undefined, types.string),
    favicon: types.union(types.undefined, types.null, types.late((): any => UploadFileEntityResponseModel)),
    notificationBanner: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentElementsNotificationBannerModel))),
    navbar: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentLayoutNavbarModel))),
    footer: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ComponentLayoutFooterModel))),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
    localizations: types.union(types.undefined, types.null, types.late((): any => GlobalRelationResponseCollectionModel)),
    locale: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class GlobalModelSelector extends QueryBuilder {
  get metaTitleSuffix() { return this.__attr(`metaTitleSuffix`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get locale() { return this.__attr(`locale`) }
  metadata(builder?: string | ComponentMetaMetadataModelSelector | ((selector: ComponentMetaMetadataModelSelector) => ComponentMetaMetadataModelSelector)) { return this.__child(`metadata`, ComponentMetaMetadataModelSelector, builder) }
  favicon(builder?: string | UploadFileEntityResponseModelSelector | ((selector: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector)) { return this.__child(`favicon`, UploadFileEntityResponseModelSelector, builder) }
  notificationBanner(builder?: string | ComponentElementsNotificationBannerModelSelector | ((selector: ComponentElementsNotificationBannerModelSelector) => ComponentElementsNotificationBannerModelSelector)) { return this.__child(`notificationBanner`, ComponentElementsNotificationBannerModelSelector, builder) }
  navbar(builder?: string | ComponentLayoutNavbarModelSelector | ((selector: ComponentLayoutNavbarModelSelector) => ComponentLayoutNavbarModelSelector)) { return this.__child(`navbar`, ComponentLayoutNavbarModelSelector, builder) }
  footer(builder?: string | ComponentLayoutFooterModelSelector | ((selector: ComponentLayoutFooterModelSelector) => ComponentLayoutFooterModelSelector)) { return this.__child(`footer`, ComponentLayoutFooterModelSelector, builder) }
  localizations(builder?: string | GlobalRelationResponseCollectionModelSelector | ((selector: GlobalRelationResponseCollectionModelSelector) => GlobalRelationResponseCollectionModelSelector)) { return this.__child(`localizations`, GlobalRelationResponseCollectionModelSelector, builder) }
}
export function selectFromGlobal() {
  return new GlobalModelSelector()
}

export const globalModelPrimitives = selectFromGlobal().metaTitleSuffix.createdAt.updatedAt.locale
