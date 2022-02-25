import { Instance } from "mobx-state-tree"
import { CollectionEntityResponseModelBase } from "./CollectionEntityResponseModel.base"

/* The TypeScript type of an instance of CollectionEntityResponseModel */
export interface CollectionEntityResponseModelType extends Instance<typeof CollectionEntityResponseModel.Type> {}

/* A graphql query fragment builders for CollectionEntityResponseModel */
export { selectFromCollectionEntityResponse, collectionEntityResponseModelPrimitives, CollectionEntityResponseModelSelector } from "./CollectionEntityResponseModel.base"

/**
 * CollectionEntityResponseModel
 */
export const CollectionEntityResponseModel = CollectionEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
