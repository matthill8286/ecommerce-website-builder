import { Instance } from "mobx-state-tree"
import { PageModelBase } from "./PageModel.base"

/* The TypeScript type of an instance of PageModel */
export interface PageModelType extends Instance<typeof PageModel.Type> {}

/* A graphql query fragment builders for PageModel */
export { selectFromPage, pageModelPrimitives, PageModelSelector } from "./PageModel.base"

/**
 * PageModel
 */
export const PageModel = PageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
