/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsDeleteRolePayloadBase
 * auto generated base class for the model UsersPermissionsDeleteRolePayloadModel.
 */
export const UsersPermissionsDeleteRolePayloadModelBase = ModelBase
  .named('UsersPermissionsDeleteRolePayload')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsDeleteRolePayload"), "UsersPermissionsDeleteRolePayload"),
    ok: types.union(types.undefined, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsDeleteRolePayloadModelSelector extends QueryBuilder {
  get ok() { return this.__attr(`ok`) }
}
export function selectFromUsersPermissionsDeleteRolePayload() {
  return new UsersPermissionsDeleteRolePayloadModelSelector()
}

export const usersPermissionsDeleteRolePayloadModelPrimitives = selectFromUsersPermissionsDeleteRolePayload().ok
