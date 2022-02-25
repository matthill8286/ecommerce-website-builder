import { Instance } from "mobx-state-tree"
import { UsersPermissionsRoleModelBase } from "./UsersPermissionsRoleModel.base"

/* The TypeScript type of an instance of UsersPermissionsRoleModel */
export interface UsersPermissionsRoleModelType extends Instance<typeof UsersPermissionsRoleModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsRoleModel */
export { selectFromUsersPermissionsRole, usersPermissionsRoleModelPrimitives, UsersPermissionsRoleModelSelector } from "./UsersPermissionsRoleModel.base"

/**
 * UsersPermissionsRoleModel
 */
export const UsersPermissionsRoleModel = UsersPermissionsRoleModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
