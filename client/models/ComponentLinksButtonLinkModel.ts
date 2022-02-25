import { Instance } from "mobx-state-tree"
import { ComponentLinksButtonLinkModelBase } from "./ComponentLinksButtonLinkModel.base"

/* The TypeScript type of an instance of ComponentLinksButtonLinkModel */
export interface ComponentLinksButtonLinkModelType extends Instance<typeof ComponentLinksButtonLinkModel.Type> {}

/* A graphql query fragment builders for ComponentLinksButtonLinkModel */
export { selectFromComponentLinksButtonLink, componentLinksButtonLinkModelPrimitives, ComponentLinksButtonLinkModelSelector } from "./ComponentLinksButtonLinkModel.base"

/**
 * ComponentLinksButtonLinkModel
 */
export const ComponentLinksButtonLinkModel = ComponentLinksButtonLinkModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
