import { Instance } from "mobx-state-tree"
import { PageEntityModelBase } from "./PageEntityModel.base"

/* The TypeScript type of an instance of PageEntityModel */
export interface PageEntityModelType extends Instance<typeof PageEntityModel.Type> {}

/* A graphql query fragment builders for PageEntityModel */
export { selectFromPageEntity, pageEntityModelPrimitives, PageEntityModelSelector } from "./PageEntityModel.base"

/**
 * PageEntityModel
 */
export const PageEntityModel = PageEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
