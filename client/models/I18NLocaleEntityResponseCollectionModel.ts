import { Instance } from "mobx-state-tree"
import { I18NLocaleEntityResponseCollectionModelBase } from "./I18NLocaleEntityResponseCollectionModel.base"

/* The TypeScript type of an instance of I18NLocaleEntityResponseCollectionModel */
export interface I18NLocaleEntityResponseCollectionModelType extends Instance<typeof I18NLocaleEntityResponseCollectionModel.Type> {}

/* A graphql query fragment builders for I18NLocaleEntityResponseCollectionModel */
export { selectFromI18NLocaleEntityResponseCollection, i18NLocaleEntityResponseCollectionModelPrimitives, I18NLocaleEntityResponseCollectionModelSelector } from "./I18NLocaleEntityResponseCollectionModel.base"

/**
 * I18NLocaleEntityResponseCollectionModel
 */
export const I18NLocaleEntityResponseCollectionModel = I18NLocaleEntityResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
