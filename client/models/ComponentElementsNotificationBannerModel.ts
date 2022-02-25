import { Instance } from "mobx-state-tree"
import { ComponentElementsNotificationBannerModelBase } from "./ComponentElementsNotificationBannerModel.base"

/* The TypeScript type of an instance of ComponentElementsNotificationBannerModel */
export interface ComponentElementsNotificationBannerModelType extends Instance<typeof ComponentElementsNotificationBannerModel.Type> {}

/* A graphql query fragment builders for ComponentElementsNotificationBannerModel */
export { selectFromComponentElementsNotificationBanner, componentElementsNotificationBannerModelPrimitives, ComponentElementsNotificationBannerModelSelector } from "./ComponentElementsNotificationBannerModel.base"

/**
 * ComponentElementsNotificationBannerModel
 */
export const ComponentElementsNotificationBannerModel = ComponentElementsNotificationBannerModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
