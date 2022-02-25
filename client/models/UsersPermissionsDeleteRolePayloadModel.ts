import { Instance } from "mobx-state-tree"
import { UsersPermissionsDeleteRolePayloadModelBase } from "./UsersPermissionsDeleteRolePayloadModel.base"

/* The TypeScript type of an instance of UsersPermissionsDeleteRolePayloadModel */
export interface UsersPermissionsDeleteRolePayloadModelType extends Instance<typeof UsersPermissionsDeleteRolePayloadModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsDeleteRolePayloadModel */
export { selectFromUsersPermissionsDeleteRolePayload, usersPermissionsDeleteRolePayloadModelPrimitives, UsersPermissionsDeleteRolePayloadModelSelector } from "./UsersPermissionsDeleteRolePayloadModel.base"

/**
 * UsersPermissionsDeleteRolePayloadModel
 */
export const UsersPermissionsDeleteRolePayloadModel = UsersPermissionsDeleteRolePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
