/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { CategoryModelType } from "./CategoryModel"
import { CategoryModelSelector, categoryModelPrimitives } from "./CategoryModel.base"
import { CollectionModelType } from "./CollectionModel"
import { CollectionModelSelector, collectionModelPrimitives } from "./CollectionModel.base"
import { ComponentElementsFeatureColumnModelType } from "./ComponentElementsFeatureColumnModel"
import { ComponentElementsFeatureColumnModelSelector, componentElementsFeatureColumnModelPrimitives } from "./ComponentElementsFeatureColumnModel.base"
import { ComponentElementsFeatureModelType } from "./ComponentElementsFeatureModel"
import { ComponentElementsFeatureModelSelector, componentElementsFeatureModelPrimitives } from "./ComponentElementsFeatureModel.base"
import { ComponentElementsFeatureRowModelType } from "./ComponentElementsFeatureRowModel"
import { ComponentElementsFeatureRowModelSelector, componentElementsFeatureRowModelPrimitives } from "./ComponentElementsFeatureRowModel.base"
import { ComponentElementsFooterSectionModelType } from "./ComponentElementsFooterSectionModel"
import { ComponentElementsFooterSectionModelSelector, componentElementsFooterSectionModelPrimitives } from "./ComponentElementsFooterSectionModel.base"
import { ComponentElementsLogosModelType } from "./ComponentElementsLogosModel"
import { ComponentElementsLogosModelSelector, componentElementsLogosModelPrimitives } from "./ComponentElementsLogosModel.base"
import { ComponentElementsNotificationBannerModelType } from "./ComponentElementsNotificationBannerModel"
import { ComponentElementsNotificationBannerModelSelector, componentElementsNotificationBannerModelPrimitives } from "./ComponentElementsNotificationBannerModel.base"
import { ComponentElementsPlanModelType } from "./ComponentElementsPlanModel"
import { ComponentElementsPlanModelSelector, componentElementsPlanModelPrimitives } from "./ComponentElementsPlanModel.base"
import { ComponentElementsProductTileModelType } from "./ComponentElementsProductTileModel"
import { ComponentElementsProductTileModelSelector, componentElementsProductTileModelPrimitives } from "./ComponentElementsProductTileModel.base"
import { ComponentElementsTestimonialModelType } from "./ComponentElementsTestimonialModel"
import { ComponentElementsTestimonialModelSelector, componentElementsTestimonialModelPrimitives } from "./ComponentElementsTestimonialModel.base"
import { ComponentLayoutFooterModelType } from "./ComponentLayoutFooterModel"
import { ComponentLayoutFooterModelSelector, componentLayoutFooterModelPrimitives } from "./ComponentLayoutFooterModel.base"
import { ComponentLayoutNavbarModelType } from "./ComponentLayoutNavbarModel"
import { ComponentLayoutNavbarModelSelector, componentLayoutNavbarModelPrimitives } from "./ComponentLayoutNavbarModel.base"
import { ComponentLinksButtonLinkModelType } from "./ComponentLinksButtonLinkModel"
import { ComponentLinksButtonLinkModelSelector, componentLinksButtonLinkModelPrimitives } from "./ComponentLinksButtonLinkModel.base"
import { ComponentLinksButtonModelType } from "./ComponentLinksButtonModel"
import { ComponentLinksButtonModelSelector, componentLinksButtonModelPrimitives } from "./ComponentLinksButtonModel.base"
import { ComponentLinksLinkModelType } from "./ComponentLinksLinkModel"
import { ComponentLinksLinkModelSelector, componentLinksLinkModelPrimitives } from "./ComponentLinksLinkModel.base"
import { ComponentMetaMetadataModelType } from "./ComponentMetaMetadataModel"
import { ComponentMetaMetadataModelSelector, componentMetaMetadataModelPrimitives } from "./ComponentMetaMetadataModel.base"
import { ComponentSectionsBottomActionsModelType } from "./ComponentSectionsBottomActionsModel"
import { ComponentSectionsBottomActionsModelSelector, componentSectionsBottomActionsModelPrimitives } from "./ComponentSectionsBottomActionsModel.base"
import { ComponentSectionsFeatureColumnsGroupModelType } from "./ComponentSectionsFeatureColumnsGroupModel"
import { ComponentSectionsFeatureColumnsGroupModelSelector, componentSectionsFeatureColumnsGroupModelPrimitives } from "./ComponentSectionsFeatureColumnsGroupModel.base"
import { ComponentSectionsFeatureRowsGroupModelType } from "./ComponentSectionsFeatureRowsGroupModel"
import { ComponentSectionsFeatureRowsGroupModelSelector, componentSectionsFeatureRowsGroupModelPrimitives } from "./ComponentSectionsFeatureRowsGroupModel.base"
import { ComponentSectionsHeroModelType } from "./ComponentSectionsHeroModel"
import { ComponentSectionsHeroModelSelector, componentSectionsHeroModelPrimitives } from "./ComponentSectionsHeroModel.base"
import { ComponentSectionsLargeVideoModelType } from "./ComponentSectionsLargeVideoModel"
import { ComponentSectionsLargeVideoModelSelector, componentSectionsLargeVideoModelPrimitives } from "./ComponentSectionsLargeVideoModel.base"
import { ComponentSectionsLeadFormModelType } from "./ComponentSectionsLeadFormModel"
import { ComponentSectionsLeadFormModelSelector, componentSectionsLeadFormModelPrimitives } from "./ComponentSectionsLeadFormModel.base"
import { ComponentSectionsPricingModelType } from "./ComponentSectionsPricingModel"
import { ComponentSectionsPricingModelSelector, componentSectionsPricingModelPrimitives } from "./ComponentSectionsPricingModel.base"
import { ComponentSectionsRichTextModelType } from "./ComponentSectionsRichTextModel"
import { ComponentSectionsRichTextModelSelector, componentSectionsRichTextModelPrimitives } from "./ComponentSectionsRichTextModel.base"
import { ComponentSectionsTestimonialsGroupModelType } from "./ComponentSectionsTestimonialsGroupModel"
import { ComponentSectionsTestimonialsGroupModelSelector, componentSectionsTestimonialsGroupModelPrimitives } from "./ComponentSectionsTestimonialsGroupModel.base"
import { ComponentSharedMetaSocialModelType } from "./ComponentSharedMetaSocialModel"
import { ComponentSharedMetaSocialModelSelector, componentSharedMetaSocialModelPrimitives } from "./ComponentSharedMetaSocialModel.base"
import { ComponentSharedSeoModelType } from "./ComponentSharedSeoModel"
import { ComponentSharedSeoModelSelector, componentSharedSeoModelPrimitives } from "./ComponentSharedSeoModel.base"
import { GlobalModelType } from "./GlobalModel"
import { GlobalModelSelector, globalModelPrimitives } from "./GlobalModel.base"
import { I18NLocaleModelType } from "./I18NLocaleModel"
import { I18NLocaleModelSelector, i18NLocaleModelPrimitives } from "./I18NLocaleModel.base"
import { LeadFormSubmissionModelType } from "./LeadFormSubmissionModel"
import { LeadFormSubmissionModelSelector, leadFormSubmissionModelPrimitives } from "./LeadFormSubmissionModel.base"
import { PageModelType } from "./PageModel"
import { PageModelSelector, pageModelPrimitives } from "./PageModel.base"
import { ProductModelType } from "./ProductModel"
import { ProductModelSelector, productModelPrimitives } from "./ProductModel.base"
import { UploadFileModelType } from "./UploadFileModel"
import { UploadFileModelSelector, uploadFileModelPrimitives } from "./UploadFileModel.base"
import { UsersPermissionsPermissionModelType } from "./UsersPermissionsPermissionModel"
import { UsersPermissionsPermissionModelSelector, usersPermissionsPermissionModelPrimitives } from "./UsersPermissionsPermissionModel.base"
import { UsersPermissionsRoleModelType } from "./UsersPermissionsRoleModel"
import { UsersPermissionsRoleModelSelector, usersPermissionsRoleModelPrimitives } from "./UsersPermissionsRoleModel.base"
import { UsersPermissionsUserModelType } from "./UsersPermissionsUserModel"
import { UsersPermissionsUserModelSelector, usersPermissionsUserModelPrimitives } from "./UsersPermissionsUserModel.base"

export type GenericMorphUnion = ComponentElementsFeatureColumnModelType | ComponentElementsFeatureRowModelType | ComponentElementsFeatureModelType | ComponentElementsFooterSectionModelType | ComponentElementsLogosModelType | ComponentElementsNotificationBannerModelType | ComponentElementsPlanModelType | ComponentElementsProductTileModelType | ComponentElementsTestimonialModelType | ComponentLayoutFooterModelType | ComponentLayoutNavbarModelType | ComponentLinksButtonLinkModelType | ComponentLinksButtonModelType | ComponentLinksLinkModelType | ComponentMetaMetadataModelType | ComponentSectionsBottomActionsModelType | ComponentSectionsFeatureColumnsGroupModelType | ComponentSectionsFeatureRowsGroupModelType | ComponentSectionsHeroModelType | ComponentSectionsLargeVideoModelType | ComponentSectionsLeadFormModelType | ComponentSectionsPricingModelType | ComponentSectionsRichTextModelType | ComponentSectionsTestimonialsGroupModelType | ComponentSharedMetaSocialModelType | ComponentSharedSeoModelType | UploadFileModelType | I18NLocaleModelType | UsersPermissionsPermissionModelType | UsersPermissionsRoleModelType | UsersPermissionsUserModelType | CategoryModelType | CollectionModelType | GlobalModelType | LeadFormSubmissionModelType | PageModelType | ProductModelType

export class GenericMorphModelSelector extends QueryBuilder {
  componentElementsFeatureColumn(builder?: string | ComponentElementsFeatureColumnModelSelector | ((selector: ComponentElementsFeatureColumnModelSelector) => ComponentElementsFeatureColumnModelSelector)) { return this.__inlineFragment(`ComponentElementsFeatureColumn`, ComponentElementsFeatureColumnModelSelector, builder) }
  componentElementsFeatureRow(builder?: string | ComponentElementsFeatureRowModelSelector | ((selector: ComponentElementsFeatureRowModelSelector) => ComponentElementsFeatureRowModelSelector)) { return this.__inlineFragment(`ComponentElementsFeatureRow`, ComponentElementsFeatureRowModelSelector, builder) }
  componentElementsFeature(builder?: string | ComponentElementsFeatureModelSelector | ((selector: ComponentElementsFeatureModelSelector) => ComponentElementsFeatureModelSelector)) { return this.__inlineFragment(`ComponentElementsFeature`, ComponentElementsFeatureModelSelector, builder) }
  componentElementsFooterSection(builder?: string | ComponentElementsFooterSectionModelSelector | ((selector: ComponentElementsFooterSectionModelSelector) => ComponentElementsFooterSectionModelSelector)) { return this.__inlineFragment(`ComponentElementsFooterSection`, ComponentElementsFooterSectionModelSelector, builder) }
  componentElementsLogos(builder?: string | ComponentElementsLogosModelSelector | ((selector: ComponentElementsLogosModelSelector) => ComponentElementsLogosModelSelector)) { return this.__inlineFragment(`ComponentElementsLogos`, ComponentElementsLogosModelSelector, builder) }
  componentElementsNotificationBanner(builder?: string | ComponentElementsNotificationBannerModelSelector | ((selector: ComponentElementsNotificationBannerModelSelector) => ComponentElementsNotificationBannerModelSelector)) { return this.__inlineFragment(`ComponentElementsNotificationBanner`, ComponentElementsNotificationBannerModelSelector, builder) }
  componentElementsPlan(builder?: string | ComponentElementsPlanModelSelector | ((selector: ComponentElementsPlanModelSelector) => ComponentElementsPlanModelSelector)) { return this.__inlineFragment(`ComponentElementsPlan`, ComponentElementsPlanModelSelector, builder) }
  componentElementsProductTile(builder?: string | ComponentElementsProductTileModelSelector | ((selector: ComponentElementsProductTileModelSelector) => ComponentElementsProductTileModelSelector)) { return this.__inlineFragment(`ComponentElementsProductTile`, ComponentElementsProductTileModelSelector, builder) }
  componentElementsTestimonial(builder?: string | ComponentElementsTestimonialModelSelector | ((selector: ComponentElementsTestimonialModelSelector) => ComponentElementsTestimonialModelSelector)) { return this.__inlineFragment(`ComponentElementsTestimonial`, ComponentElementsTestimonialModelSelector, builder) }
  componentLayoutFooter(builder?: string | ComponentLayoutFooterModelSelector | ((selector: ComponentLayoutFooterModelSelector) => ComponentLayoutFooterModelSelector)) { return this.__inlineFragment(`ComponentLayoutFooter`, ComponentLayoutFooterModelSelector, builder) }
  componentLayoutNavbar(builder?: string | ComponentLayoutNavbarModelSelector | ((selector: ComponentLayoutNavbarModelSelector) => ComponentLayoutNavbarModelSelector)) { return this.__inlineFragment(`ComponentLayoutNavbar`, ComponentLayoutNavbarModelSelector, builder) }
  componentLinksButtonLink(builder?: string | ComponentLinksButtonLinkModelSelector | ((selector: ComponentLinksButtonLinkModelSelector) => ComponentLinksButtonLinkModelSelector)) { return this.__inlineFragment(`ComponentLinksButtonLink`, ComponentLinksButtonLinkModelSelector, builder) }
  componentLinksButton(builder?: string | ComponentLinksButtonModelSelector | ((selector: ComponentLinksButtonModelSelector) => ComponentLinksButtonModelSelector)) { return this.__inlineFragment(`ComponentLinksButton`, ComponentLinksButtonModelSelector, builder) }
  componentLinksLink(builder?: string | ComponentLinksLinkModelSelector | ((selector: ComponentLinksLinkModelSelector) => ComponentLinksLinkModelSelector)) { return this.__inlineFragment(`ComponentLinksLink`, ComponentLinksLinkModelSelector, builder) }
  componentMetaMetadata(builder?: string | ComponentMetaMetadataModelSelector | ((selector: ComponentMetaMetadataModelSelector) => ComponentMetaMetadataModelSelector)) { return this.__inlineFragment(`ComponentMetaMetadata`, ComponentMetaMetadataModelSelector, builder) }
  componentSectionsBottomActions(builder?: string | ComponentSectionsBottomActionsModelSelector | ((selector: ComponentSectionsBottomActionsModelSelector) => ComponentSectionsBottomActionsModelSelector)) { return this.__inlineFragment(`ComponentSectionsBottomActions`, ComponentSectionsBottomActionsModelSelector, builder) }
  componentSectionsFeatureColumnsGroup(builder?: string | ComponentSectionsFeatureColumnsGroupModelSelector | ((selector: ComponentSectionsFeatureColumnsGroupModelSelector) => ComponentSectionsFeatureColumnsGroupModelSelector)) { return this.__inlineFragment(`ComponentSectionsFeatureColumnsGroup`, ComponentSectionsFeatureColumnsGroupModelSelector, builder) }
  componentSectionsFeatureRowsGroup(builder?: string | ComponentSectionsFeatureRowsGroupModelSelector | ((selector: ComponentSectionsFeatureRowsGroupModelSelector) => ComponentSectionsFeatureRowsGroupModelSelector)) { return this.__inlineFragment(`ComponentSectionsFeatureRowsGroup`, ComponentSectionsFeatureRowsGroupModelSelector, builder) }
  componentSectionsHero(builder?: string | ComponentSectionsHeroModelSelector | ((selector: ComponentSectionsHeroModelSelector) => ComponentSectionsHeroModelSelector)) { return this.__inlineFragment(`ComponentSectionsHero`, ComponentSectionsHeroModelSelector, builder) }
  componentSectionsLargeVideo(builder?: string | ComponentSectionsLargeVideoModelSelector | ((selector: ComponentSectionsLargeVideoModelSelector) => ComponentSectionsLargeVideoModelSelector)) { return this.__inlineFragment(`ComponentSectionsLargeVideo`, ComponentSectionsLargeVideoModelSelector, builder) }
  componentSectionsLeadForm(builder?: string | ComponentSectionsLeadFormModelSelector | ((selector: ComponentSectionsLeadFormModelSelector) => ComponentSectionsLeadFormModelSelector)) { return this.__inlineFragment(`ComponentSectionsLeadForm`, ComponentSectionsLeadFormModelSelector, builder) }
  componentSectionsPricing(builder?: string | ComponentSectionsPricingModelSelector | ((selector: ComponentSectionsPricingModelSelector) => ComponentSectionsPricingModelSelector)) { return this.__inlineFragment(`ComponentSectionsPricing`, ComponentSectionsPricingModelSelector, builder) }
  componentSectionsRichText(builder?: string | ComponentSectionsRichTextModelSelector | ((selector: ComponentSectionsRichTextModelSelector) => ComponentSectionsRichTextModelSelector)) { return this.__inlineFragment(`ComponentSectionsRichText`, ComponentSectionsRichTextModelSelector, builder) }
  componentSectionsTestimonialsGroup(builder?: string | ComponentSectionsTestimonialsGroupModelSelector | ((selector: ComponentSectionsTestimonialsGroupModelSelector) => ComponentSectionsTestimonialsGroupModelSelector)) { return this.__inlineFragment(`ComponentSectionsTestimonialsGroup`, ComponentSectionsTestimonialsGroupModelSelector, builder) }
  componentSharedMetaSocial(builder?: string | ComponentSharedMetaSocialModelSelector | ((selector: ComponentSharedMetaSocialModelSelector) => ComponentSharedMetaSocialModelSelector)) { return this.__inlineFragment(`ComponentSharedMetaSocial`, ComponentSharedMetaSocialModelSelector, builder) }
  componentSharedSeo(builder?: string | ComponentSharedSeoModelSelector | ((selector: ComponentSharedSeoModelSelector) => ComponentSharedSeoModelSelector)) { return this.__inlineFragment(`ComponentSharedSeo`, ComponentSharedSeoModelSelector, builder) }
  uploadFile(builder?: string | UploadFileModelSelector | ((selector: UploadFileModelSelector) => UploadFileModelSelector)) { return this.__inlineFragment(`UploadFile`, UploadFileModelSelector, builder) }
  i18NLocale(builder?: string | I18NLocaleModelSelector | ((selector: I18NLocaleModelSelector) => I18NLocaleModelSelector)) { return this.__inlineFragment(`I18NLocale`, I18NLocaleModelSelector, builder) }
  usersPermissionsPermission(builder?: string | UsersPermissionsPermissionModelSelector | ((selector: UsersPermissionsPermissionModelSelector) => UsersPermissionsPermissionModelSelector)) { return this.__inlineFragment(`UsersPermissionsPermission`, UsersPermissionsPermissionModelSelector, builder) }
  usersPermissionsRole(builder?: string | UsersPermissionsRoleModelSelector | ((selector: UsersPermissionsRoleModelSelector) => UsersPermissionsRoleModelSelector)) { return this.__inlineFragment(`UsersPermissionsRole`, UsersPermissionsRoleModelSelector, builder) }
  usersPermissionsUser(builder?: string | UsersPermissionsUserModelSelector | ((selector: UsersPermissionsUserModelSelector) => UsersPermissionsUserModelSelector)) { return this.__inlineFragment(`UsersPermissionsUser`, UsersPermissionsUserModelSelector, builder) }
  category(builder?: string | CategoryModelSelector | ((selector: CategoryModelSelector) => CategoryModelSelector)) { return this.__inlineFragment(`Category`, CategoryModelSelector, builder) }
  collection(builder?: string | CollectionModelSelector | ((selector: CollectionModelSelector) => CollectionModelSelector)) { return this.__inlineFragment(`Collection`, CollectionModelSelector, builder) }
  global(builder?: string | GlobalModelSelector | ((selector: GlobalModelSelector) => GlobalModelSelector)) { return this.__inlineFragment(`Global`, GlobalModelSelector, builder) }
  leadFormSubmission(builder?: string | LeadFormSubmissionModelSelector | ((selector: LeadFormSubmissionModelSelector) => LeadFormSubmissionModelSelector)) { return this.__inlineFragment(`LeadFormSubmission`, LeadFormSubmissionModelSelector, builder) }
  page(builder?: string | PageModelSelector | ((selector: PageModelSelector) => PageModelSelector)) { return this.__inlineFragment(`Page`, PageModelSelector, builder) }
  product(builder?: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector)) { return this.__inlineFragment(`Product`, ProductModelSelector, builder) }
}
export function selectFromGenericMorph() {
  return new GenericMorphModelSelector()
}

// provides all primitive fields of union member types combined together
export const genericMorphModelPrimitives = selectFromGenericMorph().componentElementsFeatureColumn(componentElementsFeatureColumnModelPrimitives).componentElementsFeatureRow(componentElementsFeatureRowModelPrimitives).componentElementsFeature(componentElementsFeatureModelPrimitives).componentElementsFooterSection(componentElementsFooterSectionModelPrimitives).componentElementsLogos(componentElementsLogosModelPrimitives).componentElementsNotificationBanner(componentElementsNotificationBannerModelPrimitives).componentElementsPlan(componentElementsPlanModelPrimitives).componentElementsProductTile(componentElementsProductTileModelPrimitives).componentElementsTestimonial(componentElementsTestimonialModelPrimitives).componentLayoutFooter(componentLayoutFooterModelPrimitives).componentLayoutNavbar(componentLayoutNavbarModelPrimitives).componentLinksButtonLink(componentLinksButtonLinkModelPrimitives).componentLinksButton(componentLinksButtonModelPrimitives).componentLinksLink(componentLinksLinkModelPrimitives).componentMetaMetadata(componentMetaMetadataModelPrimitives).componentSectionsBottomActions(componentSectionsBottomActionsModelPrimitives).componentSectionsFeatureColumnsGroup(componentSectionsFeatureColumnsGroupModelPrimitives).componentSectionsFeatureRowsGroup(componentSectionsFeatureRowsGroupModelPrimitives).componentSectionsHero(componentSectionsHeroModelPrimitives).componentSectionsLargeVideo(componentSectionsLargeVideoModelPrimitives).componentSectionsLeadForm(componentSectionsLeadFormModelPrimitives).componentSectionsPricing(componentSectionsPricingModelPrimitives).componentSectionsRichText(componentSectionsRichTextModelPrimitives).componentSectionsTestimonialsGroup(componentSectionsTestimonialsGroupModelPrimitives).componentSharedMetaSocial(componentSharedMetaSocialModelPrimitives).componentSharedSeo(componentSharedSeoModelPrimitives).uploadFile(uploadFileModelPrimitives).i18NLocale(i18NLocaleModelPrimitives).usersPermissionsPermission(usersPermissionsPermissionModelPrimitives).usersPermissionsRole(usersPermissionsRoleModelPrimitives).usersPermissionsUser(usersPermissionsUserModelPrimitives).category(categoryModelPrimitives).collection(collectionModelPrimitives).global(globalModelPrimitives).leadFormSubmission(leadFormSubmissionModelPrimitives).page(pageModelPrimitives).product(productModelPrimitives)