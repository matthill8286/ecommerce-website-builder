import { Instance } from "mobx-state-tree"
import { LeadFormSubmissionModelBase } from "./LeadFormSubmissionModel.base"

/* The TypeScript type of an instance of LeadFormSubmissionModel */
export interface LeadFormSubmissionModelType extends Instance<typeof LeadFormSubmissionModel.Type> {}

/* A graphql query fragment builders for LeadFormSubmissionModel */
export { selectFromLeadFormSubmission, leadFormSubmissionModelPrimitives, LeadFormSubmissionModelSelector } from "./LeadFormSubmissionModel.base"

/**
 * LeadFormSubmissionModel
 */
export const LeadFormSubmissionModel = LeadFormSubmissionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
