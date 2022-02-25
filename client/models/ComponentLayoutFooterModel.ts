import { Instance } from "mobx-state-tree"
import { ComponentLayoutFooterModelBase } from "./ComponentLayoutFooterModel.base"

/* The TypeScript type of an instance of ComponentLayoutFooterModel */
export interface ComponentLayoutFooterModelType extends Instance<typeof ComponentLayoutFooterModel.Type> {}

/* A graphql query fragment builders for ComponentLayoutFooterModel */
export { selectFromComponentLayoutFooter, componentLayoutFooterModelPrimitives, ComponentLayoutFooterModelSelector } from "./ComponentLayoutFooterModel.base"

/**
 * ComponentLayoutFooterModel
 */
export const ComponentLayoutFooterModel = ComponentLayoutFooterModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
