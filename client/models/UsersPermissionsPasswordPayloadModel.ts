import { Instance } from "mobx-state-tree"
import { UsersPermissionsPasswordPayloadModelBase } from "./UsersPermissionsPasswordPayloadModel.base"

/* The TypeScript type of an instance of UsersPermissionsPasswordPayloadModel */
export interface UsersPermissionsPasswordPayloadModelType extends Instance<typeof UsersPermissionsPasswordPayloadModel.Type> {}

/* A graphql query fragment builders for UsersPermissionsPasswordPayloadModel */
export { selectFromUsersPermissionsPasswordPayload, usersPermissionsPasswordPayloadModelPrimitives, UsersPermissionsPasswordPayloadModelSelector } from "./UsersPermissionsPasswordPayloadModel.base"

/**
 * UsersPermissionsPasswordPayloadModel
 */
export const UsersPermissionsPasswordPayloadModel = UsersPermissionsPasswordPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
