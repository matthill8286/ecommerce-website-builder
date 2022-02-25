/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { EnumComponentelementsnotificationbannerTypeEnumType } from "./EnumComponentelementsnotificationbannerTypeEnum"
import { RootStoreType } from "./index"


/**
 * ComponentElementsNotificationBannerBase
 * auto generated base class for the model ComponentElementsNotificationBannerModel.
 */
export const ComponentElementsNotificationBannerModelBase = ModelBase
  .named('ComponentElementsNotificationBanner')
  .props({
    __typename: types.optional(types.literal("ComponentElementsNotificationBanner"), "ComponentElementsNotificationBanner"),
    id: types.identifier,
    text: types.union(types.undefined, types.null, types.string),
    type: types.union(types.undefined, EnumComponentelementsnotificationbannerTypeEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentElementsNotificationBannerModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get text() { return this.__attr(`text`) }
  get type() { return this.__attr(`type`) }
}
export function selectFromComponentElementsNotificationBanner() {
  return new ComponentElementsNotificationBannerModelSelector()
}

export const componentElementsNotificationBannerModelPrimitives = selectFromComponentElementsNotificationBanner().text.type