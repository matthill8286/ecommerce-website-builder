import { Instance } from "mobx-state-tree"
import { ComponentElementsFeatureModelBase } from "./ComponentElementsFeatureModel.base"

/* The TypeScript type of an instance of ComponentElementsFeatureModel */
export interface ComponentElementsFeatureModelType extends Instance<typeof ComponentElementsFeatureModel.Type> {}

/* A graphql query fragment builders for ComponentElementsFeatureModel */
export { selectFromComponentElementsFeature, componentElementsFeatureModelPrimitives, ComponentElementsFeatureModelSelector } from "./ComponentElementsFeatureModel.base"

/**
 * ComponentElementsFeatureModel
 */
export const ComponentElementsFeatureModel = ComponentElementsFeatureModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
