import { Instance } from "mobx-state-tree"
import { ComponentSharedMetaSocialModelBase } from "./ComponentSharedMetaSocialModel.base"

/* The TypeScript type of an instance of ComponentSharedMetaSocialModel */
export interface ComponentSharedMetaSocialModelType extends Instance<typeof ComponentSharedMetaSocialModel.Type> {}

/* A graphql query fragment builders for ComponentSharedMetaSocialModel */
export { selectFromComponentSharedMetaSocial, componentSharedMetaSocialModelPrimitives, ComponentSharedMetaSocialModelSelector } from "./ComponentSharedMetaSocialModel.base"

/**
 * ComponentSharedMetaSocialModel
 */
export const ComponentSharedMetaSocialModel = ComponentSharedMetaSocialModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
