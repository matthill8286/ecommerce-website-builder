import { Instance } from "mobx-state-tree"
import { UsersPermissionsRoleEntityModelBase } from "./UsersPermissionsRoleEntityModel.base"

/* The TypeScript type of an instance of UsersPermissionsRoleEntityModel */
export interface UsersPermissionsRoleEntityModelType extends Instance<typeof UsersPermissionsRoleEntityModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsRoleEntityModel */
export { selectFromUsersPermissionsRoleEntity, usersPermissionsRoleEntityModelPrimitives, UsersPermissionsRoleEntityModelSelector } from "./UsersPermissionsRoleEntityModel.base"

/**
 * UsersPermissionsRoleEntityModel
 */
export const UsersPermissionsRoleEntityModel = UsersPermissionsRoleEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
