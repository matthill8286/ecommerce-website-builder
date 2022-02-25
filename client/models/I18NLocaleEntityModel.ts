import { Instance } from "mobx-state-tree"
import { I18NLocaleEntityModelBase } from "./I18NLocaleEntityModel.base"

/* The TypeScript type of an instance of I18NLocaleEntityModel */
export interface I18NLocaleEntityModelType extends Instance<typeof I18NLocaleEntityModel.Type> {}

/* A graphql query fragment builders for I18NLocaleEntityModel */
export { selectFromI18NLocaleEntity, i18NLocaleEntityModelPrimitives, I18NLocaleEntityModelSelector } from "./I18NLocaleEntityModel.base"

/**
 * I18NLocaleEntityModel
 */
export const I18NLocaleEntityModel = I18NLocaleEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
