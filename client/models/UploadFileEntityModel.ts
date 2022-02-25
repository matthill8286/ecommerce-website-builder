import { Instance } from "mobx-state-tree"
import { UploadFileEntityModelBase } from "./UploadFileEntityModel.base"

/* The TypeScript type of an instance of UploadFileEntityModel */
export interface UploadFileEntityModelType extends Instance<typeof UploadFileEntityModel.Type> {}

/* A graphql query fragment builders for UploadFileEntityModel */
export { selectFromUploadFileEntity, uploadFileEntityModelPrimitives, UploadFileEntityModelSelector } from "./UploadFileEntityModel.base"

/**
 * UploadFileEntityModel
 */
export const UploadFileEntityModel = UploadFileEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
