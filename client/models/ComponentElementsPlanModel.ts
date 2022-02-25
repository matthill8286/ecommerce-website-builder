import { Instance } from "mobx-state-tree"
import { ComponentElementsPlanModelBase } from "./ComponentElementsPlanModel.base"

/* The TypeScript type of an instance of ComponentElementsPlanModel */
export interface ComponentElementsPlanModelType extends Instance<typeof ComponentElementsPlanModel.Type> {}

/* A graphql query fragment builders for ComponentElementsPlanModel */
export { selectFromComponentElementsPlan, componentElementsPlanModelPrimitives, ComponentElementsPlanModelSelector } from "./ComponentElementsPlanModel.base"

/**
 * ComponentElementsPlanModel
 */
export const ComponentElementsPlanModel = ComponentElementsPlanModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
