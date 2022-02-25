/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsPasswordPayloadBase
 * auto generated base class for the model UsersPermissionsPasswordPayloadModel.
 */
export const UsersPermissionsPasswordPayloadModelBase = ModelBase
  .named('UsersPermissionsPasswordPayload')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsPasswordPayload"), "UsersPermissionsPasswordPayload"),
    ok: types.union(types.undefined, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsPasswordPayloadModelSelector extends QueryBuilder {
  get ok() { return this.__attr(`ok`) }
}
export function selectFromUsersPermissionsPasswordPayload() {
  return new UsersPermissionsPasswordPayloadModelSelector()
}

export const usersPermissionsPasswordPayloadModelPrimitives = selectFromUsersPermissionsPasswordPayload().ok
