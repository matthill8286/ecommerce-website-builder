import { Instance } from "mobx-state-tree"
import { ProductEntityModelBase } from "./ProductEntityModel.base"

/* The TypeScript type of an instance of ProductEntityModel */
export interface ProductEntityModelType extends Instance<typeof ProductEntityModel.Type> {}

/* A graphql query fragment builders for ProductEntityModel */
export { selectFromProductEntity, productEntityModelPrimitives, ProductEntityModelSelector } from "./ProductEntityModel.base"

/**
 * ProductEntityModel
 */
export const ProductEntityModel = ProductEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
