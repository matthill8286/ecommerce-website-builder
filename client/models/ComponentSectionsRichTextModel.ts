import { Instance } from "mobx-state-tree"
import { ComponentSectionsRichTextModelBase } from "./ComponentSectionsRichTextModel.base"

/* The TypeScript type of an instance of ComponentSectionsRichTextModel */
export interface ComponentSectionsRichTextModelType extends Instance<typeof ComponentSectionsRichTextModel.Type> {}

/* A graphql query fragment builders for ComponentSectionsRichTextModel */
export { selectFromComponentSectionsRichText, componentSectionsRichTextModelPrimitives, ComponentSectionsRichTextModelSelector } from "./ComponentSectionsRichTextModel.base"

/**
 * ComponentSectionsRichTextModel
 */
export const ComponentSectionsRichTextModel = ComponentSectionsRichTextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
