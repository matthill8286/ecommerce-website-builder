import { Instance } from "mobx-state-tree"
import { PaginationModelBase } from "./PaginationModel.base"

/* The TypeScript type of an instance of PaginationModel */
export interface PaginationModelType extends Instance<typeof PaginationModel.Type> {}

/* A graphql query fragment builders for PaginationModel */
export { selectFromPagination, paginationModelPrimitives, PaginationModelSelector } from "./PaginationModel.base"

/**
 * PaginationModel
 */
export const PaginationModel = PaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
