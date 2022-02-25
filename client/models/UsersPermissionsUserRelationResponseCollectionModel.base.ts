/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UsersPermissionsUserEntityModel, UsersPermissionsUserEntityModelType } from "./UsersPermissionsUserEntityModel"
import { UsersPermissionsUserEntityModelSelector } from "./UsersPermissionsUserEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<UsersPermissionsUserEntityModelType>;
}

/**
 * UsersPermissionsUserRelationResponseCollectionBase
 * auto generated base class for the model UsersPermissionsUserRelationResponseCollectionModel.
 */
export const UsersPermissionsUserRelationResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UsersPermissionsUserRelationResponseCollection')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsUserRelationResponseCollection"), "UsersPermissionsUserRelationResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => UsersPermissionsUserEntityModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UsersPermissionsUserRelationResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | UsersPermissionsUserEntityModelSelector | ((selector: UsersPermissionsUserEntityModelSelector) => UsersPermissionsUserEntityModelSelector)) { return this.__child(`data`, UsersPermissionsUserEntityModelSelector, builder) }
}
export function selectFromUsersPermissionsUserRelationResponseCollection() {
  return new UsersPermissionsUserRelationResponseCollectionModelSelector()
}

export const usersPermissionsUserRelationResponseCollectionModelPrimitives = selectFromUsersPermissionsUserRelationResponseCollection()
