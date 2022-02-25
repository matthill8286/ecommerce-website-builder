import { Instance } from "mobx-state-tree"
import { UsersPermissionsUserEntityResponseCollectionModelBase } from "./UsersPermissionsUserEntityResponseCollectionModel.base"

/* The TypeScript type of an instance of UsersPermissionsUserEntityResponseCollectionModel */
export interface UsersPermissionsUserEntityResponseCollectionModelType extends Instance<typeof UsersPermissionsUserEntityResponseCollectionModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsUserEntityResponseCollectionModel */
export { selectFromUsersPermissionsUserEntityResponseCollection, usersPermissionsUserEntityResponseCollectionModelPrimitives, UsersPermissionsUserEntityResponseCollectionModelSelector } from "./UsersPermissionsUserEntityResponseCollectionModel.base"

/**
 * UsersPermissionsUserEntityResponseCollectionModel
 */
export const UsersPermissionsUserEntityResponseCollectionModel = UsersPermissionsUserEntityResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
