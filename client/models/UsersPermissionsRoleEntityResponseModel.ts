import { Instance } from "mobx-state-tree"
import { UsersPermissionsRoleEntityResponseModelBase } from "./UsersPermissionsRoleEntityResponseModel.base"

/* The TypeScript type of an instance of UsersPermissionsRoleEntityResponseModel */
export interface UsersPermissionsRoleEntityResponseModelType extends Instance<typeof UsersPermissionsRoleEntityResponseModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsRoleEntityResponseModel */
export { selectFromUsersPermissionsRoleEntityResponse, usersPermissionsRoleEntityResponseModelPrimitives, UsersPermissionsRoleEntityResponseModelSelector } from "./UsersPermissionsRoleEntityResponseModel.base"

/**
 * UsersPermissionsRoleEntityResponseModel
 */
export const UsersPermissionsRoleEntityResponseModel = UsersPermissionsRoleEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
