/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsUserEntityModel, UsersPermissionsUserEntityModelType } from "./UsersPermissionsUserEntityModel"
import { UsersPermissionsUserEntityModelSelector } from "./UsersPermissionsUserEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: UsersPermissionsUserEntityModelType;
}

/**
 * UsersPermissionsUserEntityResponseBase
 * auto generated base class for the model UsersPermissionsUserEntityResponseModel.
 */
export const UsersPermissionsUserEntityResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UsersPermissionsUserEntityResponse')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsUserEntityResponse"), "UsersPermissionsUserEntityResponse"),
    data: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UsersPermissionsUserEntityModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UsersPermissionsUserEntityResponseModelSelector extends QueryBuilder {
  data(builder?: string | UsersPermissionsUserEntityModelSelector | ((selector: UsersPermissionsUserEntityModelSelector) => UsersPermissionsUserEntityModelSelector)) { return this.__child(`data`, UsersPermissionsUserEntityModelSelector, builder) }
}
export function selectFromUsersPermissionsUserEntityResponse() {
  return new UsersPermissionsUserEntityResponseModelSelector()
}

export const usersPermissionsUserEntityResponseModelPrimitives = selectFromUsersPermissionsUserEntityResponse()
