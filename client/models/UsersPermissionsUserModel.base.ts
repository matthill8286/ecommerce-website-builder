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
 * UsersPermissionsUserBase
 * auto generated base class for the model UsersPermissionsUserModel.
 */
export const UsersPermissionsUserModelBase = ModelBase
  .named('UsersPermissionsUser')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsUser"), "UsersPermissionsUser"),
    username: types.union(types.undefined, types.string),
    email: types.union(types.undefined, types.string),
    provider: types.union(types.undefined, types.null, types.string),
    confirmed: types.union(types.undefined, types.null, types.boolean),
    blocked: types.union(types.undefined, types.null, types.boolean),
    role: types.union(types.undefined, types.null, types.late((): any => UsersPermissionsRoleEntityResponseModel)),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsUserModelSelector extends QueryBuilder {
  get username() { return this.__attr(`username`) }
  get email() { return this.__attr(`email`) }
  get provider() { return this.__attr(`provider`) }
  get confirmed() { return this.__attr(`confirmed`) }
  get blocked() { return this.__attr(`blocked`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  role(builder?: string | UsersPermissionsRoleEntityResponseModelSelector | ((selector: UsersPermissionsRoleEntityResponseModelSelector) => UsersPermissionsRoleEntityResponseModelSelector)) { return this.__child(`role`, UsersPermissionsRoleEntityResponseModelSelector, builder) }
}
export function selectFromUsersPermissionsUser() {
  return new UsersPermissionsUserModelSelector()
}

export const usersPermissionsUserModelPrimitives = selectFromUsersPermissionsUser().username.email.provider.confirmed.blocked.createdAt.updatedAt
