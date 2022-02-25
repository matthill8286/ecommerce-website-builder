import { Instance } from "mobx-state-tree"
import { ComponentSectionsFeatureRowsGroupModelBase } from "./ComponentSectionsFeatureRowsGroupModel.base"

/* The TypeScript type of an instance of ComponentSectionsFeatureRowsGroupModel */
export interface ComponentSectionsFeatureRowsGroupModelType extends Instance<typeof ComponentSectionsFeatureRowsGroupModel.Type> {}

/* A graphql query fragment builders for ComponentSectionsFeatureRowsGroupModel */
export { selectFromComponentSectionsFeatureRowsGroup, componentSectionsFeatureRowsGroupModelPrimitives, ComponentSectionsFeatureRowsGroupModelSelector } from "./ComponentSectionsFeatureRowsGroupModel.base"

/**
 * ComponentSectionsFeatureRowsGroupModel
 */
export const ComponentSectionsFeatureRowsGroupModel = ComponentSectionsFeatureRowsGroupModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
