import { Instance } from "mobx-state-tree"
import { ResponseCollectionMetaModelBase } from "./ResponseCollectionMetaModel.base"

/* The TypeScript type of an instance of ResponseCollectionMetaModel */
export interface ResponseCollectionMetaModelType extends Instance<typeof ResponseCollectionMetaModel.Type> {}

/* A graphql query fragment builders for ResponseCollectionMetaModel */
export { selectFromResponseCollectionMeta, responseCollectionMetaModelPrimitives, ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"

/**
 * ResponseCollectionMetaModel
 */
export const ResponseCollectionMetaModel = ResponseCollectionMetaModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
