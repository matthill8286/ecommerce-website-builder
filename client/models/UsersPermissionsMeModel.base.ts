/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsMeRoleModel, UsersPermissionsMeRoleModelType } from "./UsersPermissionsMeRoleModel"
import { UsersPermissionsMeRoleModelSelector } from "./UsersPermissionsMeRoleModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  role: UsersPermissionsMeRoleModelType;
}

/**
 * UsersPermissionsMeBase
 * auto generated base class for the model UsersPermissionsMeModel.
 */
export const UsersPermissionsMeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UsersPermissionsMe')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsMe"), "UsersPermissionsMe"),
    id: types.identifier,
    username: types.union(types.undefined, types.string),
    email: types.union(types.undefined, types.null, types.string),
    confirmed: types.union(types.undefined, types.null, types.boolean),
    blocked: types.union(types.undefined, types.null, types.boolean),
    role: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UsersPermissionsMeRoleModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UsersPermissionsMeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get username() { return this.__attr(`username`) }
  get email() { return this.__attr(`email`) }
  get confirmed() { return this.__attr(`confirmed`) }
  get blocked() { return this.__attr(`blocked`) }
  role(builder?: string | UsersPermissionsMeRoleModelSelector | ((selector: UsersPermissionsMeRoleModelSelector) => UsersPermissionsMeRoleModelSelector)) { return this.__child(`role`, UsersPermissionsMeRoleModelSelector, builder) }
}
export function selectFromUsersPermissionsMe() {
  return new UsersPermissionsMeModelSelector()
}

export const usersPermissionsMeModelPrimitives = selectFromUsersPermissionsMe().username.email.confirmed.blocked
