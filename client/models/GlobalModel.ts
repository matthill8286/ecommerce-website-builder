import { Instance } from "mobx-state-tree"
import { GlobalModelBase } from "./GlobalModel.base"

/* The TypeScript type of an instance of GlobalModel */
export interface GlobalModelType extends Instance<typeof GlobalModel.Type> {}

/* A graphql query fragment builders for GlobalModel */
export { selectFromGlobal, globalModelPrimitives, GlobalModelSelector } from "./GlobalModel.base"

/**
 * GlobalModel
 */
export const GlobalModel = GlobalModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
