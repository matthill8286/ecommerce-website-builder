import { Instance } from "mobx-state-tree"
import { ComponentLinksButtonModelBase } from "./ComponentLinksButtonModel.base"

/* The TypeScript type of an instance of ComponentLinksButtonModel */
export interface ComponentLinksButtonModelType extends Instance<typeof ComponentLinksButtonModel.Type> {}

/* A graphql query fragment builders for ComponentLinksButtonModel */
export { selectFromComponentLinksButton, componentLinksButtonModelPrimitives, ComponentLinksButtonModelSelector } from "./ComponentLinksButtonModel.base"

/**
 * ComponentLinksButtonModel
 */
export const ComponentLinksButtonModel = ComponentLinksButtonModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
