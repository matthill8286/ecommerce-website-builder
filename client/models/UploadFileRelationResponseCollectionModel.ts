import { Instance } from "mobx-state-tree"
import { UploadFileRelationResponseCollectionModelBase } from "./UploadFileRelationResponseCollectionModel.base"

/* The TypeScript type of an instance of UploadFileRelationResponseCollectionModel */
export interface UploadFileRelationResponseCollectionModelType extends Instance<typeof UploadFileRelationResponseCollectionModel.Type> {}

/* A graphql query fragment builders for UploadFileRelationResponseCollectionModel */
export { selectFromUploadFileRelationResponseCollection, uploadFileRelationResponseCollectionModelPrimitives, UploadFileRelationResponseCollectionModelSelector } from "./UploadFileRelationResponseCollectionModel.base"

/**
 * UploadFileRelationResponseCollectionModel
 */
export const UploadFileRelationResponseCollectionModel = UploadFileRelationResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
