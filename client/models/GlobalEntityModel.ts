import { Instance } from "mobx-state-tree"
import { GlobalEntityModelBase } from "./GlobalEntityModel.base"

/* The TypeScript type of an instance of GlobalEntityModel */
export interface GlobalEntityModelType extends Instance<typeof GlobalEntityModel.Type> {}

/* A graphql query fragment builders for GlobalEntityModel */
export { selectFromGlobalEntity, globalEntityModelPrimitives, GlobalEntityModelSelector } from "./GlobalEntityModel.base"

/**
 * GlobalEntityModel
 */
export const GlobalEntityModel = GlobalEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
