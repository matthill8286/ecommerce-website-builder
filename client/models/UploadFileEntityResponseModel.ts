import { Instance } from "mobx-state-tree"
import { UploadFileEntityResponseModelBase } from "./UploadFileEntityResponseModel.base"

/* The TypeScript type of an instance of UploadFileEntityResponseModel */
export interface UploadFileEntityResponseModelType extends Instance<typeof UploadFileEntityResponseModel.Type> {}

/* A graphql query fragment builders for UploadFileEntityResponseModel */
export { selectFromUploadFileEntityResponse, uploadFileEntityResponseModelPrimitives, UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"

/**
 * UploadFileEntityResponseModel
 */
export const UploadFileEntityResponseModel = UploadFileEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
