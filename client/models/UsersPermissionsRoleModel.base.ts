/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsPermissionRelationResponseCollectionModel, UsersPermissionsPermissionRelationResponseCollectionModelType } from "./UsersPermissionsPermissionRelationResponseCollectionModel"
import { UsersPermissionsPermissionRelationResponseCollectionModelSelector } from "./UsersPermissionsPermissionRelationResponseCollectionModel.base"
import { UsersPermissionsUserRelationResponseCollectionModel, UsersPermissionsUserRelationResponseCollectionModelType } from "./UsersPermissionsUserRelationResponseCollectionModel"
import { UsersPermissionsUserRelationResponseCollectionModelSelector } from "./UsersPermissionsUserRelationResponseCollectionModel.base"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsRoleBase
 * auto generated base class for the model UsersPermissionsRoleModel.
 */
export const UsersPermissionsRoleModelBase = ModelBase
  .named('UsersPermissionsRole')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsRole"), "UsersPermissionsRole"),
    name: types.union(types.undefined, types.string),
    description: types.union(types.undefined, types.null, types.string),
    type: types.union(types.undefined, types.null, types.string),
    permissions: types.union(types.undefined, types.null, types.late((): any => UsersPermissionsPermissionRelationResponseCollectionModel)),
    users: types.union(types.undefined, types.null, types.late((): any => UsersPermissionsUserRelationResponseCollectionModel)),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsRoleModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get description() { return this.__attr(`description`) }
  get type() { return this.__attr(`type`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  permissions(builder?: string | UsersPermissionsPermissionRelationResponseCollectionModelSelector | ((selector: UsersPermissionsPermissionRelationResponseCollectionModelSelector) => UsersPermissionsPermissionRelationResponseCollectionModelSelector)) { return this.__child(`permissions`, UsersPermissionsPermissionRelationResponseCollectionModelSelector, builder) }
  users(builder?: string | UsersPermissionsUserRelationResponseCollectionModelSelector | ((selector: UsersPermissionsUserRelationResponseCollectionModelSelector) => UsersPermissionsUserRelationResponseCollectionModelSelector)) { return this.__child(`users`, UsersPermissionsUserRelationResponseCollectionModelSelector, builder) }
}
export function selectFromUsersPermissionsRole() {
  return new UsersPermissionsRoleModelSelector()
}

export const usersPermissionsRoleModelPrimitives = selectFromUsersPermissionsRole().name.description.type.createdAt.updatedAt
