/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { ErrorModel, ErrorModelType } from "./ErrorModel"
import { errorModelPrimitives, ErrorModelSelector } from "./ErrorModel.base"
import { PaginationModel, PaginationModelType } from "./PaginationModel"
import { paginationModelPrimitives, PaginationModelSelector } from "./PaginationModel.base"
import { ResponseCollectionMetaModel, ResponseCollectionMetaModelType } from "./ResponseCollectionMetaModel"
import { responseCollectionMetaModelPrimitives, ResponseCollectionMetaModelSelector } from "./ResponseCollectionMetaModel.base"
import { ComponentElementsFeatureColumnModel, ComponentElementsFeatureColumnModelType } from "./ComponentElementsFeatureColumnModel"
import { componentElementsFeatureColumnModelPrimitives, ComponentElementsFeatureColumnModelSelector } from "./ComponentElementsFeatureColumnModel.base"
import { ComponentElementsFeatureRowModel, ComponentElementsFeatureRowModelType } from "./ComponentElementsFeatureRowModel"
import { componentElementsFeatureRowModelPrimitives, ComponentElementsFeatureRowModelSelector } from "./ComponentElementsFeatureRowModel.base"
import { ComponentElementsFeatureModel, ComponentElementsFeatureModelType } from "./ComponentElementsFeatureModel"
import { componentElementsFeatureModelPrimitives, ComponentElementsFeatureModelSelector } from "./ComponentElementsFeatureModel.base"
import { ComponentElementsFooterSectionModel, ComponentElementsFooterSectionModelType } from "./ComponentElementsFooterSectionModel"
import { componentElementsFooterSectionModelPrimitives, ComponentElementsFooterSectionModelSelector } from "./ComponentElementsFooterSectionModel.base"
import { ComponentElementsLogosModel, ComponentElementsLogosModelType } from "./ComponentElementsLogosModel"
import { componentElementsLogosModelPrimitives, ComponentElementsLogosModelSelector } from "./ComponentElementsLogosModel.base"
import { ComponentElementsNotificationBannerModel, ComponentElementsNotificationBannerModelType } from "./ComponentElementsNotificationBannerModel"
import { componentElementsNotificationBannerModelPrimitives, ComponentElementsNotificationBannerModelSelector } from "./ComponentElementsNotificationBannerModel.base"
import { ComponentElementsPlanModel, ComponentElementsPlanModelType } from "./ComponentElementsPlanModel"
import { componentElementsPlanModelPrimitives, ComponentElementsPlanModelSelector } from "./ComponentElementsPlanModel.base"
import { ComponentElementsProductTileModel, ComponentElementsProductTileModelType } from "./ComponentElementsProductTileModel"
import { componentElementsProductTileModelPrimitives, ComponentElementsProductTileModelSelector } from "./ComponentElementsProductTileModel.base"
import { ComponentElementsTestimonialModel, ComponentElementsTestimonialModelType } from "./ComponentElementsTestimonialModel"
import { componentElementsTestimonialModelPrimitives, ComponentElementsTestimonialModelSelector } from "./ComponentElementsTestimonialModel.base"
import { ComponentLayoutFooterModel, ComponentLayoutFooterModelType } from "./ComponentLayoutFooterModel"
import { componentLayoutFooterModelPrimitives, ComponentLayoutFooterModelSelector } from "./ComponentLayoutFooterModel.base"
import { ComponentLayoutNavbarModel, ComponentLayoutNavbarModelType } from "./ComponentLayoutNavbarModel"
import { componentLayoutNavbarModelPrimitives, ComponentLayoutNavbarModelSelector } from "./ComponentLayoutNavbarModel.base"
import { ComponentLinksButtonLinkModel, ComponentLinksButtonLinkModelType } from "./ComponentLinksButtonLinkModel"
import { componentLinksButtonLinkModelPrimitives, ComponentLinksButtonLinkModelSelector } from "./ComponentLinksButtonLinkModel.base"
import { ComponentLinksButtonModel, ComponentLinksButtonModelType } from "./ComponentLinksButtonModel"
import { componentLinksButtonModelPrimitives, ComponentLinksButtonModelSelector } from "./ComponentLinksButtonModel.base"
import { ComponentLinksLinkModel, ComponentLinksLinkModelType } from "./ComponentLinksLinkModel"
import { componentLinksLinkModelPrimitives, ComponentLinksLinkModelSelector } from "./ComponentLinksLinkModel.base"
import { ComponentMetaMetadataModel, ComponentMetaMetadataModelType } from "./ComponentMetaMetadataModel"
import { componentMetaMetadataModelPrimitives, ComponentMetaMetadataModelSelector } from "./ComponentMetaMetadataModel.base"
import { ComponentSectionsBottomActionsModel, ComponentSectionsBottomActionsModelType } from "./ComponentSectionsBottomActionsModel"
import { componentSectionsBottomActionsModelPrimitives, ComponentSectionsBottomActionsModelSelector } from "./ComponentSectionsBottomActionsModel.base"
import { ComponentSectionsFeatureColumnsGroupModel, ComponentSectionsFeatureColumnsGroupModelType } from "./ComponentSectionsFeatureColumnsGroupModel"
import { componentSectionsFeatureColumnsGroupModelPrimitives, ComponentSectionsFeatureColumnsGroupModelSelector } from "./ComponentSectionsFeatureColumnsGroupModel.base"
import { ComponentSectionsFeatureRowsGroupModel, ComponentSectionsFeatureRowsGroupModelType } from "./ComponentSectionsFeatureRowsGroupModel"
import { componentSectionsFeatureRowsGroupModelPrimitives, ComponentSectionsFeatureRowsGroupModelSelector } from "./ComponentSectionsFeatureRowsGroupModel.base"
import { ComponentSectionsHeroModel, ComponentSectionsHeroModelType } from "./ComponentSectionsHeroModel"
import { componentSectionsHeroModelPrimitives, ComponentSectionsHeroModelSelector } from "./ComponentSectionsHeroModel.base"
import { ComponentSectionsLargeVideoModel, ComponentSectionsLargeVideoModelType } from "./ComponentSectionsLargeVideoModel"
import { componentSectionsLargeVideoModelPrimitives, ComponentSectionsLargeVideoModelSelector } from "./ComponentSectionsLargeVideoModel.base"
import { ComponentSectionsLeadFormModel, ComponentSectionsLeadFormModelType } from "./ComponentSectionsLeadFormModel"
import { componentSectionsLeadFormModelPrimitives, ComponentSectionsLeadFormModelSelector } from "./ComponentSectionsLeadFormModel.base"
import { ComponentSectionsPricingModel, ComponentSectionsPricingModelType } from "./ComponentSectionsPricingModel"
import { componentSectionsPricingModelPrimitives, ComponentSectionsPricingModelSelector } from "./ComponentSectionsPricingModel.base"
import { ComponentSectionsRichTextModel, ComponentSectionsRichTextModelType } from "./ComponentSectionsRichTextModel"
import { componentSectionsRichTextModelPrimitives, ComponentSectionsRichTextModelSelector } from "./ComponentSectionsRichTextModel.base"
import { ComponentSectionsTestimonialsGroupModel, ComponentSectionsTestimonialsGroupModelType } from "./ComponentSectionsTestimonialsGroupModel"
import { componentSectionsTestimonialsGroupModelPrimitives, ComponentSectionsTestimonialsGroupModelSelector } from "./ComponentSectionsTestimonialsGroupModel.base"
import { ComponentSharedMetaSocialModel, ComponentSharedMetaSocialModelType } from "./ComponentSharedMetaSocialModel"
import { componentSharedMetaSocialModelPrimitives, ComponentSharedMetaSocialModelSelector } from "./ComponentSharedMetaSocialModel.base"
import { ComponentSharedSeoModel, ComponentSharedSeoModelType } from "./ComponentSharedSeoModel"
import { componentSharedSeoModelPrimitives, ComponentSharedSeoModelSelector } from "./ComponentSharedSeoModel.base"
import { UploadFileModel, UploadFileModelType } from "./UploadFileModel"
import { uploadFileModelPrimitives, UploadFileModelSelector } from "./UploadFileModel.base"
import { UploadFileEntityModel, UploadFileEntityModelType } from "./UploadFileEntityModel"
import { uploadFileEntityModelPrimitives, UploadFileEntityModelSelector } from "./UploadFileEntityModel.base"
import { UploadFileEntityResponseModel, UploadFileEntityResponseModelType } from "./UploadFileEntityResponseModel"
import { uploadFileEntityResponseModelPrimitives, UploadFileEntityResponseModelSelector } from "./UploadFileEntityResponseModel.base"
import { UploadFileEntityResponseCollectionModel, UploadFileEntityResponseCollectionModelType } from "./UploadFileEntityResponseCollectionModel"
import { uploadFileEntityResponseCollectionModelPrimitives, UploadFileEntityResponseCollectionModelSelector } from "./UploadFileEntityResponseCollectionModel.base"
import { UploadFileRelationResponseCollectionModel, UploadFileRelationResponseCollectionModelType } from "./UploadFileRelationResponseCollectionModel"
import { uploadFileRelationResponseCollectionModelPrimitives, UploadFileRelationResponseCollectionModelSelector } from "./UploadFileRelationResponseCollectionModel.base"
import { I18NLocaleModel, I18NLocaleModelType } from "./I18NLocaleModel"
import { i18NLocaleModelPrimitives, I18NLocaleModelSelector } from "./I18NLocaleModel.base"
import { I18NLocaleEntityModel, I18NLocaleEntityModelType } from "./I18NLocaleEntityModel"
import { i18NLocaleEntityModelPrimitives, I18NLocaleEntityModelSelector } from "./I18NLocaleEntityModel.base"
import { I18NLocaleEntityResponseModel, I18NLocaleEntityResponseModelType } from "./I18NLocaleEntityResponseModel"
import { i18NLocaleEntityResponseModelPrimitives, I18NLocaleEntityResponseModelSelector } from "./I18NLocaleEntityResponseModel.base"
import { I18NLocaleEntityResponseCollectionModel, I18NLocaleEntityResponseCollectionModelType } from "./I18NLocaleEntityResponseCollectionModel"
import { i18NLocaleEntityResponseCollectionModelPrimitives, I18NLocaleEntityResponseCollectionModelSelector } from "./I18NLocaleEntityResponseCollectionModel.base"
import { UsersPermissionsPermissionModel, UsersPermissionsPermissionModelType } from "./UsersPermissionsPermissionModel"
import { usersPermissionsPermissionModelPrimitives, UsersPermissionsPermissionModelSelector } from "./UsersPermissionsPermissionModel.base"
import { UsersPermissionsPermissionEntityModel, UsersPermissionsPermissionEntityModelType } from "./UsersPermissionsPermissionEntityModel"
import { usersPermissionsPermissionEntityModelPrimitives, UsersPermissionsPermissionEntityModelSelector } from "./UsersPermissionsPermissionEntityModel.base"
import { UsersPermissionsPermissionRelationResponseCollectionModel, UsersPermissionsPermissionRelationResponseCollectionModelType } from "./UsersPermissionsPermissionRelationResponseCollectionModel"
import { usersPermissionsPermissionRelationResponseCollectionModelPrimitives, UsersPermissionsPermissionRelationResponseCollectionModelSelector } from "./UsersPermissionsPermissionRelationResponseCollectionModel.base"
import { UsersPermissionsRoleModel, UsersPermissionsRoleModelType } from "./UsersPermissionsRoleModel"
import { usersPermissionsRoleModelPrimitives, UsersPermissionsRoleModelSelector } from "./UsersPermissionsRoleModel.base"
import { UsersPermissionsRoleEntityModel, UsersPermissionsRoleEntityModelType } from "./UsersPermissionsRoleEntityModel"
import { usersPermissionsRoleEntityModelPrimitives, UsersPermissionsRoleEntityModelSelector } from "./UsersPermissionsRoleEntityModel.base"
import { UsersPermissionsRoleEntityResponseModel, UsersPermissionsRoleEntityResponseModelType } from "./UsersPermissionsRoleEntityResponseModel"
import { usersPermissionsRoleEntityResponseModelPrimitives, UsersPermissionsRoleEntityResponseModelSelector } from "./UsersPermissionsRoleEntityResponseModel.base"
import { UsersPermissionsRoleEntityResponseCollectionModel, UsersPermissionsRoleEntityResponseCollectionModelType } from "./UsersPermissionsRoleEntityResponseCollectionModel"
import { usersPermissionsRoleEntityResponseCollectionModelPrimitives, UsersPermissionsRoleEntityResponseCollectionModelSelector } from "./UsersPermissionsRoleEntityResponseCollectionModel.base"
import { UsersPermissionsUserModel, UsersPermissionsUserModelType } from "./UsersPermissionsUserModel"
import { usersPermissionsUserModelPrimitives, UsersPermissionsUserModelSelector } from "./UsersPermissionsUserModel.base"
import { UsersPermissionsUserEntityModel, UsersPermissionsUserEntityModelType } from "./UsersPermissionsUserEntityModel"
import { usersPermissionsUserEntityModelPrimitives, UsersPermissionsUserEntityModelSelector } from "./UsersPermissionsUserEntityModel.base"
import { UsersPermissionsUserEntityResponseModel, UsersPermissionsUserEntityResponseModelType } from "./UsersPermissionsUserEntityResponseModel"
import { usersPermissionsUserEntityResponseModelPrimitives, UsersPermissionsUserEntityResponseModelSelector } from "./UsersPermissionsUserEntityResponseModel.base"
import { UsersPermissionsUserEntityResponseCollectionModel, UsersPermissionsUserEntityResponseCollectionModelType } from "./UsersPermissionsUserEntityResponseCollectionModel"
import { usersPermissionsUserEntityResponseCollectionModelPrimitives, UsersPermissionsUserEntityResponseCollectionModelSelector } from "./UsersPermissionsUserEntityResponseCollectionModel.base"
import { UsersPermissionsUserRelationResponseCollectionModel, UsersPermissionsUserRelationResponseCollectionModelType } from "./UsersPermissionsUserRelationResponseCollectionModel"
import { usersPermissionsUserRelationResponseCollectionModelPrimitives, UsersPermissionsUserRelationResponseCollectionModelSelector } from "./UsersPermissionsUserRelationResponseCollectionModel.base"
import { CategoryModel, CategoryModelType } from "./CategoryModel"
import { categoryModelPrimitives, CategoryModelSelector } from "./CategoryModel.base"
import { CategoryEntityModel, CategoryEntityModelType } from "./CategoryEntityModel"
import { categoryEntityModelPrimitives, CategoryEntityModelSelector } from "./CategoryEntityModel.base"
import { CategoryEntityResponseModel, CategoryEntityResponseModelType } from "./CategoryEntityResponseModel"
import { categoryEntityResponseModelPrimitives, CategoryEntityResponseModelSelector } from "./CategoryEntityResponseModel.base"
import { CategoryEntityResponseCollectionModel, CategoryEntityResponseCollectionModelType } from "./CategoryEntityResponseCollectionModel"
import { categoryEntityResponseCollectionModelPrimitives, CategoryEntityResponseCollectionModelSelector } from "./CategoryEntityResponseCollectionModel.base"
import { CategoryRelationResponseCollectionModel, CategoryRelationResponseCollectionModelType } from "./CategoryRelationResponseCollectionModel"
import { categoryRelationResponseCollectionModelPrimitives, CategoryRelationResponseCollectionModelSelector } from "./CategoryRelationResponseCollectionModel.base"
import { CollectionModel, CollectionModelType } from "./CollectionModel"
import { collectionModelPrimitives, CollectionModelSelector } from "./CollectionModel.base"
import { CollectionEntityModel, CollectionEntityModelType } from "./CollectionEntityModel"
import { collectionEntityModelPrimitives, CollectionEntityModelSelector } from "./CollectionEntityModel.base"
import { CollectionEntityResponseModel, CollectionEntityResponseModelType } from "./CollectionEntityResponseModel"
import { collectionEntityResponseModelPrimitives, CollectionEntityResponseModelSelector } from "./CollectionEntityResponseModel.base"
import { CollectionEntityResponseCollectionModel, CollectionEntityResponseCollectionModelType } from "./CollectionEntityResponseCollectionModel"
import { collectionEntityResponseCollectionModelPrimitives, CollectionEntityResponseCollectionModelSelector } from "./CollectionEntityResponseCollectionModel.base"
import { GlobalModel, GlobalModelType } from "./GlobalModel"
import { globalModelPrimitives, GlobalModelSelector } from "./GlobalModel.base"
import { GlobalEntityModel, GlobalEntityModelType } from "./GlobalEntityModel"
import { globalEntityModelPrimitives, GlobalEntityModelSelector } from "./GlobalEntityModel.base"
import { GlobalEntityResponseModel, GlobalEntityResponseModelType } from "./GlobalEntityResponseModel"
import { globalEntityResponseModelPrimitives, GlobalEntityResponseModelSelector } from "./GlobalEntityResponseModel.base"
import { GlobalRelationResponseCollectionModel, GlobalRelationResponseCollectionModelType } from "./GlobalRelationResponseCollectionModel"
import { globalRelationResponseCollectionModelPrimitives, GlobalRelationResponseCollectionModelSelector } from "./GlobalRelationResponseCollectionModel.base"
import { LeadFormSubmissionModel, LeadFormSubmissionModelType } from "./LeadFormSubmissionModel"
import { leadFormSubmissionModelPrimitives, LeadFormSubmissionModelSelector } from "./LeadFormSubmissionModel.base"
import { LeadFormSubmissionEntityModel, LeadFormSubmissionEntityModelType } from "./LeadFormSubmissionEntityModel"
import { leadFormSubmissionEntityModelPrimitives, LeadFormSubmissionEntityModelSelector } from "./LeadFormSubmissionEntityModel.base"
import { LeadFormSubmissionEntityResponseModel, LeadFormSubmissionEntityResponseModelType } from "./LeadFormSubmissionEntityResponseModel"
import { leadFormSubmissionEntityResponseModelPrimitives, LeadFormSubmissionEntityResponseModelSelector } from "./LeadFormSubmissionEntityResponseModel.base"
import { LeadFormSubmissionEntityResponseCollectionModel, LeadFormSubmissionEntityResponseCollectionModelType } from "./LeadFormSubmissionEntityResponseCollectionModel"
import { leadFormSubmissionEntityResponseCollectionModelPrimitives, LeadFormSubmissionEntityResponseCollectionModelSelector } from "./LeadFormSubmissionEntityResponseCollectionModel.base"
import { PageModel, PageModelType } from "./PageModel"
import { pageModelPrimitives, PageModelSelector } from "./PageModel.base"
import { PageEntityModel, PageEntityModelType } from "./PageEntityModel"
import { pageEntityModelPrimitives, PageEntityModelSelector } from "./PageEntityModel.base"
import { PageEntityResponseModel, PageEntityResponseModelType } from "./PageEntityResponseModel"
import { pageEntityResponseModelPrimitives, PageEntityResponseModelSelector } from "./PageEntityResponseModel.base"
import { PageEntityResponseCollectionModel, PageEntityResponseCollectionModelType } from "./PageEntityResponseCollectionModel"
import { pageEntityResponseCollectionModelPrimitives, PageEntityResponseCollectionModelSelector } from "./PageEntityResponseCollectionModel.base"
import { PageRelationResponseCollectionModel, PageRelationResponseCollectionModelType } from "./PageRelationResponseCollectionModel"
import { pageRelationResponseCollectionModelPrimitives, PageRelationResponseCollectionModelSelector } from "./PageRelationResponseCollectionModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { productModelPrimitives, ProductModelSelector } from "./ProductModel.base"
import { ProductEntityModel, ProductEntityModelType } from "./ProductEntityModel"
import { productEntityModelPrimitives, ProductEntityModelSelector } from "./ProductEntityModel.base"
import { ProductEntityResponseModel, ProductEntityResponseModelType } from "./ProductEntityResponseModel"
import { productEntityResponseModelPrimitives, ProductEntityResponseModelSelector } from "./ProductEntityResponseModel.base"
import { ProductEntityResponseCollectionModel, ProductEntityResponseCollectionModelType } from "./ProductEntityResponseCollectionModel"
import { productEntityResponseCollectionModelPrimitives, ProductEntityResponseCollectionModelSelector } from "./ProductEntityResponseCollectionModel.base"
import { ProductRelationResponseCollectionModel, ProductRelationResponseCollectionModelType } from "./ProductRelationResponseCollectionModel"
import { productRelationResponseCollectionModelPrimitives, ProductRelationResponseCollectionModelSelector } from "./ProductRelationResponseCollectionModel.base"
import { UsersPermissionsMeModel, UsersPermissionsMeModelType } from "./UsersPermissionsMeModel"
import { usersPermissionsMeModelPrimitives, UsersPermissionsMeModelSelector } from "./UsersPermissionsMeModel.base"
import { UsersPermissionsMeRoleModel, UsersPermissionsMeRoleModelType } from "./UsersPermissionsMeRoleModel"
import { usersPermissionsMeRoleModelPrimitives, UsersPermissionsMeRoleModelSelector } from "./UsersPermissionsMeRoleModel.base"
import { UsersPermissionsPasswordPayloadModel, UsersPermissionsPasswordPayloadModelType } from "./UsersPermissionsPasswordPayloadModel"
import { usersPermissionsPasswordPayloadModelPrimitives, UsersPermissionsPasswordPayloadModelSelector } from "./UsersPermissionsPasswordPayloadModel.base"
import { UsersPermissionsLoginPayloadModel, UsersPermissionsLoginPayloadModelType } from "./UsersPermissionsLoginPayloadModel"
import { usersPermissionsLoginPayloadModelPrimitives, UsersPermissionsLoginPayloadModelSelector } from "./UsersPermissionsLoginPayloadModel.base"
import { UsersPermissionsCreateRolePayloadModel, UsersPermissionsCreateRolePayloadModelType } from "./UsersPermissionsCreateRolePayloadModel"
import { usersPermissionsCreateRolePayloadModelPrimitives, UsersPermissionsCreateRolePayloadModelSelector } from "./UsersPermissionsCreateRolePayloadModel.base"
import { UsersPermissionsUpdateRolePayloadModel, UsersPermissionsUpdateRolePayloadModelType } from "./UsersPermissionsUpdateRolePayloadModel"
import { usersPermissionsUpdateRolePayloadModelPrimitives, UsersPermissionsUpdateRolePayloadModelSelector } from "./UsersPermissionsUpdateRolePayloadModel.base"
import { UsersPermissionsDeleteRolePayloadModel, UsersPermissionsDeleteRolePayloadModelType } from "./UsersPermissionsDeleteRolePayloadModel"
import { usersPermissionsDeleteRolePayloadModelPrimitives, UsersPermissionsDeleteRolePayloadModelSelector } from "./UsersPermissionsDeleteRolePayloadModel.base"

import { pageContentSectionsDynamicZoneModelPrimitives, PageContentSectionsDynamicZoneModelSelector , PageContentSectionsDynamicZoneUnion } from "."
import { genericMorphModelPrimitives, GenericMorphModelSelector , GenericMorphUnion } from "."

import { PublicationState } from "./PublicationStateEnum"
import { EnumComponentelementsnotificationbannerType } from "./EnumComponentelementsnotificationbannerTypeEnum"
import { EnumComponentlinksbuttonlinkType } from "./EnumComponentlinksbuttonlinkTypeEnum"
import { EnumComponentlinksbuttonType } from "./EnumComponentlinksbuttonTypeEnum"
import { EnumComponentmetametadataTwittercardtype } from "./EnumComponentmetametadataTwittercardtypeEnum"
import { EnumComponentsharedmetasocialSocialnetwork } from "./EnumComponentsharedmetasocialSocialnetworkEnum"
import { EnumLeadformsubmissionStatus } from "./EnumLeadformsubmissionStatusEnum"

export type IdFilterInput = {
  and?: string[]
  or?: string[]
  not?: IdFilterInput
  eq?: string
  ne?: string
  startsWith?: string
  endsWith?: string
  contains?: string
  notContains?: string
  containsi?: string
  notContainsi?: string
  gt?: string
  gte?: string
  lt?: string
  lte?: string
  null?: boolean
  notNull?: boolean
  in?: string[]
  notIn?: string[]
  between?: string[]
}
export type BooleanFilterInput = {
  and?: boolean[]
  or?: boolean[]
  not?: BooleanFilterInput
  eq?: boolean
  ne?: boolean
  startsWith?: boolean
  endsWith?: boolean
  contains?: boolean
  notContains?: boolean
  containsi?: boolean
  notContainsi?: boolean
  gt?: boolean
  gte?: boolean
  lt?: boolean
  lte?: boolean
  null?: boolean
  notNull?: boolean
  in?: boolean[]
  notIn?: boolean[]
  between?: boolean[]
}
export type StringFilterInput = {
  and?: string[]
  or?: string[]
  not?: StringFilterInput
  eq?: string
  ne?: string
  startsWith?: string
  endsWith?: string
  contains?: string
  notContains?: string
  containsi?: string
  notContainsi?: string
  gt?: string
  gte?: string
  lt?: string
  lte?: string
  null?: boolean
  notNull?: boolean
  in?: string[]
  notIn?: string[]
  between?: string[]
}
export type IntFilterInput = {
  and?: number[]
  or?: number[]
  not?: IntFilterInput
  eq?: number
  ne?: number
  startsWith?: number
  endsWith?: number
  contains?: number
  notContains?: number
  containsi?: number
  notContainsi?: number
  gt?: number
  gte?: number
  lt?: number
  lte?: number
  null?: boolean
  notNull?: boolean
  in?: number[]
  notIn?: number[]
  between?: number[]
}
export type FloatFilterInput = {
  and?: number[]
  or?: number[]
  not?: FloatFilterInput
  eq?: number
  ne?: number
  startsWith?: number
  endsWith?: number
  contains?: number
  notContains?: number
  containsi?: number
  notContainsi?: number
  gt?: number
  gte?: number
  lt?: number
  lte?: number
  null?: boolean
  notNull?: boolean
  in?: number[]
  notIn?: number[]
  between?: number[]
}
export type DateTimeFilterInput = {
  and?: any[]
  or?: any[]
  not?: DateTimeFilterInput
  eq?: any
  ne?: any
  startsWith?: any
  endsWith?: any
  contains?: any
  notContains?: any
  containsi?: any
  notContainsi?: any
  gt?: any
  gte?: any
  lt?: any
  lte?: any
  null?: boolean
  notNull?: boolean
  in?: any[]
  notIn?: any[]
  between?: any[]
}
export type JsonFilterInput = {
  and?: any[]
  or?: any[]
  not?: JsonFilterInput
  eq?: any
  ne?: any
  startsWith?: any
  endsWith?: any
  contains?: any
  notContains?: any
  containsi?: any
  notContainsi?: any
  gt?: any
  gte?: any
  lt?: any
  lte?: any
  null?: boolean
  notNull?: boolean
  in?: any[]
  notIn?: any[]
  between?: any[]
}
export type ComponentElementsFeatureColumnFiltersInput = {
  title?: StringFilterInput
  description?: StringFilterInput
  and?: ComponentElementsFeatureColumnFiltersInput[]
  or?: ComponentElementsFeatureColumnFiltersInput[]
  not?: ComponentElementsFeatureColumnFiltersInput
}
export type ComponentElementsFeatureRowFiltersInput = {
  title?: StringFilterInput
  description?: StringFilterInput
  and?: ComponentElementsFeatureRowFiltersInput[]
  or?: ComponentElementsFeatureRowFiltersInput[]
  not?: ComponentElementsFeatureRowFiltersInput
}
export type ComponentElementsFeatureFiltersInput = {
  name?: StringFilterInput
  and?: ComponentElementsFeatureFiltersInput[]
  or?: ComponentElementsFeatureFiltersInput[]
  not?: ComponentElementsFeatureFiltersInput
}
export type ComponentElementsFeatureInput = {
  id?: string
  name?: string
}
export type ComponentElementsFooterSectionFiltersInput = {
  title?: StringFilterInput
  and?: ComponentElementsFooterSectionFiltersInput[]
  or?: ComponentElementsFooterSectionFiltersInput[]
  not?: ComponentElementsFooterSectionFiltersInput
}
export type ComponentElementsFooterSectionInput = {
  id?: string
  title?: string
  links?: ComponentLinksLinkInput[]
}
export type ComponentElementsLogosFiltersInput = {
  title?: StringFilterInput
  and?: ComponentElementsLogosFiltersInput[]
  or?: ComponentElementsLogosFiltersInput[]
  not?: ComponentElementsLogosFiltersInput
}
export type ComponentElementsNotificationBannerInput = {
  id?: string
  text?: string
  type?: EnumComponentelementsnotificationbannerType
}
export type ComponentElementsPlanFiltersInput = {
  name?: StringFilterInput
  description?: StringFilterInput
  isRecommended?: BooleanFilterInput
  price?: FloatFilterInput
  pricePeriod?: StringFilterInput
  and?: ComponentElementsPlanFiltersInput[]
  or?: ComponentElementsPlanFiltersInput[]
  not?: ComponentElementsPlanFiltersInput
}
export type ComponentElementsTestimonialFiltersInput = {
  text?: StringFilterInput
  authorName?: StringFilterInput
  authorTitle?: StringFilterInput
  link?: StringFilterInput
  and?: ComponentElementsTestimonialFiltersInput[]
  or?: ComponentElementsTestimonialFiltersInput[]
  not?: ComponentElementsTestimonialFiltersInput
}
export type ComponentLayoutFooterInput = {
  id?: string
  logo?: string
  columns?: ComponentElementsFooterSectionInput[]
  smallText?: string
}
export type ComponentLayoutNavbarInput = {
  id?: string
  links?: ComponentLinksLinkInput[]
  button?: ComponentLinksButtonLinkInput
  logo?: string
}
export type ComponentLinksButtonLinkFiltersInput = {
  url?: StringFilterInput
  newTab?: BooleanFilterInput
  text?: StringFilterInput
  type?: StringFilterInput
  and?: ComponentLinksButtonLinkFiltersInput[]
  or?: ComponentLinksButtonLinkFiltersInput[]
  not?: ComponentLinksButtonLinkFiltersInput
}
export type ComponentLinksButtonLinkInput = {
  id?: string
  url?: string
  newTab?: boolean
  text?: string
  type?: EnumComponentlinksbuttonlinkType
}
export type ComponentLinksLinkFiltersInput = {
  url?: StringFilterInput
  newTab?: BooleanFilterInput
  text?: StringFilterInput
  and?: ComponentLinksLinkFiltersInput[]
  or?: ComponentLinksLinkFiltersInput[]
  not?: ComponentLinksLinkFiltersInput
}
export type ComponentLinksLinkInput = {
  id?: string
  url?: string
  newTab?: boolean
  text?: string
}
export type ComponentMetaMetadataInput = {
  id?: string
  metaTitle?: string
  metaDescription?: string
  shareImage?: string
  twitterCardType?: EnumComponentmetametadataTwittercardtype
  twitterUsername?: string
}
export type ComponentSharedMetaSocialFiltersInput = {
  socialNetwork?: StringFilterInput
  title?: StringFilterInput
  description?: StringFilterInput
  and?: ComponentSharedMetaSocialFiltersInput[]
  or?: ComponentSharedMetaSocialFiltersInput[]
  not?: ComponentSharedMetaSocialFiltersInput
}
export type UploadFileFiltersInput = {
  id?: IdFilterInput
  name?: StringFilterInput
  alternativeText?: StringFilterInput
  caption?: StringFilterInput
  width?: IntFilterInput
  height?: IntFilterInput
  formats?: JsonFilterInput
  hash?: StringFilterInput
  ext?: StringFilterInput
  mime?: StringFilterInput
  size?: FloatFilterInput
  url?: StringFilterInput
  previewUrl?: StringFilterInput
  provider?: StringFilterInput
  provider_metadata?: JsonFilterInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  and?: UploadFileFiltersInput[]
  or?: UploadFileFiltersInput[]
  not?: UploadFileFiltersInput
}
export type UploadFileInput = {
  name?: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  formats?: any
  hash?: string
  ext?: string
  mime?: string
  size?: number
  url?: string
  previewUrl?: string
  provider?: string
  provider_metadata?: any
}
export type I18NLocaleFiltersInput = {
  id?: IdFilterInput
  name?: StringFilterInput
  code?: StringFilterInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  and?: I18NLocaleFiltersInput[]
  or?: I18NLocaleFiltersInput[]
  not?: I18NLocaleFiltersInput
}
export type UsersPermissionsPermissionFiltersInput = {
  id?: IdFilterInput
  action?: StringFilterInput
  role?: UsersPermissionsRoleFiltersInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  and?: UsersPermissionsPermissionFiltersInput[]
  or?: UsersPermissionsPermissionFiltersInput[]
  not?: UsersPermissionsPermissionFiltersInput
}
export type UsersPermissionsRoleFiltersInput = {
  id?: IdFilterInput
  name?: StringFilterInput
  description?: StringFilterInput
  type?: StringFilterInput
  permissions?: UsersPermissionsPermissionFiltersInput
  users?: UsersPermissionsUserFiltersInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  and?: UsersPermissionsRoleFiltersInput[]
  or?: UsersPermissionsRoleFiltersInput[]
  not?: UsersPermissionsRoleFiltersInput
}
export type UsersPermissionsRoleInput = {
  name?: string
  description?: string
  type?: string
  permissions?: string[]
  users?: string[]
}
export type UsersPermissionsUserFiltersInput = {
  id?: IdFilterInput
  username?: StringFilterInput
  email?: StringFilterInput
  provider?: StringFilterInput
  password?: StringFilterInput
  resetPasswordToken?: StringFilterInput
  confirmationToken?: StringFilterInput
  confirmed?: BooleanFilterInput
  blocked?: BooleanFilterInput
  role?: UsersPermissionsRoleFiltersInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  and?: UsersPermissionsUserFiltersInput[]
  or?: UsersPermissionsUserFiltersInput[]
  not?: UsersPermissionsUserFiltersInput
}
export type UsersPermissionsUserInput = {
  username?: string
  email?: string
  provider?: string
  password?: string
  resetPasswordToken?: string
  confirmationToken?: string
  confirmed?: boolean
  blocked?: boolean
  role?: string
}
export type CategoryFiltersInput = {
  id?: IdFilterInput
  name?: StringFilterInput
  slug?: StringFilterInput
  products?: ProductFiltersInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  publishedAt?: DateTimeFilterInput
  and?: CategoryFiltersInput[]
  or?: CategoryFiltersInput[]
  not?: CategoryFiltersInput
}
export type CategoryInput = {
  name?: string
  slug?: string
  categoryImage?: string
  products?: string[]
  categoryMetadata?: ComponentMetaMetadataInput
  publishedAt?: any
}
export type CollectionFiltersInput = {
  id?: IdFilterInput
  name?: StringFilterInput
  slug?: StringFilterInput
  description?: StringFilterInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  publishedAt?: DateTimeFilterInput
  and?: CollectionFiltersInput[]
  or?: CollectionFiltersInput[]
  not?: CollectionFiltersInput
}
export type CollectionInput = {
  name?: string
  slug?: string
  description?: string
  backgroundImage?: string
  collectionMetadata?: ComponentMetaMetadataInput
  publishedAt?: any
}
export type GlobalInput = {
  metadata?: ComponentMetaMetadataInput
  metaTitleSuffix?: string
  favicon?: string
  notificationBanner?: ComponentElementsNotificationBannerInput
  navbar?: ComponentLayoutNavbarInput
  footer?: ComponentLayoutFooterInput
}
export type LeadFormSubmissionFiltersInput = {
  id?: IdFilterInput
  email?: StringFilterInput
  status?: StringFilterInput
  location?: StringFilterInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  and?: LeadFormSubmissionFiltersInput[]
  or?: LeadFormSubmissionFiltersInput[]
  not?: LeadFormSubmissionFiltersInput
}
export type LeadFormSubmissionInput = {
  email?: string
  status?: EnumLeadformsubmissionStatus
  location?: string
}
export type PageFiltersInput = {
  id?: IdFilterInput
  shortName?: StringFilterInput
  slug?: StringFilterInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  publishedAt?: DateTimeFilterInput
  localizations?: PageFiltersInput
  locale?: StringFilterInput
  and?: PageFiltersInput[]
  or?: PageFiltersInput[]
  not?: PageFiltersInput
}
export type PageInput = {
  shortName?: string
  metadata?: ComponentMetaMetadataInput
  contentSections?: any[]
  slug?: string
  publishedAt?: any
}
export type ProductFiltersInput = {
  id?: IdFilterInput
  name?: StringFilterInput
  slug?: StringFilterInput
  description?: StringFilterInput
  price?: FloatFilterInput
  categories?: CategoryFiltersInput
  createdAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  publishedAt?: DateTimeFilterInput
  and?: ProductFiltersInput[]
  or?: ProductFiltersInput[]
  not?: ProductFiltersInput
}
export type ProductInput = {
  name?: string
  slug?: string
  description?: string
  price?: number
  productimage?: string
  feature?: ComponentElementsFeatureInput[]
  categories?: string[]
  featuredImages?: string[]
  publishedAt?: any
}
export type FileInfoInput = {
  name?: string
  alternativeText?: string
  caption?: string
}
export type UsersPermissionsRegisterInput = {
  username: string
  email: string
  password: string
}
export type UsersPermissionsLoginInput = {
  identifier: string
  password: string
  provider: string
}
export type PaginationArg = {
  page?: number
  pageSize?: number
  start?: number
  limit?: number
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  componentElementsFeatureColumns: ObservableMap<string, ComponentElementsFeatureColumnModelType>,
  componentElementsFeatureRows: ObservableMap<string, ComponentElementsFeatureRowModelType>,
  componentElementsFeatures: ObservableMap<string, ComponentElementsFeatureModelType>,
  componentElementsFooterSections: ObservableMap<string, ComponentElementsFooterSectionModelType>,
  componentElementsLogos: ObservableMap<string, ComponentElementsLogosModelType>,
  componentElementsNotificationBanners: ObservableMap<string, ComponentElementsNotificationBannerModelType>,
  componentElementsPlans: ObservableMap<string, ComponentElementsPlanModelType>,
  componentElementsProductTiles: ObservableMap<string, ComponentElementsProductTileModelType>,
  componentElementsTestimonials: ObservableMap<string, ComponentElementsTestimonialModelType>,
  componentLayoutFooters: ObservableMap<string, ComponentLayoutFooterModelType>,
  componentLayoutNavbars: ObservableMap<string, ComponentLayoutNavbarModelType>,
  componentLinksButtonLinks: ObservableMap<string, ComponentLinksButtonLinkModelType>,
  componentLinksButtons: ObservableMap<string, ComponentLinksButtonModelType>,
  componentLinksLinks: ObservableMap<string, ComponentLinksLinkModelType>,
  componentMetaMetadata: ObservableMap<string, ComponentMetaMetadataModelType>,
  componentSectionsBottomActions: ObservableMap<string, ComponentSectionsBottomActionsModelType>,
  componentSectionsFeatureColumnsGroups: ObservableMap<string, ComponentSectionsFeatureColumnsGroupModelType>,
  componentSectionsFeatureRowsGroups: ObservableMap<string, ComponentSectionsFeatureRowsGroupModelType>,
  componentSectionsHeroes: ObservableMap<string, ComponentSectionsHeroModelType>,
  componentSectionsLargeVideos: ObservableMap<string, ComponentSectionsLargeVideoModelType>,
  componentSectionsLeadForms: ObservableMap<string, ComponentSectionsLeadFormModelType>,
  componentSectionsPricings: ObservableMap<string, ComponentSectionsPricingModelType>,
  componentSectionsRichTexts: ObservableMap<string, ComponentSectionsRichTextModelType>,
  componentSectionsTestimonialsGroups: ObservableMap<string, ComponentSectionsTestimonialsGroupModelType>,
  componentSharedMetaSocials: ObservableMap<string, ComponentSharedMetaSocialModelType>,
  componentSharedSeos: ObservableMap<string, ComponentSharedSeoModelType>,
  uploadFileEntities: ObservableMap<string, UploadFileEntityModelType>,
  i18NLocaleEntities: ObservableMap<string, I18NLocaleEntityModelType>,
  usersPermissionsPermissionEntities: ObservableMap<string, UsersPermissionsPermissionEntityModelType>,
  usersPermissionsRoleEntities: ObservableMap<string, UsersPermissionsRoleEntityModelType>,
  usersPermissionsUserEntities: ObservableMap<string, UsersPermissionsUserEntityModelType>,
  categoryEntities: ObservableMap<string, CategoryEntityModelType>,
  collectionEntities: ObservableMap<string, CollectionEntityModelType>,
  globalEntities: ObservableMap<string, GlobalEntityModelType>,
  leadFormSubmissionEntities: ObservableMap<string, LeadFormSubmissionEntityModelType>,
  pageEntities: ObservableMap<string, PageEntityModelType>,
  productEntities: ObservableMap<string, ProductEntityModelType>,
  usersPermissionsUs: ObservableMap<string, UsersPermissionsMeModelType>,
  usersPermissionsMeRoles: ObservableMap<string, UsersPermissionsMeRoleModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryUploadFile="queryUploadFile",
queryUploadFiles="queryUploadFiles",
queryI18NLocale="queryI18NLocale",
queryI18NLocales="queryI18NLocales",
queryUsersPermissionsRole="queryUsersPermissionsRole",
queryUsersPermissionsRoles="queryUsersPermissionsRoles",
queryUsersPermissionsUser="queryUsersPermissionsUser",
queryUsersPermissionsUsers="queryUsersPermissionsUsers",
queryCategory="queryCategory",
queryCategories="queryCategories",
queryCollection="queryCollection",
queryCollections="queryCollections",
queryGlobal="queryGlobal",
queryLeadFormSubmission="queryLeadFormSubmission",
queryLeadFormSubmissions="queryLeadFormSubmissions",
queryPage="queryPage",
queryPages="queryPages",
queryProduct="queryProduct",
queryProducts="queryProducts",
queryMe="queryMe"
}
export enum RootStoreBaseMutations {
mutateCreateUploadFile="mutateCreateUploadFile",
mutateUpdateUploadFile="mutateUpdateUploadFile",
mutateDeleteUploadFile="mutateDeleteUploadFile",
mutateCreateCategory="mutateCreateCategory",
mutateUpdateCategory="mutateUpdateCategory",
mutateDeleteCategory="mutateDeleteCategory",
mutateCreateCollection="mutateCreateCollection",
mutateUpdateCollection="mutateUpdateCollection",
mutateDeleteCollection="mutateDeleteCollection",
mutateUpdateGlobal="mutateUpdateGlobal",
mutateDeleteGlobal="mutateDeleteGlobal",
mutateCreateLeadFormSubmission="mutateCreateLeadFormSubmission",
mutateUpdateLeadFormSubmission="mutateUpdateLeadFormSubmission",
mutateDeleteLeadFormSubmission="mutateDeleteLeadFormSubmission",
mutateCreatePage="mutateCreatePage",
mutateUpdatePage="mutateUpdatePage",
mutateDeletePage="mutateDeletePage",
mutateCreateProduct="mutateCreateProduct",
mutateUpdateProduct="mutateUpdateProduct",
mutateDeleteProduct="mutateDeleteProduct",
mutateUpload="mutateUpload",
mutateMultipleUpload="mutateMultipleUpload",
mutateUpdateFileInfo="mutateUpdateFileInfo",
mutateRemoveFile="mutateRemoveFile",
mutateCreateGlobalLocalization="mutateCreateGlobalLocalization",
mutateCreatePageLocalization="mutateCreatePageLocalization",
mutateCreateUsersPermissionsRole="mutateCreateUsersPermissionsRole",
mutateUpdateUsersPermissionsRole="mutateUpdateUsersPermissionsRole",
mutateDeleteUsersPermissionsRole="mutateDeleteUsersPermissionsRole",
mutateCreateUsersPermissionsUser="mutateCreateUsersPermissionsUser",
mutateUpdateUsersPermissionsUser="mutateUpdateUsersPermissionsUser",
mutateDeleteUsersPermissionsUser="mutateDeleteUsersPermissionsUser",
mutateLogin="mutateLogin",
mutateRegister="mutateRegister",
mutateForgotPassword="mutateForgotPassword",
mutateResetPassword="mutateResetPassword",
mutateEmailConfirmation="mutateEmailConfirmation"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Error', () => ErrorModel], ['Pagination', () => PaginationModel], ['ResponseCollectionMeta', () => ResponseCollectionMetaModel], ['ComponentElementsFeatureColumn', () => ComponentElementsFeatureColumnModel], ['ComponentElementsFeatureRow', () => ComponentElementsFeatureRowModel], ['ComponentElementsFeature', () => ComponentElementsFeatureModel], ['ComponentElementsFooterSection', () => ComponentElementsFooterSectionModel], ['ComponentElementsLogos', () => ComponentElementsLogosModel], ['ComponentElementsNotificationBanner', () => ComponentElementsNotificationBannerModel], ['ComponentElementsPlan', () => ComponentElementsPlanModel], ['ComponentElementsProductTile', () => ComponentElementsProductTileModel], ['ComponentElementsTestimonial', () => ComponentElementsTestimonialModel], ['ComponentLayoutFooter', () => ComponentLayoutFooterModel], ['ComponentLayoutNavbar', () => ComponentLayoutNavbarModel], ['ComponentLinksButtonLink', () => ComponentLinksButtonLinkModel], ['ComponentLinksButton', () => ComponentLinksButtonModel], ['ComponentLinksLink', () => ComponentLinksLinkModel], ['ComponentMetaMetadata', () => ComponentMetaMetadataModel], ['ComponentSectionsBottomActions', () => ComponentSectionsBottomActionsModel], ['ComponentSectionsFeatureColumnsGroup', () => ComponentSectionsFeatureColumnsGroupModel], ['ComponentSectionsFeatureRowsGroup', () => ComponentSectionsFeatureRowsGroupModel], ['ComponentSectionsHero', () => ComponentSectionsHeroModel], ['ComponentSectionsLargeVideo', () => ComponentSectionsLargeVideoModel], ['ComponentSectionsLeadForm', () => ComponentSectionsLeadFormModel], ['ComponentSectionsPricing', () => ComponentSectionsPricingModel], ['ComponentSectionsRichText', () => ComponentSectionsRichTextModel], ['ComponentSectionsTestimonialsGroup', () => ComponentSectionsTestimonialsGroupModel], ['ComponentSharedMetaSocial', () => ComponentSharedMetaSocialModel], ['ComponentSharedSeo', () => ComponentSharedSeoModel], ['UploadFile', () => UploadFileModel], ['UploadFileEntity', () => UploadFileEntityModel], ['UploadFileEntityResponse', () => UploadFileEntityResponseModel], ['UploadFileEntityResponseCollection', () => UploadFileEntityResponseCollectionModel], ['UploadFileRelationResponseCollection', () => UploadFileRelationResponseCollectionModel], ['I18NLocale', () => I18NLocaleModel], ['I18NLocaleEntity', () => I18NLocaleEntityModel], ['I18NLocaleEntityResponse', () => I18NLocaleEntityResponseModel], ['I18NLocaleEntityResponseCollection', () => I18NLocaleEntityResponseCollectionModel], ['UsersPermissionsPermission', () => UsersPermissionsPermissionModel], ['UsersPermissionsPermissionEntity', () => UsersPermissionsPermissionEntityModel], ['UsersPermissionsPermissionRelationResponseCollection', () => UsersPermissionsPermissionRelationResponseCollectionModel], ['UsersPermissionsRole', () => UsersPermissionsRoleModel], ['UsersPermissionsRoleEntity', () => UsersPermissionsRoleEntityModel], ['UsersPermissionsRoleEntityResponse', () => UsersPermissionsRoleEntityResponseModel], ['UsersPermissionsRoleEntityResponseCollection', () => UsersPermissionsRoleEntityResponseCollectionModel], ['UsersPermissionsUser', () => UsersPermissionsUserModel], ['UsersPermissionsUserEntity', () => UsersPermissionsUserEntityModel], ['UsersPermissionsUserEntityResponse', () => UsersPermissionsUserEntityResponseModel], ['UsersPermissionsUserEntityResponseCollection', () => UsersPermissionsUserEntityResponseCollectionModel], ['UsersPermissionsUserRelationResponseCollection', () => UsersPermissionsUserRelationResponseCollectionModel], ['Category', () => CategoryModel], ['CategoryEntity', () => CategoryEntityModel], ['CategoryEntityResponse', () => CategoryEntityResponseModel], ['CategoryEntityResponseCollection', () => CategoryEntityResponseCollectionModel], ['CategoryRelationResponseCollection', () => CategoryRelationResponseCollectionModel], ['Collection', () => CollectionModel], ['CollectionEntity', () => CollectionEntityModel], ['CollectionEntityResponse', () => CollectionEntityResponseModel], ['CollectionEntityResponseCollection', () => CollectionEntityResponseCollectionModel], ['Global', () => GlobalModel], ['GlobalEntity', () => GlobalEntityModel], ['GlobalEntityResponse', () => GlobalEntityResponseModel], ['GlobalRelationResponseCollection', () => GlobalRelationResponseCollectionModel], ['LeadFormSubmission', () => LeadFormSubmissionModel], ['LeadFormSubmissionEntity', () => LeadFormSubmissionEntityModel], ['LeadFormSubmissionEntityResponse', () => LeadFormSubmissionEntityResponseModel], ['LeadFormSubmissionEntityResponseCollection', () => LeadFormSubmissionEntityResponseCollectionModel], ['Page', () => PageModel], ['PageEntity', () => PageEntityModel], ['PageEntityResponse', () => PageEntityResponseModel], ['PageEntityResponseCollection', () => PageEntityResponseCollectionModel], ['PageRelationResponseCollection', () => PageRelationResponseCollectionModel], ['Product', () => ProductModel], ['ProductEntity', () => ProductEntityModel], ['ProductEntityResponse', () => ProductEntityResponseModel], ['ProductEntityResponseCollection', () => ProductEntityResponseCollectionModel], ['ProductRelationResponseCollection', () => ProductRelationResponseCollectionModel], ['UsersPermissionsMe', () => UsersPermissionsMeModel], ['UsersPermissionsMeRole', () => UsersPermissionsMeRoleModel], ['UsersPermissionsPasswordPayload', () => UsersPermissionsPasswordPayloadModel], ['UsersPermissionsLoginPayload', () => UsersPermissionsLoginPayloadModel], ['UsersPermissionsCreateRolePayload', () => UsersPermissionsCreateRolePayloadModel], ['UsersPermissionsUpdateRolePayload', () => UsersPermissionsUpdateRolePayloadModel], ['UsersPermissionsDeleteRolePayload', () => UsersPermissionsDeleteRolePayloadModel]], ['ComponentElementsFeatureColumn', 'ComponentElementsFeatureRow', 'ComponentElementsFeature', 'ComponentElementsFooterSection', 'ComponentElementsLogos', 'ComponentElementsNotificationBanner', 'ComponentElementsPlan', 'ComponentElementsProductTile', 'ComponentElementsTestimonial', 'ComponentLayoutFooter', 'ComponentLayoutNavbar', 'ComponentLinksButtonLink', 'ComponentLinksButton', 'ComponentLinksLink', 'ComponentMetaMetadata', 'ComponentSectionsBottomActions', 'ComponentSectionsFeatureColumnsGroup', 'ComponentSectionsFeatureRowsGroup', 'ComponentSectionsHero', 'ComponentSectionsLargeVideo', 'ComponentSectionsLeadForm', 'ComponentSectionsPricing', 'ComponentSectionsRichText', 'ComponentSectionsTestimonialsGroup', 'ComponentSharedMetaSocial', 'ComponentSharedSeo', 'UploadFileEntity', 'I18NLocaleEntity', 'UsersPermissionsPermissionEntity', 'UsersPermissionsRoleEntity', 'UsersPermissionsUserEntity', 'CategoryEntity', 'CollectionEntity', 'GlobalEntity', 'LeadFormSubmissionEntity', 'PageEntity', 'ProductEntity', 'UsersPermissionsMe', 'UsersPermissionsMeRole'], "js"))
  .props({
    componentElementsFeatureColumns: types.optional(types.map(types.late((): any => ComponentElementsFeatureColumnModel)), {}),
    componentElementsFeatureRows: types.optional(types.map(types.late((): any => ComponentElementsFeatureRowModel)), {}),
    componentElementsFeatures: types.optional(types.map(types.late((): any => ComponentElementsFeatureModel)), {}),
    componentElementsFooterSections: types.optional(types.map(types.late((): any => ComponentElementsFooterSectionModel)), {}),
    componentElementsLogos: types.optional(types.map(types.late((): any => ComponentElementsLogosModel)), {}),
    componentElementsNotificationBanners: types.optional(types.map(types.late((): any => ComponentElementsNotificationBannerModel)), {}),
    componentElementsPlans: types.optional(types.map(types.late((): any => ComponentElementsPlanModel)), {}),
    componentElementsProductTiles: types.optional(types.map(types.late((): any => ComponentElementsProductTileModel)), {}),
    componentElementsTestimonials: types.optional(types.map(types.late((): any => ComponentElementsTestimonialModel)), {}),
    componentLayoutFooters: types.optional(types.map(types.late((): any => ComponentLayoutFooterModel)), {}),
    componentLayoutNavbars: types.optional(types.map(types.late((): any => ComponentLayoutNavbarModel)), {}),
    componentLinksButtonLinks: types.optional(types.map(types.late((): any => ComponentLinksButtonLinkModel)), {}),
    componentLinksButtons: types.optional(types.map(types.late((): any => ComponentLinksButtonModel)), {}),
    componentLinksLinks: types.optional(types.map(types.late((): any => ComponentLinksLinkModel)), {}),
    componentMetaMetadata: types.optional(types.map(types.late((): any => ComponentMetaMetadataModel)), {}),
    componentSectionsBottomActions: types.optional(types.map(types.late((): any => ComponentSectionsBottomActionsModel)), {}),
    componentSectionsFeatureColumnsGroups: types.optional(types.map(types.late((): any => ComponentSectionsFeatureColumnsGroupModel)), {}),
    componentSectionsFeatureRowsGroups: types.optional(types.map(types.late((): any => ComponentSectionsFeatureRowsGroupModel)), {}),
    componentSectionsHeroes: types.optional(types.map(types.late((): any => ComponentSectionsHeroModel)), {}),
    componentSectionsLargeVideos: types.optional(types.map(types.late((): any => ComponentSectionsLargeVideoModel)), {}),
    componentSectionsLeadForms: types.optional(types.map(types.late((): any => ComponentSectionsLeadFormModel)), {}),
    componentSectionsPricings: types.optional(types.map(types.late((): any => ComponentSectionsPricingModel)), {}),
    componentSectionsRichTexts: types.optional(types.map(types.late((): any => ComponentSectionsRichTextModel)), {}),
    componentSectionsTestimonialsGroups: types.optional(types.map(types.late((): any => ComponentSectionsTestimonialsGroupModel)), {}),
    componentSharedMetaSocials: types.optional(types.map(types.late((): any => ComponentSharedMetaSocialModel)), {}),
    componentSharedSeos: types.optional(types.map(types.late((): any => ComponentSharedSeoModel)), {}),
    uploadFileEntities: types.optional(types.map(types.late((): any => UploadFileEntityModel)), {}),
    i18NLocaleEntities: types.optional(types.map(types.late((): any => I18NLocaleEntityModel)), {}),
    usersPermissionsPermissionEntities: types.optional(types.map(types.late((): any => UsersPermissionsPermissionEntityModel)), {}),
    usersPermissionsRoleEntities: types.optional(types.map(types.late((): any => UsersPermissionsRoleEntityModel)), {}),
    usersPermissionsUserEntities: types.optional(types.map(types.late((): any => UsersPermissionsUserEntityModel)), {}),
    categoryEntities: types.optional(types.map(types.late((): any => CategoryEntityModel)), {}),
    collectionEntities: types.optional(types.map(types.late((): any => CollectionEntityModel)), {}),
    globalEntities: types.optional(types.map(types.late((): any => GlobalEntityModel)), {}),
    leadFormSubmissionEntities: types.optional(types.map(types.late((): any => LeadFormSubmissionEntityModel)), {}),
    pageEntities: types.optional(types.map(types.late((): any => PageEntityModel)), {}),
    productEntities: types.optional(types.map(types.late((): any => ProductEntityModel)), {}),
    usersPermissionsUs: types.optional(types.map(types.late((): any => UsersPermissionsMeModel)), {}),
    usersPermissionsMeRoles: types.optional(types.map(types.late((): any => UsersPermissionsMeRoleModel)), {})
  })
  .actions(self => ({
    queryUploadFile(variables: { id?: string }, resultSelector: string | ((qb: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector) = uploadFileEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ uploadFile: UploadFileEntityResponseModelType}>(`query uploadFile($id: ID) { uploadFile(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UploadFileEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUploadFiles(variables: { filters?: UploadFileFiltersInput, pagination?: PaginationArg, sort?: string[] }, resultSelector: string | ((qb: UploadFileEntityResponseCollectionModelSelector) => UploadFileEntityResponseCollectionModelSelector) = uploadFileEntityResponseCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ uploadFiles: UploadFileEntityResponseCollectionModelType}>(`query uploadFiles($filters: UploadFileFiltersInput, $pagination: PaginationArg, $sort: [String]) { uploadFiles(filters: $filters, pagination: $pagination, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new UploadFileEntityResponseCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryI18NLocale(variables: { id?: string }, resultSelector: string | ((qb: I18NLocaleEntityResponseModelSelector) => I18NLocaleEntityResponseModelSelector) = i18NLocaleEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ i18NLocale: I18NLocaleEntityResponseModelType}>(`query i18NLocale($id: ID) { i18NLocale(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new I18NLocaleEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryI18NLocales(variables: { filters?: I18NLocaleFiltersInput, pagination?: PaginationArg, sort?: string[] }, resultSelector: string | ((qb: I18NLocaleEntityResponseCollectionModelSelector) => I18NLocaleEntityResponseCollectionModelSelector) = i18NLocaleEntityResponseCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ i18NLocales: I18NLocaleEntityResponseCollectionModelType}>(`query i18NLocales($filters: I18NLocaleFiltersInput, $pagination: PaginationArg, $sort: [String]) { i18NLocales(filters: $filters, pagination: $pagination, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new I18NLocaleEntityResponseCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUsersPermissionsRole(variables: { id?: string }, resultSelector: string | ((qb: UsersPermissionsRoleEntityResponseModelSelector) => UsersPermissionsRoleEntityResponseModelSelector) = usersPermissionsRoleEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ usersPermissionsRole: UsersPermissionsRoleEntityResponseModelType}>(`query usersPermissionsRole($id: ID) { usersPermissionsRole(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsRoleEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUsersPermissionsRoles(variables: { filters?: UsersPermissionsRoleFiltersInput, pagination?: PaginationArg, sort?: string[] }, resultSelector: string | ((qb: UsersPermissionsRoleEntityResponseCollectionModelSelector) => UsersPermissionsRoleEntityResponseCollectionModelSelector) = usersPermissionsRoleEntityResponseCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ usersPermissionsRoles: UsersPermissionsRoleEntityResponseCollectionModelType}>(`query usersPermissionsRoles($filters: UsersPermissionsRoleFiltersInput, $pagination: PaginationArg, $sort: [String]) { usersPermissionsRoles(filters: $filters, pagination: $pagination, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsRoleEntityResponseCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUsersPermissionsUser(variables: { id?: string }, resultSelector: string | ((qb: UsersPermissionsUserEntityResponseModelSelector) => UsersPermissionsUserEntityResponseModelSelector) = usersPermissionsUserEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ usersPermissionsUser: UsersPermissionsUserEntityResponseModelType}>(`query usersPermissionsUser($id: ID) { usersPermissionsUser(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsUserEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUsersPermissionsUsers(variables: { filters?: UsersPermissionsUserFiltersInput, pagination?: PaginationArg, sort?: string[] }, resultSelector: string | ((qb: UsersPermissionsUserEntityResponseCollectionModelSelector) => UsersPermissionsUserEntityResponseCollectionModelSelector) = usersPermissionsUserEntityResponseCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ usersPermissionsUsers: UsersPermissionsUserEntityResponseCollectionModelType}>(`query usersPermissionsUsers($filters: UsersPermissionsUserFiltersInput, $pagination: PaginationArg, $sort: [String]) { usersPermissionsUsers(filters: $filters, pagination: $pagination, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsUserEntityResponseCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCategory(variables: { id?: string }, resultSelector: string | ((qb: CategoryEntityResponseModelSelector) => CategoryEntityResponseModelSelector) = categoryEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ category: CategoryEntityResponseModelType}>(`query category($id: ID) { category(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCategories(variables: { filters?: CategoryFiltersInput, pagination?: PaginationArg, sort?: string[], publicationState?: PublicationState }, resultSelector: string | ((qb: CategoryEntityResponseCollectionModelSelector) => CategoryEntityResponseCollectionModelSelector) = categoryEntityResponseCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ categories: CategoryEntityResponseCollectionModelType}>(`query categories($filters: CategoryFiltersInput, $pagination: PaginationArg, $sort: [String], $publicationState: PublicationState) { categories(filters: $filters, pagination: $pagination, sort: $sort, publicationState: $publicationState) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryEntityResponseCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCollection(variables: { id?: string }, resultSelector: string | ((qb: CollectionEntityResponseModelSelector) => CollectionEntityResponseModelSelector) = collectionEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ collection: CollectionEntityResponseModelType}>(`query collection($id: ID) { collection(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCollections(variables: { filters?: CollectionFiltersInput, pagination?: PaginationArg, sort?: string[], publicationState?: PublicationState }, resultSelector: string | ((qb: CollectionEntityResponseCollectionModelSelector) => CollectionEntityResponseCollectionModelSelector) = collectionEntityResponseCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ collections: CollectionEntityResponseCollectionModelType}>(`query collections($filters: CollectionFiltersInput, $pagination: PaginationArg, $sort: [String], $publicationState: PublicationState) { collections(filters: $filters, pagination: $pagination, sort: $sort, publicationState: $publicationState) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionEntityResponseCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGlobal(variables: { locale?: any }, resultSelector: string | ((qb: GlobalEntityResponseModelSelector) => GlobalEntityResponseModelSelector) = globalEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ global: GlobalEntityResponseModelType}>(`query global($locale: I18NLocaleCode) { global(locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new GlobalEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLeadFormSubmission(variables: { id?: string }, resultSelector: string | ((qb: LeadFormSubmissionEntityResponseModelSelector) => LeadFormSubmissionEntityResponseModelSelector) = leadFormSubmissionEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ leadFormSubmission: LeadFormSubmissionEntityResponseModelType}>(`query leadFormSubmission($id: ID) { leadFormSubmission(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadFormSubmissionEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLeadFormSubmissions(variables: { filters?: LeadFormSubmissionFiltersInput, pagination?: PaginationArg, sort?: string[] }, resultSelector: string | ((qb: LeadFormSubmissionEntityResponseCollectionModelSelector) => LeadFormSubmissionEntityResponseCollectionModelSelector) = leadFormSubmissionEntityResponseCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ leadFormSubmissions: LeadFormSubmissionEntityResponseCollectionModelType}>(`query leadFormSubmissions($filters: LeadFormSubmissionFiltersInput, $pagination: PaginationArg, $sort: [String]) { leadFormSubmissions(filters: $filters, pagination: $pagination, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadFormSubmissionEntityResponseCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPage(variables: { id?: string, locale?: any }, resultSelector: string | ((qb: PageEntityResponseModelSelector) => PageEntityResponseModelSelector) = pageEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ page: PageEntityResponseModelType}>(`query page($id: ID, $locale: I18NLocaleCode) { page(id: $id, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new PageEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPages(variables: { filters?: PageFiltersInput, pagination?: PaginationArg, sort?: string[], publicationState?: PublicationState, locale?: any }, resultSelector: string | ((qb: PageEntityResponseCollectionModelSelector) => PageEntityResponseCollectionModelSelector) = pageEntityResponseCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ pages: PageEntityResponseCollectionModelType}>(`query pages($filters: PageFiltersInput, $pagination: PaginationArg, $sort: [String], $publicationState: PublicationState, $locale: I18NLocaleCode) { pages(filters: $filters, pagination: $pagination, sort: $sort, publicationState: $publicationState, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new PageEntityResponseCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryProduct(variables: { id?: string }, resultSelector: string | ((qb: ProductEntityResponseModelSelector) => ProductEntityResponseModelSelector) = productEntityResponseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ product: ProductEntityResponseModelType}>(`query product($id: ID) { product(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryProducts(variables: { filters?: ProductFiltersInput, pagination?: PaginationArg, sort?: string[], publicationState?: PublicationState }, resultSelector: string | ((qb: ProductEntityResponseCollectionModelSelector) => ProductEntityResponseCollectionModelSelector) = productEntityResponseCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ products: ProductEntityResponseCollectionModelType}>(`query products($filters: ProductFiltersInput, $pagination: PaginationArg, $sort: [String], $publicationState: PublicationState) { products(filters: $filters, pagination: $pagination, sort: $sort, publicationState: $publicationState) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductEntityResponseCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryMe(variables?: {  }, resultSelector: string | ((qb: UsersPermissionsMeModelSelector) => UsersPermissionsMeModelSelector) = usersPermissionsMeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ me: UsersPermissionsMeModelType}>(`query me { me {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsMeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateCreateUploadFile(variables: { data: UploadFileInput }, resultSelector: string | ((qb: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector) = uploadFileEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUploadFile: UploadFileEntityResponseModelType}>(`mutation createUploadFile($data: UploadFileInput!) { createUploadFile(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UploadFileEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUploadFile(variables: { id: string, data: UploadFileInput }, resultSelector: string | ((qb: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector) = uploadFileEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUploadFile: UploadFileEntityResponseModelType}>(`mutation updateUploadFile($id: ID!, $data: UploadFileInput!) { updateUploadFile(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UploadFileEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteUploadFile(variables: { id: string }, resultSelector: string | ((qb: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector) = uploadFileEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUploadFile: UploadFileEntityResponseModelType}>(`mutation deleteUploadFile($id: ID!) { deleteUploadFile(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UploadFileEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateCategory(variables: { data: CategoryInput }, resultSelector: string | ((qb: CategoryEntityResponseModelSelector) => CategoryEntityResponseModelSelector) = categoryEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createCategory: CategoryEntityResponseModelType}>(`mutation createCategory($data: CategoryInput!) { createCategory(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCategory(variables: { id: string, data: CategoryInput }, resultSelector: string | ((qb: CategoryEntityResponseModelSelector) => CategoryEntityResponseModelSelector) = categoryEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCategory: CategoryEntityResponseModelType}>(`mutation updateCategory($id: ID!, $data: CategoryInput!) { updateCategory(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteCategory(variables: { id: string }, resultSelector: string | ((qb: CategoryEntityResponseModelSelector) => CategoryEntityResponseModelSelector) = categoryEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCategory: CategoryEntityResponseModelType}>(`mutation deleteCategory($id: ID!) { deleteCategory(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateCollection(variables: { data: CollectionInput }, resultSelector: string | ((qb: CollectionEntityResponseModelSelector) => CollectionEntityResponseModelSelector) = collectionEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createCollection: CollectionEntityResponseModelType}>(`mutation createCollection($data: CollectionInput!) { createCollection(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCollection(variables: { id: string, data: CollectionInput }, resultSelector: string | ((qb: CollectionEntityResponseModelSelector) => CollectionEntityResponseModelSelector) = collectionEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCollection: CollectionEntityResponseModelType}>(`mutation updateCollection($id: ID!, $data: CollectionInput!) { updateCollection(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteCollection(variables: { id: string }, resultSelector: string | ((qb: CollectionEntityResponseModelSelector) => CollectionEntityResponseModelSelector) = collectionEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCollection: CollectionEntityResponseModelType}>(`mutation deleteCollection($id: ID!) { deleteCollection(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateGlobal(variables: { data: GlobalInput, locale?: any }, resultSelector: string | ((qb: GlobalEntityResponseModelSelector) => GlobalEntityResponseModelSelector) = globalEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateGlobal: GlobalEntityResponseModelType}>(`mutation updateGlobal($data: GlobalInput!, $locale: I18NLocaleCode) { updateGlobal(data: $data, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new GlobalEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteGlobal(variables: { locale?: any }, resultSelector: string | ((qb: GlobalEntityResponseModelSelector) => GlobalEntityResponseModelSelector) = globalEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteGlobal: GlobalEntityResponseModelType}>(`mutation deleteGlobal($locale: I18NLocaleCode) { deleteGlobal(locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new GlobalEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateLeadFormSubmission(variables: { data: LeadFormSubmissionInput }, resultSelector: string | ((qb: LeadFormSubmissionEntityResponseModelSelector) => LeadFormSubmissionEntityResponseModelSelector) = leadFormSubmissionEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createLeadFormSubmission: LeadFormSubmissionEntityResponseModelType}>(`mutation createLeadFormSubmission($data: LeadFormSubmissionInput!) { createLeadFormSubmission(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadFormSubmissionEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLeadFormSubmission(variables: { id: string, data: LeadFormSubmissionInput }, resultSelector: string | ((qb: LeadFormSubmissionEntityResponseModelSelector) => LeadFormSubmissionEntityResponseModelSelector) = leadFormSubmissionEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateLeadFormSubmission: LeadFormSubmissionEntityResponseModelType}>(`mutation updateLeadFormSubmission($id: ID!, $data: LeadFormSubmissionInput!) { updateLeadFormSubmission(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadFormSubmissionEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteLeadFormSubmission(variables: { id: string }, resultSelector: string | ((qb: LeadFormSubmissionEntityResponseModelSelector) => LeadFormSubmissionEntityResponseModelSelector) = leadFormSubmissionEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteLeadFormSubmission: LeadFormSubmissionEntityResponseModelType}>(`mutation deleteLeadFormSubmission($id: ID!) { deleteLeadFormSubmission(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new LeadFormSubmissionEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreatePage(variables: { data: PageInput, locale?: any }, resultSelector: string | ((qb: PageEntityResponseModelSelector) => PageEntityResponseModelSelector) = pageEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createPage: PageEntityResponseModelType}>(`mutation createPage($data: PageInput!, $locale: I18NLocaleCode) { createPage(data: $data, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new PageEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdatePage(variables: { id: string, data: PageInput, locale?: any }, resultSelector: string | ((qb: PageEntityResponseModelSelector) => PageEntityResponseModelSelector) = pageEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updatePage: PageEntityResponseModelType}>(`mutation updatePage($id: ID!, $data: PageInput!, $locale: I18NLocaleCode) { updatePage(id: $id, data: $data, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new PageEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeletePage(variables: { id: string, locale?: any }, resultSelector: string | ((qb: PageEntityResponseModelSelector) => PageEntityResponseModelSelector) = pageEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deletePage: PageEntityResponseModelType}>(`mutation deletePage($id: ID!, $locale: I18NLocaleCode) { deletePage(id: $id, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new PageEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateProduct(variables: { data: ProductInput }, resultSelector: string | ((qb: ProductEntityResponseModelSelector) => ProductEntityResponseModelSelector) = productEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProduct: ProductEntityResponseModelType}>(`mutation createProduct($data: ProductInput!) { createProduct(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProduct(variables: { id: string, data: ProductInput }, resultSelector: string | ((qb: ProductEntityResponseModelSelector) => ProductEntityResponseModelSelector) = productEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProduct: ProductEntityResponseModelType}>(`mutation updateProduct($id: ID!, $data: ProductInput!) { updateProduct(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteProduct(variables: { id: string }, resultSelector: string | ((qb: ProductEntityResponseModelSelector) => ProductEntityResponseModelSelector) = productEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProduct: ProductEntityResponseModelType}>(`mutation deleteProduct($id: ID!) { deleteProduct(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpload(variables: { refId?: string, ref?: string, field?: string, info?: FileInfoInput, file: any }, resultSelector: string | ((qb: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector) = uploadFileEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ upload: UploadFileEntityResponseModelType}>(`mutation upload($refId: ID, $ref: String, $field: String, $info: FileInfoInput, $file: Upload!) { upload(refId: $refId, ref: $ref, field: $field, info: $info, file: $file) {
        ${typeof resultSelector === "function" ? resultSelector(new UploadFileEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateMultipleUpload(variables: { refId?: string, ref?: string, field?: string, files?: any[] }, resultSelector: string | ((qb: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector) = uploadFileEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ multipleUpload: UploadFileEntityResponseModelType[]}>(`mutation multipleUpload($refId: ID, $ref: String, $field: String, $files: [Upload]!) { multipleUpload(refId: $refId, ref: $ref, field: $field, files: $files) {
        ${typeof resultSelector === "function" ? resultSelector(new UploadFileEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateFileInfo(variables: { id: string, info?: FileInfoInput }, resultSelector: string | ((qb: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector) = uploadFileEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateFileInfo: UploadFileEntityResponseModelType}>(`mutation updateFileInfo($id: ID!, $info: FileInfoInput) { updateFileInfo(id: $id, info: $info) {
        ${typeof resultSelector === "function" ? resultSelector(new UploadFileEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveFile(variables: { id: string }, resultSelector: string | ((qb: UploadFileEntityResponseModelSelector) => UploadFileEntityResponseModelSelector) = uploadFileEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeFile: UploadFileEntityResponseModelType}>(`mutation removeFile($id: ID!) { removeFile(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UploadFileEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateGlobalLocalization(variables: { id?: string, data?: GlobalInput, locale?: any }, resultSelector: string | ((qb: GlobalEntityResponseModelSelector) => GlobalEntityResponseModelSelector) = globalEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createGlobalLocalization: GlobalEntityResponseModelType}>(`mutation createGlobalLocalization($id: ID, $data: GlobalInput, $locale: I18NLocaleCode) { createGlobalLocalization(id: $id, data: $data, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new GlobalEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreatePageLocalization(variables: { id?: string, data?: PageInput, locale?: any }, resultSelector: string | ((qb: PageEntityResponseModelSelector) => PageEntityResponseModelSelector) = pageEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createPageLocalization: PageEntityResponseModelType}>(`mutation createPageLocalization($id: ID, $data: PageInput, $locale: I18NLocaleCode) { createPageLocalization(id: $id, data: $data, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new PageEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Create a new role
    mutateCreateUsersPermissionsRole(variables: { data: UsersPermissionsRoleInput }, resultSelector: string | ((qb: UsersPermissionsCreateRolePayloadModelSelector) => UsersPermissionsCreateRolePayloadModelSelector) = usersPermissionsCreateRolePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUsersPermissionsRole: UsersPermissionsCreateRolePayloadModelType}>(`mutation createUsersPermissionsRole($data: UsersPermissionsRoleInput!) { createUsersPermissionsRole(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsCreateRolePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Update an existing role
    mutateUpdateUsersPermissionsRole(variables: { id: string, data: UsersPermissionsRoleInput }, resultSelector: string | ((qb: UsersPermissionsUpdateRolePayloadModelSelector) => UsersPermissionsUpdateRolePayloadModelSelector) = usersPermissionsUpdateRolePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUsersPermissionsRole: UsersPermissionsUpdateRolePayloadModelType}>(`mutation updateUsersPermissionsRole($id: ID!, $data: UsersPermissionsRoleInput!) { updateUsersPermissionsRole(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsUpdateRolePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Delete an existing role
    mutateDeleteUsersPermissionsRole(variables: { id: string }, resultSelector: string | ((qb: UsersPermissionsDeleteRolePayloadModelSelector) => UsersPermissionsDeleteRolePayloadModelSelector) = usersPermissionsDeleteRolePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUsersPermissionsRole: UsersPermissionsDeleteRolePayloadModelType}>(`mutation deleteUsersPermissionsRole($id: ID!) { deleteUsersPermissionsRole(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsDeleteRolePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Create a new user
    mutateCreateUsersPermissionsUser(variables: { data: UsersPermissionsUserInput }, resultSelector: string | ((qb: UsersPermissionsUserEntityResponseModelSelector) => UsersPermissionsUserEntityResponseModelSelector) = usersPermissionsUserEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUsersPermissionsUser: UsersPermissionsUserEntityResponseModelType}>(`mutation createUsersPermissionsUser($data: UsersPermissionsUserInput!) { createUsersPermissionsUser(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsUserEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Update an existing user
    mutateUpdateUsersPermissionsUser(variables: { id: string, data: UsersPermissionsUserInput }, resultSelector: string | ((qb: UsersPermissionsUserEntityResponseModelSelector) => UsersPermissionsUserEntityResponseModelSelector) = usersPermissionsUserEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUsersPermissionsUser: UsersPermissionsUserEntityResponseModelType}>(`mutation updateUsersPermissionsUser($id: ID!, $data: UsersPermissionsUserInput!) { updateUsersPermissionsUser(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsUserEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Update an existing user
    mutateDeleteUsersPermissionsUser(variables: { id: string }, resultSelector: string | ((qb: UsersPermissionsUserEntityResponseModelSelector) => UsersPermissionsUserEntityResponseModelSelector) = usersPermissionsUserEntityResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUsersPermissionsUser: UsersPermissionsUserEntityResponseModelType}>(`mutation deleteUsersPermissionsUser($id: ID!) { deleteUsersPermissionsUser(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsUserEntityResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateLogin(variables: { input: UsersPermissionsLoginInput }, resultSelector: string | ((qb: UsersPermissionsLoginPayloadModelSelector) => UsersPermissionsLoginPayloadModelSelector) = usersPermissionsLoginPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ login: UsersPermissionsLoginPayloadModelType}>(`mutation login($input: UsersPermissionsLoginInput!) { login(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsLoginPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Register a user
    mutateRegister(variables: { input: UsersPermissionsRegisterInput }, resultSelector: string | ((qb: UsersPermissionsLoginPayloadModelSelector) => UsersPermissionsLoginPayloadModelSelector) = usersPermissionsLoginPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ register: UsersPermissionsLoginPayloadModelType}>(`mutation register($input: UsersPermissionsRegisterInput!) { register(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsLoginPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Request a reset password token
    mutateForgotPassword(variables: { email: string }, resultSelector: string | ((qb: UsersPermissionsPasswordPayloadModelSelector) => UsersPermissionsPasswordPayloadModelSelector) = usersPermissionsPasswordPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ forgotPassword: UsersPermissionsPasswordPayloadModelType}>(`mutation forgotPassword($email: String!) { forgotPassword(email: $email) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsPasswordPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Reset user password. Confirm with a code (resetToken from forgotPassword)
    mutateResetPassword(variables: { password: string, passwordConfirmation: string, code: string }, resultSelector: string | ((qb: UsersPermissionsLoginPayloadModelSelector) => UsersPermissionsLoginPayloadModelSelector) = usersPermissionsLoginPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ resetPassword: UsersPermissionsLoginPayloadModelType}>(`mutation resetPassword($password: String!, $passwordConfirmation: String!, $code: String!) { resetPassword(password: $password, passwordConfirmation: $passwordConfirmation, code: $code) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsLoginPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Confirm an email users email address
    mutateEmailConfirmation(variables: { confirmation: string }, resultSelector: string | ((qb: UsersPermissionsLoginPayloadModelSelector) => UsersPermissionsLoginPayloadModelSelector) = usersPermissionsLoginPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ emailConfirmation: UsersPermissionsLoginPayloadModelType}>(`mutation emailConfirmation($confirmation: String!) { emailConfirmation(confirmation: $confirmation) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersPermissionsLoginPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
