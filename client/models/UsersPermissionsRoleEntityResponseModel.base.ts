/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsRoleEntityModel, UsersPermissionsRoleEntityModelType } from "./UsersPermissionsRoleEntityModel"
import { UsersPermissionsRoleEntityModelSelector } from "./UsersPermissionsRoleEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: UsersPermissionsRoleEntityModelType;
}

/**
 * UsersPermissionsRoleEntityResponseBase
 * auto generated base class for the model UsersPermissionsRoleEntityResponseModel.
 */
export const UsersPermissionsRoleEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UsersPermissionsRoleEntityResponse')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsRoleEntityResponse"), "UsersPermissionsRoleEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UsersPermissionsRoleEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UsersPermissionsRoleEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | UsersPermissionsRoleEntityModelSelector | ((selector: UsersPermissionsRoleEntityModelSelector) => UsersPermissionsRoleEntityModelSelector)) { return this.__child(`data`, UsersPermissionsRoleEntityModelSelector, builder) }
}
export function selectFromUsersPermissionsRoleEntityResponse() {
  return new UsersPermissionsRoleEntityResponseModelSelector()
}

export const usersPermissionsRoleEntityResponseModelPrimitives = selectFromUsersPermissionsRoleEntityResponse()
