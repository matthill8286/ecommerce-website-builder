import { Instance } from "mobx-state-tree"
import { CategoryEntityModelBase } from "./CategoryEntityModel.base"

/* The TypeScript type of an instance of CategoryEntityModel */
export interface CategoryEntityModelType extends Instance<typeof CategoryEntityModel.Type> {}

/* A graphql query fragment builders for CategoryEntityModel */
export { selectFromCategoryEntity, categoryEntityModelPrimitives, CategoryEntityModelSelector } from "./CategoryEntityModel.base"

/**
 * CategoryEntityModel
 */
export const CategoryEntityModel = CategoryEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
