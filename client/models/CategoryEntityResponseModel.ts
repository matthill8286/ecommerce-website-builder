import { Instance } from "mobx-state-tree"
import { CategoryEntityResponseModelBase } from "./CategoryEntityResponseModel.base"

/* The TypeScript type of an instance of CategoryEntityResponseModel */
export interface CategoryEntityResponseModelType extends Instance<typeof CategoryEntityResponseModel.Type> {}

/* A graphql query fragment builders for CategoryEntityResponseModel */
export { selectFromCategoryEntityResponse, categoryEntityResponseModelPrimitives, CategoryEntityResponseModelSelector } from "./CategoryEntityResponseModel.base"

/**
 * CategoryEntityResponseModel
 */
export const CategoryEntityResponseModel = CategoryEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
