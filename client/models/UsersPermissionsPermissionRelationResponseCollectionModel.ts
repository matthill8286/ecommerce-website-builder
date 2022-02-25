import { Instance } from "mobx-state-tree"
import { UsersPermissionsPermissionRelationResponseCollectionModelBase } from "./UsersPermissionsPermissionRelationResponseCollectionModel.base"

/* The TypeScript type of an instance of UsersPermissionsPermissionRelationResponseCollectionModel */
export interface UsersPermissionsPermissionRelationResponseCollectionModelType extends Instance<typeof UsersPermissionsPermissionRelationResponseCollectionModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsPermissionRelationResponseCollectionModel */
export { selectFromUsersPermissionsPermissionRelationResponseCollection, usersPermissionsPermissionRelationResponseCollectionModelPrimitives, UsersPermissionsPermissionRelationResponseCollectionModelSelector } from "./UsersPermissionsPermissionRelationResponseCollectionModel.base"

/**
 * UsersPermissionsPermissionRelationResponseCollectionModel
 */
export const UsersPermissionsPermissionRelationResponseCollectionModel = UsersPermissionsPermissionRelationResponseCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
