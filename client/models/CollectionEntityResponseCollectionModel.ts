import { Instance } from "mobx-state-tree"
import { CollectionEntityResponseCollectionModelBase } from "./CollectionEntityResponseCollectionModel.base"

/* The TypeScript type of an instance of CollectionEntityResponseCollectionModel */
export interface CollectionEntityResponseCollectionModelType extends Instance<typeof CollectionEntityResponseCollectionModel.Type> {}

/* A graphql query fragment builders for CollectionEntityResponseCollectionModel */
export { selectFromCollectionEntityResponseCollection, collectionEntityResponseCollectionModelPrimitives, CollectionEntityResponseCollectionModelSelector } from "./CollectionEntityResponseCollectionModel.base"

/**
 * CollectionEntityResponseCollectionModel
 */
export const CollectionEntityResponseCollectionModel = CollectionEntityResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
