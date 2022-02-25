import { Instance } from "mobx-state-tree"
import { UploadFileModelBase } from "./UploadFileModel.base"

/* The TypeScript type of an instance of UploadFileModel */
export interface UploadFileModelType extends Instance<typeof UploadFileModel.Type> {}

/* A graphql query fragment builders for UploadFileModel */
export { selectFromUploadFile, uploadFileModelPrimitives, UploadFileModelSelector } from "./UploadFileModel.base"

/**
 * UploadFileModel
 */
export const UploadFileModel = UploadFileModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
