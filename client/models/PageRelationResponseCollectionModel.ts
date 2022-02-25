import { Instance } from "mobx-state-tree"
import { PageRelationResponseCollectionModelBase } from "./PageRelationResponseCollectionModel.base"

/* The TypeScript type of an instance of PageRelationResponseCollectionModel */
export interface PageRelationResponseCollectionModelType extends Instance<typeof PageRelationResponseCollectionModel.Type> {}

/* A graphql query fragment builders for PageRelationResponseCollectionModel */
export { selectFromPageRelationResponseCollection, pageRelationResponseCollectionModelPrimitives, PageRelationResponseCollectionModelSelector } from "./PageRelationResponseCollectionModel.base"

/**
 * PageRelationResponseCollectionModel
 */
export const PageRelationResponseCollectionModel = PageRelationResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
