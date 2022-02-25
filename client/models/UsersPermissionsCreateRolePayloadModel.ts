import { Instance } from "mobx-state-tree"
import { UsersPermissionsCreateRolePayloadModelBase } from "./UsersPermissionsCreateRolePayloadModel.base"

/* The TypeScript type of an instance of UsersPermissionsCreateRolePayloadModel */
export interface UsersPermissionsCreateRolePayloadModelType extends Instance<typeof UsersPermissionsCreateRolePayloadModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsCreateRolePayloadModel */
export { selectFromUsersPermissionsCreateRolePayload, usersPermissionsCreateRolePayloadModelPrimitives, UsersPermissionsCreateRolePayloadModelSelector } from "./UsersPermissionsCreateRolePayloadModel.base"

/**
 * UsersPermissionsCreateRolePayloadModel
 */
export const UsersPermissionsCreateRolePayloadModel = UsersPermissionsCreateRolePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
