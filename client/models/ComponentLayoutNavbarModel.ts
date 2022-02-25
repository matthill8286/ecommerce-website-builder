import { Instance } from "mobx-state-tree"
import { ComponentLayoutNavbarModelBase } from "./ComponentLayoutNavbarModel.base"

/* The TypeScript type of an instance of ComponentLayoutNavbarModel */
export interface ComponentLayoutNavbarModelType extends Instance<typeof ComponentLayoutNavbarModel.Type> {}

/* A graphql query fragment builders for ComponentLayoutNavbarModel */
export { selectFromComponentLayoutNavbar, componentLayoutNavbarModelPrimitives, ComponentLayoutNavbarModelSelector } from "./ComponentLayoutNavbarModel.base"

/**
 * ComponentLayoutNavbarModel
 */
export const ComponentLayoutNavbarModel = ComponentLayoutNavbarModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
