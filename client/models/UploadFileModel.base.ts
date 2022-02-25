/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CategoryModel } from "./CategoryModel"
import { CollectionModel } from "./CollectionModel"
import { ComponentElementsFeatureColumnModel } from "./ComponentElementsFeatureColumnModel"
import { ComponentElementsFeatureModel } from "./ComponentElementsFeatureModel"
import { ComponentElementsFeatureRowModel } from "./ComponentElementsFeatureRowModel"
import { ComponentElementsFooterSectionModel } from "./ComponentElementsFooterSectionModel"
import { ComponentElementsLogosModel } from "./ComponentElementsLogosModel"
import { ComponentElementsNotificationBannerModel } from "./ComponentElementsNotificationBannerModel"
import { ComponentElementsPlanModel } from "./ComponentElementsPlanModel"
import { ComponentElementsProductTileModel } from "./ComponentElementsProductTileModel"
import { ComponentElementsTestimonialModel } from "./ComponentElementsTestimonialModel"
import { ComponentLayoutFooterModel } from "./ComponentLayoutFooterModel"
import { ComponentLayoutNavbarModel } from "./ComponentLayoutNavbarModel"
import { ComponentLinksButtonLinkModel } from "./ComponentLinksButtonLinkModel"
import { ComponentLinksButtonModel } from "./ComponentLinksButtonModel"
import { ComponentLinksLinkModel } from "./ComponentLinksLinkModel"
import { ComponentMetaMetadataModel } from "./ComponentMetaMetadataModel"
import { ComponentSectionsBottomActionsModel } from "./ComponentSectionsBottomActionsModel"
import { ComponentSectionsFeatureColumnsGroupModel } from "./ComponentSectionsFeatureColumnsGroupModel"
import { ComponentSectionsFeatureRowsGroupModel } from "./ComponentSectionsFeatureRowsGroupModel"
import { ComponentSectionsHeroModel } from "./ComponentSectionsHeroModel"
import { ComponentSectionsLargeVideoModel } from "./ComponentSectionsLargeVideoModel"
import { ComponentSectionsLeadFormModel } from "./ComponentSectionsLeadFormModel"
import { ComponentSectionsPricingModel } from "./ComponentSectionsPricingModel"
import { ComponentSectionsRichTextModel } from "./ComponentSectionsRichTextModel"
import { ComponentSectionsTestimonialsGroupModel } from "./ComponentSectionsTestimonialsGroupModel"
import { ComponentSharedMetaSocialModel } from "./ComponentSharedMetaSocialModel"
import { ComponentSharedSeoModel } from "./ComponentSharedSeoModel"
import { GenericMorphModelSelector } from "./GenericMorphModelSelector"
import { GlobalModel } from "./GlobalModel"
import { I18NLocaleModel } from "./I18NLocaleModel"
import { LeadFormSubmissionModel } from "./LeadFormSubmissionModel"
import { PageModel } from "./PageModel"
import { ProductModel } from "./ProductModel"
import { UploadFileModel } from "./UploadFileModel"
import { UsersPermissionsPermissionModel } from "./UsersPermissionsPermissionModel"
import { UsersPermissionsRoleModel } from "./UsersPermissionsRoleModel"
import { UsersPermissionsUserModel } from "./UsersPermissionsUserModel"
import { RootStoreType } from "./index"


/**
 * UploadFileBase
 * auto generated base class for the model UploadFileModel.
 */
export const UploadFileModelBase = ModelBase
  .named('UploadFile')
  .props({
    __typename: types.optional(types.literal("UploadFile"), "UploadFile"),
    name: types.union(types.undefined, types.string),
    alternativeText: types.union(types.undefined, types.null, types.string),
    caption: types.union(types.undefined, types.null, types.string),
    width: types.union(types.undefined, types.null, types.integer),
    height: types.union(types.undefined, types.null, types.integer),
    formats: types.union(types.undefined, types.null, types.frozen()),
    hash: types.union(types.undefined, types.string),
    ext: types.union(types.undefined, types.null, types.string),
    mime: types.union(types.undefined, types.string),
    size: types.union(types.undefined, types.number),
    url: types.union(types.undefined, types.string),
    previewUrl: types.union(types.undefined, types.null, types.string),
    provider: types.union(types.undefined, types.string),
    provider_metadata: types.union(types.undefined, types.null, types.frozen()),
    related: types.union(types.undefined, types.null, types.array(types.union(types.null, types.union(types.late(() => ComponentElementsFeatureColumnModel), types.late(() => ComponentElementsFeatureRowModel), types.late(() => ComponentElementsFeatureModel), types.late(() => ComponentElementsFooterSectionModel), types.late(() => ComponentElementsLogosModel), types.late(() => ComponentElementsNotificationBannerModel), types.late(() => ComponentElementsPlanModel), types.late(() => ComponentElementsProductTileModel), types.late(() => ComponentElementsTestimonialModel), types.late(() => ComponentLayoutFooterModel), types.late(() => ComponentLayoutNavbarModel), types.late(() => ComponentLinksButtonLinkModel), types.late(() => ComponentLinksButtonModel), types.late(() => ComponentLinksLinkModel), types.late(() => ComponentMetaMetadataModel), types.late(() => ComponentSectionsBottomActionsModel), types.late(() => ComponentSectionsFeatureColumnsGroupModel), types.late(() => ComponentSectionsFeatureRowsGroupModel), types.late(() => ComponentSectionsHeroModel), types.late(() => ComponentSectionsLargeVideoModel), types.late(() => ComponentSectionsLeadFormModel), types.late(() => ComponentSectionsPricingModel), types.late(() => ComponentSectionsRichTextModel), types.late(() => ComponentSectionsTestimonialsGroupModel), types.late(() => ComponentSharedMetaSocialModel), types.late(() => ComponentSharedSeoModel), types.late(() => UploadFileModel), types.late(() => I18NLocaleModel), types.late(() => UsersPermissionsPermissionModel), types.late(() => UsersPermissionsRoleModel), types.late(() => UsersPermissionsUserModel), types.late(() => CategoryModel), types.late(() => CollectionModel), types.late(() => GlobalModel), types.late(() => LeadFormSubmissionModel), types.late(() => PageModel), types.late(() => ProductModel))))),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UploadFileModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get alternativeText() { return this.__attr(`alternativeText`) }
  get caption() { return this.__attr(`caption`) }
  get width() { return this.__attr(`width`) }
  get height() { return this.__attr(`height`) }
  get formats() { return this.__attr(`formats`) }
  get hash() { return this.__attr(`hash`) }
  get ext() { return this.__attr(`ext`) }
  get mime() { return this.__attr(`mime`) }
  get size() { return this.__attr(`size`) }
  get url() { return this.__attr(`url`) }
  get previewUrl() { return this.__attr(`previewUrl`) }
  get provider() { return this.__attr(`provider`) }
  get provider_metadata() { return this.__attr(`provider_metadata`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  related(builder?: string | GenericMorphModelSelector | ((selector: GenericMorphModelSelector) => GenericMorphModelSelector)) { return this.__child(`related`, GenericMorphModelSelector, builder) }
}
export function selectFromUploadFile() {
  return new UploadFileModelSelector()
}

export const uploadFileModelPrimitives = selectFromUploadFile().name.alternativeText.caption.width.height.formats.hash.ext.mime.size.url.previewUrl.provider.provider_metadata.createdAt.updatedAt
