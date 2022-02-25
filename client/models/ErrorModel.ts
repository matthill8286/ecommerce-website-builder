import { Instance } from "mobx-state-tree"
import { ErrorModelBase } from "./ErrorModel.base"

/* The TypeScript type of an instance of ErrorModel */
export interface ErrorModelType extends Instance<typeof ErrorModel.Type> {}

/* A graphql query fragment builders for ErrorModel */
export { selectFromError, errorModelPrimitives, ErrorModelSelector } from "./ErrorModel.base"

/**
 * ErrorModel
 */
export const ErrorModel = ErrorModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
