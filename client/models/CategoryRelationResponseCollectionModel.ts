import { Instance } from "mobx-state-tree"
import { CategoryRelationResponseCollectionModelBase } from "./CategoryRelationResponseCollectionModel.base"

/* The TypeScript type of an instance of CategoryRelationResponseCollectionModel */
export interface CategoryRelationResponseCollectionModelType extends Instance<typeof CategoryRelationResponseCollectionModel.Type> {}

/* A graphql query fragment builders for CategoryRelationResponseCollectionModel */
export { selectFromCategoryRelationResponseCollection, categoryRelationResponseCollectionModelPrimitives, CategoryRelationResponseCollectionModelSelector } from "./CategoryRelationResponseCollectionModel.base"

/**
 * CategoryRelationResponseCollectionModel
 */
export const CategoryRelationResponseCollectionModel = CategoryRelationResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
