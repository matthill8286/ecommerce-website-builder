import { Instance } from "mobx-state-tree"
import { ComponentElementsLogosModelBase } from "./ComponentElementsLogosModel.base"

/* The TypeScript type of an instance of ComponentElementsLogosModel */
export interface ComponentElementsLogosModelType extends Instance<typeof ComponentElementsLogosModel.Type> {}

/* A graphql query fragment builders for ComponentElementsLogosModel */
export { selectFromComponentElementsLogos, componentElementsLogosModelPrimitives, ComponentElementsLogosModelSelector } from "./ComponentElementsLogosModel.base"

/**
 * ComponentElementsLogosModel
 */
export const ComponentElementsLogosModel = ComponentElementsLogosModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
