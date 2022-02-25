import { Instance } from "mobx-state-tree"
import { LeadFormSubmissionEntityResponseCollectionModelBase } from "./LeadFormSubmissionEntityResponseCollectionModel.base"

/* The TypeScript type of an instance of LeadFormSubmissionEntityResponseCollectionModel */
export interface LeadFormSubmissionEntityResponseCollectionModelType extends Instance<typeof LeadFormSubmissionEntityResponseCollectionModel.Type> {}

/* A graphql query fragment builders for LeadFormSubmissionEntityResponseCollectionModel */
export { selectFromLeadFormSubmissionEntityResponseCollection, leadFormSubmissionEntityResponseCollectionModelPrimitives, LeadFormSubmissionEntityResponseCollectionModelSelector } from "./LeadFormSubmissionEntityResponseCollectionModel.base"

/**
 * LeadFormSubmissionEntityResponseCollectionModel
 */
export const LeadFormSubmissionEntityResponseCollectionModel = LeadFormSubmissionEntityResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
