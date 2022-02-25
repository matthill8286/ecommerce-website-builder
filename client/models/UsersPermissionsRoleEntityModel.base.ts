/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsRoleModel, UsersPermissionsRoleModelType } from "./UsersPermissionsRoleModel"
import { UsersPermissionsRoleModelSelector } from "./UsersPermissionsRoleModel.base"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsRoleEntityBase
 * auto generated base class for the model UsersPermissionsRoleEntityModel.
 */
export const UsersPermissionsRoleEntityModelBase = ModelBase
  .named('UsersPermissionsRoleEntity')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsRoleEntity"), "UsersPermissionsRoleEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => UsersPermissionsRoleModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsRoleEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | UsersPermissionsRoleModelSelector | ((selector: UsersPermissionsRoleModelSelector) => UsersPermissionsRoleModelSelector)) { return this.__child(`attributes`, UsersPermissionsRoleModelSelector, builder) }
}
export function selectFromUsersPermissionsRoleEntity() {
  return new UsersPermissionsRoleEntityModelSelector()
}

export const usersPermissionsRoleEntityModelPrimitives = selectFromUsersPermissionsRoleEntity()
