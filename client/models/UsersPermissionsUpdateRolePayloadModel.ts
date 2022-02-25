import { Instance } from "mobx-state-tree"
import { UsersPermissionsUpdateRolePayloadModelBase } from "./UsersPermissionsUpdateRolePayloadModel.base"

/* The TypeScript type of an instance of UsersPermissionsUpdateRolePayloadModel */
export interface UsersPermissionsUpdateRolePayloadModelType extends Instance<typeof UsersPermissionsUpdateRolePayloadModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsUpdateRolePayloadModel */
export { selectFromUsersPermissionsUpdateRolePayload, usersPermissionsUpdateRolePayloadModelPrimitives, UsersPermissionsUpdateRolePayloadModelSelector } from "./UsersPermissionsUpdateRolePayloadModel.base"

/**
 * UsersPermissionsUpdateRolePayloadModel
 */
export const UsersPermissionsUpdateRolePayloadModel = UsersPermissionsUpdateRolePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
