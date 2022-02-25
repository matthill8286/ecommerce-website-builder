import { Instance } from "mobx-state-tree"
import { I18NLocaleEntityResponseModelBase } from "./I18NLocaleEntityResponseModel.base"

/* The TypeScript type of an instance of I18NLocaleEntityResponseModel */
export interface I18NLocaleEntityResponseModelType extends Instance<typeof I18NLocaleEntityResponseModel.Type> {}

/* A graphql query fragment builders for I18NLocaleEntityResponseModel */
export { selectFromI18NLocaleEntityResponse, i18NLocaleEntityResponseModelPrimitives, I18NLocaleEntityResponseModelSelector } from "./I18NLocaleEntityResponseModel.base"

/**
 * I18NLocaleEntityResponseModel
 */
export const I18NLocaleEntityResponseModel = I18NLocaleEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
