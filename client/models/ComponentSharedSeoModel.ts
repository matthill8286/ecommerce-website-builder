import { Instance } from "mobx-state-tree"
import { ComponentSharedSeoModelBase } from "./ComponentSharedSeoModel.base"

/* The TypeScript type of an instance of ComponentSharedSeoModel */
export interface ComponentSharedSeoModelType extends Instance<typeof ComponentSharedSeoModel.Type> {}

/* A graphql query fragment builders for ComponentSharedSeoModel */
export { selectFromComponentSharedSeo, componentSharedSeoModelPrimitives, ComponentSharedSeoModelSelector } from "./ComponentSharedSeoModel.base"

/**
 * ComponentSharedSeoModel
 */
export const ComponentSharedSeoModel = ComponentSharedSeoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
