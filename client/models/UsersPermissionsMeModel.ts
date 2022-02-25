import { Instance } from "mobx-state-tree"
import { UsersPermissionsMeModelBase } from "./UsersPermissionsMeModel.base"

/* The TypeScript type of an instance of UsersPermissionsMeModel */
export interface UsersPermissionsMeModelType extends Instance<typeof UsersPermissionsMeModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsMeModel */
export { selectFromUsersPermissionsMe, usersPermissionsMeModelPrimitives, UsersPermissionsMeModelSelector } from "./UsersPermissionsMeModel.base"

/**
 * UsersPermissionsMeModel
 */
export const UsersPermissionsMeModel = UsersPermissionsMeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
