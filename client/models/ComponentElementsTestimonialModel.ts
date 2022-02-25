import { Instance } from "mobx-state-tree"
import { ComponentElementsTestimonialModelBase } from "./ComponentElementsTestimonialModel.base"

/* The TypeScript type of an instance of ComponentElementsTestimonialModel */
export interface ComponentElementsTestimonialModelType extends Instance<typeof ComponentElementsTestimonialModel.Type> {}

/* A graphql query fragment builders for ComponentElementsTestimonialModel */
export { selectFromComponentElementsTestimonial, componentElementsTestimonialModelPrimitives, ComponentElementsTestimonialModelSelector } from "./ComponentElementsTestimonialModel.base"

/**
 * ComponentElementsTestimonialModel
 */
export const ComponentElementsTestimonialModel = ComponentElementsTestimonialModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
