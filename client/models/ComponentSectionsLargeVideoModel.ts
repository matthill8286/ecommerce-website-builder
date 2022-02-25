import { Instance } from "mobx-state-tree"
import { ComponentSectionsLargeVideoModelBase } from "./ComponentSectionsLargeVideoModel.base"

/* The TypeScript type of an instance of ComponentSectionsLargeVideoModel */
export interface ComponentSectionsLargeVideoModelType extends Instance<typeof ComponentSectionsLargeVideoModel.Type> {}

/* A graphql query fragment builders for ComponentSectionsLargeVideoModel */
export { selectFromComponentSectionsLargeVideo, componentSectionsLargeVideoModelPrimitives, ComponentSectionsLargeVideoModelSelector } from "./ComponentSectionsLargeVideoModel.base"

/**
 * ComponentSectionsLargeVideoModel
 */
export const ComponentSectionsLargeVideoModel = ComponentSectionsLargeVideoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
