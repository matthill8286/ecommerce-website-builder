import { Instance } from "mobx-state-tree"
import { UsersPermissionsUserRelationResponseCollectionModelBase } from "./UsersPermissionsUserRelationResponseCollectionModel.base"

/* The TypeScript type of an instance of UsersPermissionsUserRelationResponseCollectionModel */
export interface UsersPermissionsUserRelationResponseCollectionModelType extends Instance<typeof UsersPermissionsUserRelationResponseCollectionModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsUserRelationResponseCollectionModel */
export { selectFromUsersPermissionsUserRelationResponseCollection, usersPermissionsUserRelationResponseCollectionModelPrimitives, UsersPermissionsUserRelationResponseCollectionModelSelector } from "./UsersPermissionsUserRelationResponseCollectionModel.base"

/**
 * UsersPermissionsUserRelationResponseCollectionModel
 */
export const UsersPermissionsUserRelationResponseCollectionModel = UsersPermissionsUserRelationResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
