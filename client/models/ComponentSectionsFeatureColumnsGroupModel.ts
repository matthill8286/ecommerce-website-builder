import { Instance } from "mobx-state-tree"
import { ComponentSectionsFeatureColumnsGroupModelBase } from "./ComponentSectionsFeatureColumnsGroupModel.base"

/* The TypeScript type of an instance of ComponentSectionsFeatureColumnsGroupModel */
export interface ComponentSectionsFeatureColumnsGroupModelType extends Instance<typeof ComponentSectionsFeatureColumnsGroupModel.Type> {}

/* A graphql query fragment builders for ComponentSectionsFeatureColumnsGroupModel */
export { selectFromComponentSectionsFeatureColumnsGroup, componentSectionsFeatureColumnsGroupModelPrimitives, ComponentSectionsFeatureColumnsGroupModelSelector } from "./ComponentSectionsFeatureColumnsGroupModel.base"

/**
 * ComponentSectionsFeatureColumnsGroupModel
 */
export const ComponentSectionsFeatureColumnsGroupModel = ComponentSectionsFeatureColumnsGroupModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
