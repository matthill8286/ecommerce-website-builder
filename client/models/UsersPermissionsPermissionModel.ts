import { Instance } from "mobx-state-tree"
import { UsersPermissionsPermissionModelBase } from "./UsersPermissionsPermissionModel.base"

/* The TypeScript type of an instance of UsersPermissionsPermissionModel */
export interface UsersPermissionsPermissionModelType extends Instance<typeof UsersPermissionsPermissionModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsPermissionModel */
export { selectFromUsersPermissionsPermission, usersPermissionsPermissionModelPrimitives, UsersPermissionsPermissionModelSelector } from "./UsersPermissionsPermissionModel.base"

/**
 * UsersPermissionsPermissionModel
 */
export const UsersPermissionsPermissionModel = UsersPermissionsPermissionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
