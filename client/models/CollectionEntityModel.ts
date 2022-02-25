import { Instance } from "mobx-state-tree"
import { CollectionEntityModelBase } from "./CollectionEntityModel.base"

/* The TypeScript type of an instance of CollectionEntityModel */
export interface CollectionEntityModelType extends Instance<typeof CollectionEntityModel.Type> {}

/* A graphql query fragment builders for CollectionEntityModel */
export { selectFromCollectionEntity, collectionEntityModelPrimitives, CollectionEntityModelSelector } from "./CollectionEntityModel.base"

/**
 * CollectionEntityModel
 */
export const CollectionEntityModel = CollectionEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
