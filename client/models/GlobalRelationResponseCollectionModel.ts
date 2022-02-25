import { Instance } from "mobx-state-tree"
import { GlobalRelationResponseCollectionModelBase } from "./GlobalRelationResponseCollectionModel.base"

/* The TypeScript type of an instance of GlobalRelationResponseCollectionModel */
export interface GlobalRelationResponseCollectionModelType extends Instance<typeof GlobalRelationResponseCollectionModel.Type> {}

/* A graphql query fragment builders for GlobalRelationResponseCollectionModel */
export { selectFromGlobalRelationResponseCollection, globalRelationResponseCollectionModelPrimitives, GlobalRelationResponseCollectionModelSelector } from "./GlobalRelationResponseCollectionModel.base"

/**
 * GlobalRelationResponseCollectionModel
 */
export const GlobalRelationResponseCollectionModel = GlobalRelationResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
