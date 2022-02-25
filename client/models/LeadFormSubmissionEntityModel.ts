import { Instance } from "mobx-state-tree"
import { LeadFormSubmissionEntityModelBase } from "./LeadFormSubmissionEntityModel.base"

/* The TypeScript type of an instance of LeadFormSubmissionEntityModel */
export interface LeadFormSubmissionEntityModelType extends Instance<typeof LeadFormSubmissionEntityModel.Type> {}

/* A graphql query fragment builders for LeadFormSubmissionEntityModel */
export { selectFromLeadFormSubmissionEntity, leadFormSubmissionEntityModelPrimitives, LeadFormSubmissionEntityModelSelector } from "./LeadFormSubmissionEntityModel.base"

/**
 * LeadFormSubmissionEntityModel
 */
export const LeadFormSubmissionEntityModel = LeadFormSubmissionEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
