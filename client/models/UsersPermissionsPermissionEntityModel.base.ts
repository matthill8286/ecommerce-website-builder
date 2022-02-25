/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsPermissionModel, UsersPermissionsPermissionModelType } from "./UsersPermissionsPermissionModel"
import { UsersPermissionsPermissionModelSelector } from "./UsersPermissionsPermissionModel.base"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsPermissionEntityBase
 * auto generated base class for the model UsersPermissionsPermissionEntityModel.
 */
export const UsersPermissionsPermissionEntityModelBase = ModelBase
  .named('UsersPermissionsPermissionEntity')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsPermissionEntity"), "UsersPermissionsPermissionEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => UsersPermissionsPermissionModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsPermissionEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | UsersPermissionsPermissionModelSelector | ((selector: UsersPermissionsPermissionModelSelector) => UsersPermissionsPermissionModelSelector)) { return this.__child(`attributes`, UsersPermissionsPermissionModelSelector, builder) }
}
export function selectFromUsersPermissionsPermissionEntity() {
  return new UsersPermissionsPermissionEntityModelSelector()
}

export const usersPermissionsPermissionEntityModelPrimitives = selectFromUsersPermissionsPermissionEntity()
