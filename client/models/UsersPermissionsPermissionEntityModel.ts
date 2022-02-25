import { Instance } from "mobx-state-tree"
import { UsersPermissionsPermissionEntityModelBase } from "./UsersPermissionsPermissionEntityModel.base"

/* The TypeScript type of an instance of UsersPermissionsPermissionEntityModel */
export interface UsersPermissionsPermissionEntityModelType extends Instance<typeof UsersPermissionsPermissionEntityModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsPermissionEntityModel */
export { selectFromUsersPermissionsPermissionEntity, usersPermissionsPermissionEntityModelPrimitives, UsersPermissionsPermissionEntityModelSelector } from "./UsersPermissionsPermissionEntityModel.base"

/**
 * UsersPermissionsPermissionEntityModel
 */
export const UsersPermissionsPermissionEntityModel = UsersPermissionsPermissionEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
