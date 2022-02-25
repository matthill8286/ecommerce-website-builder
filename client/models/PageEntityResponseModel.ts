import { Instance } from "mobx-state-tree"
import { PageEntityResponseModelBase } from "./PageEntityResponseModel.base"

/* The TypeScript type of an instance of PageEntityResponseModel */
export interface PageEntityResponseModelType extends Instance<typeof PageEntityResponseModel.Type> {}

/* A graphql query fragment builders for PageEntityResponseModel */
export { selectFromPageEntityResponse, pageEntityResponseModelPrimitives, PageEntityResponseModelSelector } from "./PageEntityResponseModel.base"

/**
 * PageEntityResponseModel
 */
export const PageEntityResponseModel = PageEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
