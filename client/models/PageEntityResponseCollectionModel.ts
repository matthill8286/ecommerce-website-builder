import { Instance } from "mobx-state-tree"
import { PageEntityResponseCollectionModelBase } from "./PageEntityResponseCollectionModel.base"

/* The TypeScript type of an instance of PageEntityResponseCollectionModel */
export interface PageEntityResponseCollectionModelType extends Instance<typeof PageEntityResponseCollectionModel.Type> {}

/* A graphql query fragment builders for PageEntityResponseCollectionModel */
export { selectFromPageEntityResponseCollection, pageEntityResponseCollectionModelPrimitives, PageEntityResponseCollectionModelSelector } from "./PageEntityResponseCollectionModel.base"

/**
 * PageEntityResponseCollectionModel
 */
export const PageEntityResponseCollectionModel = PageEntityResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
