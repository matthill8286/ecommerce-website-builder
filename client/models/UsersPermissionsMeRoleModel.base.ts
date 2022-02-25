/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsMeRoleBase
 * auto generated base class for the model UsersPermissionsMeRoleModel.
 */
export const UsersPermissionsMeRoleModelBase = ModelBase
  .named('UsersPermissionsMeRole')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsMeRole"), "UsersPermissionsMeRole"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
    description: types.union(types.undefined, types.null, types.string),
    type: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsMeRoleModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get description() { return this.__attr(`description`) }
  get type() { return this.__attr(`type`) }
}
export function selectFromUsersPermissionsMeRole() {
  return new UsersPermissionsMeRoleModelSelector()
}

export const usersPermissionsMeRoleModelPrimitives = selectFromUsersPermissionsMeRole().name.description.type
