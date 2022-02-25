import { Instance } from "mobx-state-tree"
import { ComponentElementsFeatureColumnModelBase } from "./ComponentElementsFeatureColumnModel.base"

/* The TypeScript type of an instance of ComponentElementsFeatureColumnModel */
export interface ComponentElementsFeatureColumnModelType extends Instance<typeof ComponentElementsFeatureColumnModel.Type> {}

/* A graphql query fragment builders for ComponentElementsFeatureColumnModel */
export { selectFromComponentElementsFeatureColumn, componentElementsFeatureColumnModelPrimitives, ComponentElementsFeatureColumnModelSelector } from "./ComponentElementsFeatureColumnModel.base"

/**
 * ComponentElementsFeatureColumnModel
 */
export const ComponentElementsFeatureColumnModel = ComponentElementsFeatureColumnModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
