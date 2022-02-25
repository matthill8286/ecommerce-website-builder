/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsRoleEntityResponseModel, UsersPermissionsRoleEntityResponseModelType } from "./UsersPermissionsRoleEntityResponseModel"
import { UsersPermissionsRoleEntityResponseModelSelector } from "./UsersPermissionsRoleEntityResponseModel.base"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsPermissionBase
 * auto generated base class for the model UsersPermissionsPermissionModel.
 */
export const UsersPermissionsPermissionModelBase = ModelBase
  .named('UsersPermissionsPermission')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsPermission"), "UsersPermissionsPermission"),
    action: types.union(types.undefined, types.string),
    role: types.union(types.undefined, types.null, types.late((): any => UsersPermissionsRoleEntityResponseModel)),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsPermissionModelSelector extends QueryBuilder {
  get action() { return this.__attr(`action`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  role(builder?: string | UsersPermissionsRoleEntityResponseModelSelector | ((selector: UsersPermissionsRoleEntityResponseModelSelector) => UsersPermissionsRoleEntityResponseModelSelector)) { return this.__child(`role`, UsersPermissionsRoleEntityResponseModelSelector, builder) }
}
export function selectFromUsersPermissionsPermission() {
  return new UsersPermissionsPermissionModelSelector()
}

export const usersPermissionsPermissionModelPrimitives = selectFromUsersPermissionsPermission().action.createdAt.updatedAt
