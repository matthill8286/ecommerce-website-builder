import { Instance } from "mobx-state-tree"
import { UsersPermissionsUserModelBase } from "./UsersPermissionsUserModel.base"

/* The TypeScript type of an instance of UsersPermissionsUserModel */
export interface UsersPermissionsUserModelType extends Instance<typeof UsersPermissionsUserModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsUserModel */
export { selectFromUsersPermissionsUser, usersPermissionsUserModelPrimitives, UsersPermissionsUserModelSelector } from "./UsersPermissionsUserModel.base"

/**
 * UsersPermissionsUserModel
 */
export const UsersPermissionsUserModel = UsersPermissionsUserModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
