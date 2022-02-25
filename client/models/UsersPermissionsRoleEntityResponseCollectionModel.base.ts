/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { UsersPermissionsRoleEntityModel, UsersPermissionsRoleEntityModelType } from "./UsersPermissionsRoleEntityModel"
import { UsersPermissionsRoleEntityModelSelector } from "./UsersPermissionsRoleEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<UsersPermissionsRoleEntityModelType>;
}

/**
 * UsersPermissionsRoleEntityResponseCollectionBase
 * auto generated base class for the model UsersPermissionsRoleEntityResponseCollectionModel.
 */
export const UsersPermissionsRoleEntityResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UsersPermissionsRoleEntityResponseCollection')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsRoleEntityResponseCollection"), "UsersPermissionsRoleEntityResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => UsersPermissionsRoleEntityModel)))),
    meta: types.union(types.undefined, types.late((): any => ResponseCollectionMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UsersPermissionsRoleEntityResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | UsersPermissionsRoleEntityModelSelector | ((selector: UsersPermissionsRoleEntityModelSelector) => UsersPermissionsRoleEntityModelSelector)) { return this.__child(`data`, UsersPermissionsRoleEntityModelSelector, builder) }
  meta(builder?: string | ResponseCollectionMetaModelSelector | ((selector: ResponseCollectionMetaModelSelector) => ResponseCollectionMetaModelSelector)) { return this.__child(`meta`, ResponseCollectionMetaModelSelector, builder) }
}
export function selectFromUsersPermissionsRoleEntityResponseCollection() {
  return new UsersPermissionsRoleEntityResponseCollectionModelSelector()
}

export const usersPermissionsRoleEntityResponseCollectionModelPrimitives = selectFromUsersPermissionsRoleEntityResponseCollection()
