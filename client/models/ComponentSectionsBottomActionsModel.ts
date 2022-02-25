import { Instance } from "mobx-state-tree"
import { ComponentSectionsBottomActionsModelBase } from "./ComponentSectionsBottomActionsModel.base"

/* The TypeScript type of an instance of ComponentSectionsBottomActionsModel */
export interface ComponentSectionsBottomActionsModelType extends Instance<typeof ComponentSectionsBottomActionsModel.Type> {}

/* A graphql query fragment builders for ComponentSectionsBottomActionsModel */
export { selectFromComponentSectionsBottomActions, componentSectionsBottomActionsModelPrimitives, ComponentSectionsBottomActionsModelSelector } from "./ComponentSectionsBottomActionsModel.base"

/**
 * ComponentSectionsBottomActionsModel
 */
export const ComponentSectionsBottomActionsModel = ComponentSectionsBottomActionsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
