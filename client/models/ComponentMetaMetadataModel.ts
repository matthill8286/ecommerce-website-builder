import { Instance } from "mobx-state-tree"
import { ComponentMetaMetadataModelBase } from "./ComponentMetaMetadataModel.base"

/* The TypeScript type of an instance of ComponentMetaMetadataModel */
export interface ComponentMetaMetadataModelType extends Instance<typeof ComponentMetaMetadataModel.Type> {}

/* A graphql query fragment builders for ComponentMetaMetadataModel */
export { selectFromComponentMetaMetadata, componentMetaMetadataModelPrimitives, ComponentMetaMetadataModelSelector } from "./ComponentMetaMetadataModel.base"

/**
 * ComponentMetaMetadataModel
 */
export const ComponentMetaMetadataModel = ComponentMetaMetadataModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
