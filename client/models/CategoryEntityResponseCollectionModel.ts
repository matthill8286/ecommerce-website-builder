import { Instance } from "mobx-state-tree"
import { CategoryEntityResponseCollectionModelBase } from "./CategoryEntityResponseCollectionModel.base"

/* The TypeScript type of an instance of CategoryEntityResponseCollectionModel */
export interface CategoryEntityResponseCollectionModelType extends Instance<typeof CategoryEntityResponseCollectionModel.Type> {}

/* A graphql query fragment builders for CategoryEntityResponseCollectionModel */
export { selectFromCategoryEntityResponseCollection, categoryEntityResponseCollectionModelPrimitives, CategoryEntityResponseCollectionModelSelector } from "./CategoryEntityResponseCollectionModel.base"

/**
 * CategoryEntityResponseCollectionModel
 */
export const CategoryEntityResponseCollectionModel = CategoryEntityResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
