/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
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
import { ErrorModelType } from "./ErrorModel"
import { ErrorModelSelector, errorModelPrimitives } from "./ErrorModel.base"

export type PageContentSectionsDynamicZoneUnion = ErrorModelType | ComponentSectionsBottomActionsModelType | ComponentSectionsFeatureColumnsGroupModelType | ComponentSectionsFeatureRowsGroupModelType | ComponentSectionsHeroModelType | ComponentSectionsLargeVideoModelType | ComponentSectionsLeadFormModelType | ComponentSectionsPricingModelType | ComponentSectionsRichTextModelType | ComponentSectionsTestimonialsGroupModelType

export class PageContentSectionsDynamicZoneModelSelector extends QueryBuilder {
  error(builder?: string | ErrorModelSelector | ((selector: ErrorModelSelector) => ErrorModelSelector)) { return this.__inlineFragment(`Error`, ErrorModelSelector, builder) }
  componentSectionsBottomActions(builder?: string | ComponentSectionsBottomActionsModelSelector | ((selector: ComponentSectionsBottomActionsModelSelector) => ComponentSectionsBottomActionsModelSelector)) { return this.__inlineFragment(`ComponentSectionsBottomActions`, ComponentSectionsBottomActionsModelSelector, builder) }
  componentSectionsFeatureColumnsGroup(builder?: string | ComponentSectionsFeatureColumnsGroupModelSelector | ((selector: ComponentSectionsFeatureColumnsGroupModelSelector) => ComponentSectionsFeatureColumnsGroupModelSelector)) { return this.__inlineFragment(`ComponentSectionsFeatureColumnsGroup`, ComponentSectionsFeatureColumnsGroupModelSelector, builder) }
  componentSectionsFeatureRowsGroup(builder?: string | ComponentSectionsFeatureRowsGroupModelSelector | ((selector: ComponentSectionsFeatureRowsGroupModelSelector) => ComponentSectionsFeatureRowsGroupModelSelector)) { return this.__inlineFragment(`ComponentSectionsFeatureRowsGroup`, ComponentSectionsFeatureRowsGroupModelSelector, builder) }
  componentSectionsHero(builder?: string | ComponentSectionsHeroModelSelector | ((selector: ComponentSectionsHeroModelSelector) => ComponentSectionsHeroModelSelector)) { return this.__inlineFragment(`ComponentSectionsHero`, ComponentSectionsHeroModelSelector, builder) }
  componentSectionsLargeVideo(builder?: string | ComponentSectionsLargeVideoModelSelector | ((selector: ComponentSectionsLargeVideoModelSelector) => ComponentSectionsLargeVideoModelSelector)) { return this.__inlineFragment(`ComponentSectionsLargeVideo`, ComponentSectionsLargeVideoModelSelector, builder) }
  componentSectionsLeadForm(builder?: string | ComponentSectionsLeadFormModelSelector | ((selector: ComponentSectionsLeadFormModelSelector) => ComponentSectionsLeadFormModelSelector)) { return this.__inlineFragment(`ComponentSectionsLeadForm`, ComponentSectionsLeadFormModelSelector, builder) }
  componentSectionsPricing(builder?: string | ComponentSectionsPricingModelSelector | ((selector: ComponentSectionsPricingModelSelector) => ComponentSectionsPricingModelSelector)) { return this.__inlineFragment(`ComponentSectionsPricing`, ComponentSectionsPricingModelSelector, builder) }
  componentSectionsRichText(builder?: string | ComponentSectionsRichTextModelSelector | ((selector: ComponentSectionsRichTextModelSelector) => ComponentSectionsRichTextModelSelector)) { return this.__inlineFragment(`ComponentSectionsRichText`, ComponentSectionsRichTextModelSelector, builder) }
  componentSectionsTestimonialsGroup(builder?: string | ComponentSectionsTestimonialsGroupModelSelector | ((selector: ComponentSectionsTestimonialsGroupModelSelector) => ComponentSectionsTestimonialsGroupModelSelector)) { return this.__inlineFragment(`ComponentSectionsTestimonialsGroup`, ComponentSectionsTestimonialsGroupModelSelector, builder) }
}
export function selectFromPageContentSectionsDynamicZone() {
  return new PageContentSectionsDynamicZoneModelSelector()
}

// provides all primitive fields of union member types combined together
export const pageContentSectionsDynamicZoneModelPrimitives = selectFromPageContentSectionsDynamicZone().error(errorModelPrimitives).componentSectionsBottomActions(componentSectionsBottomActionsModelPrimitives).componentSectionsFeatureColumnsGroup(componentSectionsFeatureColumnsGroupModelPrimitives).componentSectionsFeatureRowsGroup(componentSectionsFeatureRowsGroupModelPrimitives).componentSectionsHero(componentSectionsHeroModelPrimitives).componentSectionsLargeVideo(componentSectionsLargeVideoModelPrimitives).componentSectionsLeadForm(componentSectionsLeadFormModelPrimitives).componentSectionsPricing(componentSectionsPricingModelPrimitives).componentSectionsRichText(componentSectionsRichTextModelPrimitives).componentSectionsTestimonialsGroup(componentSectionsTestimonialsGroupModelPrimitives)