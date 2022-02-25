import { Instance } from "mobx-state-tree"
import { ProductEntityResponseModelBase } from "./ProductEntityResponseModel.base"

/* The TypeScript type of an instance of ProductEntityResponseModel */
export interface ProductEntityResponseModelType extends Instance<typeof ProductEntityResponseModel.Type> {}

/* A graphql query fragment builders for ProductEntityResponseModel */
export { selectFromProductEntityResponse, productEntityResponseModelPrimitives, ProductEntityResponseModelSelector } from "./ProductEntityResponseModel.base"

/**
 * ProductEntityResponseModel
 */
export const ProductEntityResponseModel = ProductEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
