import { Instance } from "mobx-state-tree"
import { ComponentElementsProductTileModelBase } from "./ComponentElementsProductTileModel.base"

/* The TypeScript type of an instance of ComponentElementsProductTileModel */
export interface ComponentElementsProductTileModelType extends Instance<typeof ComponentElementsProductTileModel.Type> {}

/* A graphql query fragment builders for ComponentElementsProductTileModel */
export { selectFromComponentElementsProductTile, componentElementsProductTileModelPrimitives, ComponentElementsProductTileModelSelector } from "./ComponentElementsProductTileModel.base"

/**
 * ComponentElementsProductTileModel
 */
export const ComponentElementsProductTileModel = ComponentElementsProductTileModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
