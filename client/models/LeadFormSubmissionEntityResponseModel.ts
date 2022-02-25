import { Instance } from "mobx-state-tree"
import { LeadFormSubmissionEntityResponseModelBase } from "./LeadFormSubmissionEntityResponseModel.base"

/* The TypeScript type of an instance of LeadFormSubmissionEntityResponseModel */
export interface LeadFormSubmissionEntityResponseModelType extends Instance<typeof LeadFormSubmissionEntityResponseModel.Type> {}

/* A graphql query fragment builders for LeadFormSubmissionEntityResponseModel */
export { selectFromLeadFormSubmissionEntityResponse, leadFormSubmissionEntityResponseModelPrimitives, LeadFormSubmissionEntityResponseModelSelector } from "./LeadFormSubmissionEntityResponseModel.base"

/**
 * LeadFormSubmissionEntityResponseModel
 */
export const LeadFormSubmissionEntityResponseModel = LeadFormSubmissionEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
