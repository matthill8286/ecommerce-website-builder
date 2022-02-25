import { Instance } from "mobx-state-tree"
import { GlobalEntityResponseModelBase } from "./GlobalEntityResponseModel.base"

/* The TypeScript type of an instance of GlobalEntityResponseModel */
export interface GlobalEntityResponseModelType extends Instance<typeof GlobalEntityResponseModel.Type> {}

/* A graphql query fragment builders for GlobalEntityResponseModel */
export { selectFromGlobalEntityResponse, globalEntityResponseModelPrimitives, GlobalEntityResponseModelSelector } from "./GlobalEntityResponseModel.base"

/**
 * GlobalEntityResponseModel
 */
export const GlobalEntityResponseModel = GlobalEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
