import { Instance } from "mobx-state-tree"
import { UsersPermissionsLoginPayloadModelBase } from "./UsersPermissionsLoginPayloadModel.base"

/* The TypeScript type of an instance of UsersPermissionsLoginPayloadModel */
export interface UsersPermissionsLoginPayloadModelType extends Instance<typeof UsersPermissionsLoginPayloadModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsLoginPayloadModel */
export { selectFromUsersPermissionsLoginPayload, usersPermissionsLoginPayloadModelPrimitives, UsersPermissionsLoginPayloadModelSelector } from "./UsersPermissionsLoginPayloadModel.base"

/**
 * UsersPermissionsLoginPayloadModel
 */
export const UsersPermissionsLoginPayloadModel = UsersPermissionsLoginPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
