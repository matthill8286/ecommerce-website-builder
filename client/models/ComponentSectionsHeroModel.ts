import { Instance } from "mobx-state-tree"
import { ComponentSectionsHeroModelBase } from "./ComponentSectionsHeroModel.base"

/* The TypeScript type of an instance of ComponentSectionsHeroModel */
export interface ComponentSectionsHeroModelType extends Instance<typeof ComponentSectionsHeroModel.Type> {}

/* A graphql query fragment builders for ComponentSectionsHeroModel */
export { selectFromComponentSectionsHero, componentSectionsHeroModelPrimitives, ComponentSectionsHeroModelSelector } from "./ComponentSectionsHeroModel.base"

/**
 * ComponentSectionsHeroModel
 */
export const ComponentSectionsHeroModel = ComponentSectionsHeroModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
