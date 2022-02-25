/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsMeModel, UsersPermissionsMeModelType } from "./UsersPermissionsMeModel"
import { UsersPermissionsMeModelSelector } from "./UsersPermissionsMeModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UsersPermissionsMeModelType;
}

/**
 * UsersPermissionsLoginPayloadBase
 * auto generated base class for the model UsersPermissionsLoginPayloadModel.
 */
export const UsersPermissionsLoginPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UsersPermissionsLoginPayload')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsLoginPayload"), "UsersPermissionsLoginPayload"),
    jwt: types.union(types.undefined, types.null, types.string),
    user: types.union(types.undefined, MSTGQLRef(types.late((): any => UsersPermissionsMeModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UsersPermissionsLoginPayloadModelSelector extends QueryBuilder {
  get jwt() { return this.__attr(`jwt`) }
  user(builder?: string | UsersPermissionsMeModelSelector | ((selector: UsersPermissionsMeModelSelector) => UsersPermissionsMeModelSelector)) { return this.__child(`user`, UsersPermissionsMeModelSelector, builder) }
}
export function selectFromUsersPermissionsLoginPayload() {
  return new UsersPermissionsLoginPayloadModelSelector()
}

export const usersPermissionsLoginPayloadModelPrimitives = selectFromUsersPermissionsLoginPayload().jwt
