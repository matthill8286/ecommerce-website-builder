import { Instance } from "mobx-state-tree"
import { UploadFileEntityResponseCollectionModelBase } from "./UploadFileEntityResponseCollectionModel.base"

/* The TypeScript type of an instance of UploadFileEntityResponseCollectionModel */
export interface UploadFileEntityResponseCollectionModelType extends Instance<typeof UploadFileEntityResponseCollectionModel.Type> {}

/* A graphql query fragment builders for UploadFileEntityResponseCollectionModel */
export { selectFromUploadFileEntityResponseCollection, uploadFileEntityResponseCollectionModelPrimitives, UploadFileEntityResponseCollectionModelSelector } from "./UploadFileEntityResponseCollectionModel.base"

/**
 * UploadFileEntityResponseCollectionModel
 */
export const UploadFileEntityResponseCollectionModel = UploadFileEntityResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
