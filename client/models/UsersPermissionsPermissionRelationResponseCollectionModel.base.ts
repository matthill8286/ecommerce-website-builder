/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsPermissionEntityModel, UsersPermissionsPermissionEntityModelType } from "./UsersPermissionsPermissionEntityModel"
import { UsersPermissionsPermissionEntityModelSelector } from "./UsersPermissionsPermissionEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<UsersPermissionsPermissionEntityModelType>;
}

/**
 * UsersPermissionsPermissionRelationResponseCollectionBase
 * auto generated base class for the model UsersPermissionsPermissionRelationResponseCollectionModel.
 */
export const UsersPermissionsPermissionRelationResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UsersPermissionsPermissionRelationResponseCollection')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsPermissionRelationResponseCollection"), "UsersPermissionsPermissionRelationResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => UsersPermissionsPermissionEntityModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UsersPermissionsPermissionRelationResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | UsersPermissionsPermissionEntityModelSelector | ((selector: UsersPermissionsPermissionEntityModelSelector) => UsersPermissionsPermissionEntityModelSelector)) { return this.__child(`data`, UsersPermissionsPermissionEntityModelSelector, builder) }
}
export function selectFromUsersPermissionsPermissionRelationResponseCollection() {
  return new UsersPermissionsPermissionRelationResponseCollectionModelSelector()
}

export const usersPermissionsPermissionRelationResponseCollectionModelPrimitives = selectFromUsersPermissionsPermissionRelationResponseCollection()
