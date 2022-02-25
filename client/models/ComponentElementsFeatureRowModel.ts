import { Instance } from "mobx-state-tree"
import { ComponentElementsFeatureRowModelBase } from "./ComponentElementsFeatureRowModel.base"

/* The TypeScript type of an instance of ComponentElementsFeatureRowModel */
export interface ComponentElementsFeatureRowModelType extends Instance<typeof ComponentElementsFeatureRowModel.Type> {}

/* A graphql query fragment builders for ComponentElementsFeatureRowModel */
export { selectFromComponentElementsFeatureRow, componentElementsFeatureRowModelPrimitives, ComponentElementsFeatureRowModelSelector } from "./ComponentElementsFeatureRowModel.base"

/**
 * ComponentElementsFeatureRowModel
 */
export const ComponentElementsFeatureRowModel = ComponentElementsFeatureRowModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
