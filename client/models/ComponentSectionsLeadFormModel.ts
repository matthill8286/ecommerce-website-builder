import { Instance } from "mobx-state-tree"
import { ComponentSectionsLeadFormModelBase } from "./ComponentSectionsLeadFormModel.base"

/* The TypeScript type of an instance of ComponentSectionsLeadFormModel */
export interface ComponentSectionsLeadFormModelType extends Instance<typeof ComponentSectionsLeadFormModel.Type> {}

/* A graphql query fragment builders for ComponentSectionsLeadFormModel */
export { selectFromComponentSectionsLeadForm, componentSectionsLeadFormModelPrimitives, ComponentSectionsLeadFormModelSelector } from "./ComponentSectionsLeadFormModel.base"

/**
 * ComponentSectionsLeadFormModel
 */
export const ComponentSectionsLeadFormModel = ComponentSectionsLeadFormModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
