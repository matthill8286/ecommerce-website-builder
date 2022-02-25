import { Instance } from "mobx-state-tree"
import { UsersPermissionsUserEntityModelBase } from "./UsersPermissionsUserEntityModel.base"

/* The TypeScript type of an instance of UsersPermissionsUserEntityModel */
export interface UsersPermissionsUserEntityModelType extends Instance<typeof UsersPermissionsUserEntityModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsUserEntityModel */
export { selectFromUsersPermissionsUserEntity, usersPermissionsUserEntityModelPrimitives, UsersPermissionsUserEntityModelSelector } from "./UsersPermissionsUserEntityModel.base"

/**
 * UsersPermissionsUserEntityModel
 */
export const UsersPermissionsUserEntityModel = UsersPermissionsUserEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
