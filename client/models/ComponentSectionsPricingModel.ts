import { Instance } from "mobx-state-tree"
import { ComponentSectionsPricingModelBase } from "./ComponentSectionsPricingModel.base"

/* The TypeScript type of an instance of ComponentSectionsPricingModel */
export interface ComponentSectionsPricingModelType extends Instance<typeof ComponentSectionsPricingModel.Type> {}

/* A graphql query fragment builders for ComponentSectionsPricingModel */
export { selectFromComponentSectionsPricing, componentSectionsPricingModelPrimitives, ComponentSectionsPricingModelSelector } from "./ComponentSectionsPricingModel.base"

/**
 * ComponentSectionsPricingModel
 */
export const ComponentSectionsPricingModel = ComponentSectionsPricingModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
