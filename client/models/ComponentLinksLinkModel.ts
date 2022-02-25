import { Instance } from "mobx-state-tree"
import { ComponentLinksLinkModelBase } from "./ComponentLinksLinkModel.base"

/* The TypeScript type of an instance of ComponentLinksLinkModel */
export interface ComponentLinksLinkModelType extends Instance<typeof ComponentLinksLinkModel.Type> {}

/* A graphql query fragment builders for ComponentLinksLinkModel */
export { selectFromComponentLinksLink, componentLinksLinkModelPrimitives, ComponentLinksLinkModelSelector } from "./ComponentLinksLinkModel.base"

/**
 * ComponentLinksLinkModel
 */
export const ComponentLinksLinkModel = ComponentLinksLinkModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
