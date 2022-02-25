/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsUserModel, UsersPermissionsUserModelType } from "./UsersPermissionsUserModel"
import { UsersPermissionsUserModelSelector } from "./UsersPermissionsUserModel.base"
import { RootStoreType } from "./index"


/**
 * UsersPermissionsUserEntityBase
 * auto generated base class for the model UsersPermissionsUserEntityModel.
 */
export const UsersPermissionsUserEntityModelBase = ModelBase
  .named('UsersPermissionsUserEntity')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsUserEntity"), "UsersPermissionsUserEntity"),
    id: types.identifier,
    attributes: types.union(types.undefined, types.null, types.late((): any => UsersPermissionsUserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersPermissionsUserEntityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  attributes(builder?: string | UsersPermissionsUserModelSelector | ((selector: UsersPermissionsUserModelSelector) => UsersPermissionsUserModelSelector)) { return this.__child(`attributes`, UsersPermissionsUserModelSelector, builder) }
}
export function selectFromUsersPermissionsUserEntity() {
  return new UsersPermissionsUserEntityModelSelector()
}

export const usersPermissionsUserEntityModelPrimitives = selectFromUsersPermissionsUserEntity()
