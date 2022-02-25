import { Instance } from "mobx-state-tree"
import { I18NLocaleModelBase } from "./I18NLocaleModel.base"

/* The TypeScript type of an instance of I18NLocaleModel */
export interface I18NLocaleModelType extends Instance<typeof I18NLocaleModel.Type> {}

/* A graphql query fragment builders for I18NLocaleModel */
export { selectFromI18NLocale, i18NLocaleModelPrimitives, I18NLocaleModelSelector } from "./I18NLocaleModel.base"

/**
 * I18NLocaleModel
 */
export const I18NLocaleModel = I18NLocaleModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
