import { Instance } from "mobx-state-tree"
import { UsersPermissionsRoleEntityResponseCollectionModelBase } from "./UsersPermissionsRoleEntityResponseCollectionModel.base"

/* The TypeScript type of an instance of UsersPermissionsRoleEntityResponseCollectionModel */
export interface UsersPermissionsRoleEntityResponseCollectionModelType extends Instance<typeof UsersPermissionsRoleEntityResponseCollectionModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsRoleEntityResponseCollectionModel */
export { selectFromUsersPermissionsRoleEntityResponseCollection, usersPermissionsRoleEntityResponseCollectionModelPrimitives, UsersPermissionsRoleEntityResponseCollectionModelSelector } from "./UsersPermissionsRoleEntityResponseCollectionModel.base"

/**
 * UsersPermissionsRoleEntityResponseCollectionModel
 */
export const UsersPermissionsRoleEntityResponseCollectionModel = UsersPermissionsRoleEntityResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
