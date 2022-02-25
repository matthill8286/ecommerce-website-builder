/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsUpdateRolePayloadBase
 * auto generated base class for the model UsersPermissionsUpdateRolePayloadModel.
 */
export const UsersPermissionsUpdateRolePayloadModelBase = ModelBase
  .named('UsersPermissionsUpdateRolePayload')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsUpdateRolePayload"), "UsersPermissionsUpdateRolePayload"),
    ok: types.union(types.undefined, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsUpdateRolePayloadModelSelector extends QueryBuilder {
  get ok() { return this.__attr(`ok`) }
}
export function selectFromUsersPermissionsUpdateRolePayload() {
  return new UsersPermissionsUpdateRolePayloadModelSelector()
}

export const usersPermissionsUpdateRolePayloadModelPrimitives = selectFromUsersPermissionsUpdateRolePayload().ok
