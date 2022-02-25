/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { UsersPermissionsUserEntityModel, UsersPermissionsUserEntityModelType } from "./UsersPermissionsUserEntityModel"
import { UsersPermissionsUserEntityModelSelector } from "./UsersPermissionsUserEntityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<UsersPermissionsUserEntityModelType>;
}

/**
 * UsersPermissionsUserEntityResponseCollectionBase
 * auto generated base class for the model UsersPermissionsUserEntityResponseCollectionModel.
 */
export const UsersPermissionsUserEntityResponseCollectionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UsersPermissionsUserEntityResponseCollection')
  .props({
    __typename: types.optional(types.literal("UsersPermissionsUserEntityResponseCollection"), "UsersPermissionsUserEntityResponseCollection"),
    data: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => UsersPermissionsUserEntityModel)))),
    meta: types.union(types.undefined, types.late((): any => ResponseCollectionMetaModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UsersPermissionsUserEntityResponseCollectionModelSelector extends QueryBuilder {
  data(builder?: string | UsersPermissionsUserEntityModelSelector | ((selector: UsersPermissionsUserEntityModelSelector) => UsersPermissionsUserEntityModelSelector)) { return this.__child(`data`, UsersPermissionsUserEntityModelSelector, builder) }
  meta(builder?: string | ResponseCollectionMetaModelSelector | ((selector: ResponseCollectionMetaModelSelector) => ResponseCollectionMetaModelSelector)) { return this.__child(`meta`, ResponseCollectionMetaModelSelector, builder) }
}
export function selectFromUsersPermissionsUserEntityResponseCollection() {
  return new UsersPermissionsUserEntityResponseCollectionModelSelector()
}

export const usersPermissionsUserEntityResponseCollectionModelPrimitives = selectFromUsersPermissionsUserEntityResponseCollection()
