/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsCreateRolePayloadBase
 * auto generated base class for the model UsersPermissionsCreateRolePayloadModel.
 */
export const UsersPermissionsCreateRolePayloadModelBase = ModelBase
  .named('UsersPermissionsCreateRolePayload')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsCreateRolePayload"), "UsersPermissionsCreateRolePayload"),
    ok: types.union(types.undefined, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsCreateRolePayloadModelSelector extends QueryBuilder {
  get ok() { return this.__attr(`ok`) }
}
export function selectFromUsersPermissionsCreateRolePayload() {
  return new UsersPermissionsCreateRolePayloadModelSelector()
}

export const usersPermissionsCreateRolePayloadModelPrimitives = selectFromUsersPermissionsCreateRolePayload().ok
