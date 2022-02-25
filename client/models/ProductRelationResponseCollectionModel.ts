import { Instance } from "mobx-state-tree"
import { ProductRelationResponseCollectionModelBase } from "./ProductRelationResponseCollectionModel.base"

/* The TypeScript type of an instance of ProductRelationResponseCollectionModel */
export interface ProductRelationResponseCollectionModelType extends Instance<typeof ProductRelationResponseCollectionModel.Type> {}

/* A graphql query fragment builders for ProductRelationResponseCollectionModel */
export { selectFromProductRelationResponseCollection, productRelationResponseCollectionModelPrimitives, ProductRelationResponseCollectionModelSelector } from "./ProductRelationResponseCollectionModel.base"

/**
 * ProductRelationResponseCollectionModel
 */
export const ProductRelationResponseCollectionModel = ProductRelationResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
