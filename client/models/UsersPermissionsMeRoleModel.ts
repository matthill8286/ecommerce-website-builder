import { Instance } from "mobx-state-tree"
import { UsersPermissionsMeRoleModelBase } from "./UsersPermissionsMeRoleModel.base"

/* The TypeScript type of an instance of UsersPermissionsMeRoleModel */
export interface UsersPermissionsMeRoleModelType extends Instance<typeof UsersPermissionsMeRoleModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsMeRoleModel */
export { selectFromUsersPermissionsMeRole, usersPermissionsMeRoleModelPrimitives, UsersPermissionsMeRoleModelSelector } from "./UsersPermissionsMeRoleModel.base"

/**
 * UsersPermissionsMeRoleModel
 */
export const UsersPermissionsMeRoleModel = UsersPermissionsMeRoleModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
