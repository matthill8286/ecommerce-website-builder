import { Instance } from "mobx-state-tree"
import { UsersPermissionsUserEntityResponseModelBase } from "./UsersPermissionsUserEntityResponseModel.base"

/* The TypeScript type of an instance of UsersPermissionsUserEntityResponseModel */
export interface UsersPermissionsUserEntityResponseModelType extends Instance<typeof UsersPermissionsUserEntityResponseModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsUserEntityResponseModel */
export { selectFromUsersPermissionsUserEntityResponse, usersPermissionsUserEntityResponseModelPrimitives, UsersPermissionsUserEntityResponseModelSelector } from "./UsersPermissionsUserEntityResponseModel.base"

/**
 * UsersPermissionsUserEntityResponseModel
 */
export const UsersPermissionsUserEntityResponseModel = UsersPermissionsUserEntityResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
