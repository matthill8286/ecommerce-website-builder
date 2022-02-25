import { Instance } from "mobx-state-tree"
import { ProductEntityResponseCollectionModelBase } from "./ProductEntityResponseCollectionModel.base"

/* The TypeScript type of an instance of ProductEntityResponseCollectionModel */
export interface ProductEntityResponseCollectionModelType extends Instance<typeof ProductEntityResponseCollectionModel.Type> {}

/* A graphql query fragment builders for ProductEntityResponseCollectionModel */
export { selectFromProductEntityResponseCollection, productEntityResponseCollectionModelPrimitives, ProductEntityResponseCollectionModelSelector } from "./ProductEntityResponseCollectionModel.base"

/**
 * ProductEntityResponseCollectionModel
 */
export const ProductEntityResponseCollectionModel = ProductEntityResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
