import { Instance } from "mobx-state-tree"
import { ComponentSectionsTestimonialsGroupModelBase } from "./ComponentSectionsTestimonialsGroupModel.base"

/* The TypeScript type of an instance of ComponentSectionsTestimonialsGroupModel */
export interface ComponentSectionsTestimonialsGroupModelType extends Instance<typeof ComponentSectionsTestimonialsGroupModel.Type> {}

/* A graphql query fragment builders for ComponentSectionsTestimonialsGroupModel */
export { selectFromComponentSectionsTestimonialsGroup, componentSectionsTestimonialsGroupModelPrimitives, ComponentSectionsTestimonialsGroupModelSelector } from "./ComponentSectionsTestimonialsGroupModel.base"

/**
 * ComponentSectionsTestimonialsGroupModel
 */
export const ComponentSectionsTestimonialsGroupModel = ComponentSectionsTestimonialsGroupModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
