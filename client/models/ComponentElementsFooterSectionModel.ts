import { Instance } from "mobx-state-tree"
import { ComponentElementsFooterSectionModelBase } from "./ComponentElementsFooterSectionModel.base"

/* The TypeScript type of an instance of ComponentElementsFooterSectionModel */
export interface ComponentElementsFooterSectionModelType extends Instance<typeof ComponentElementsFooterSectionModel.Type> {}

/* A graphql query fragment builders for ComponentElementsFooterSectionModel */
export { selectFromComponentElementsFooterSection, componentElementsFooterSectionModelPrimitives, ComponentElementsFooterSectionModelSelector } from "./ComponentElementsFooterSectionModel.base"

/**
 * ComponentElementsFooterSectionModel
 */
export const ComponentElementsFooterSectionModel = ComponentElementsFooterSectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
