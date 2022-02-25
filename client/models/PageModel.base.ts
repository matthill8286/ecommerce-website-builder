/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentMetaMetadataModel, ComponentMetaMetadataModelType } from "./ComponentMetaMetadataModel"
import { ComponentMetaMetadataModelSelector } from "./ComponentMetaMetadataModel.base"
import { ComponentSectionsBottomActionsModel } from "./ComponentSectionsBottomActionsModel"
import { ComponentSectionsFeatureColumnsGroupModel } from "./ComponentSectionsFeatureColumnsGroupModel"
import { ComponentSectionsFeatureRowsGroupModel } from "./ComponentSectionsFeatureRowsGroupModel"
import { ComponentSectionsHeroModel } from "./ComponentSectionsHeroModel"
import { ComponentSectionsLargeVideoModel } from "./ComponentSectionsLargeVideoModel"
import { ComponentSectionsLeadFormModel } from "./ComponentSectionsLeadFormModel"
import { ComponentSectionsPricingModel } from "./ComponentSectionsPricingModel"
import { ComponentSectionsRichTextModel } from "./ComponentSectionsRichTextModel"
import { ComponentSectionsTestimonialsGroupModel } from "./ComponentSectionsTestimonialsGroupModel"
import { ErrorModel } from "./ErrorModel"
import { PageContentSectionsDynamicZoneModelSelector } from "./PageContentSectionsDynamicZoneModelSelector"
import { PageRelationResponseCollectionModel, PageRelationResponseCollectionModelType } from "./PageRelationResponseCollectionModel"
import { PageRelationResponseCollectionModelSelector } from "./PageRelationResponseCollectionModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  metadata: ComponentMetaMetadataModelType;
}

/**
 * PageBase
 * auto generated base class for the model PageModel.
 */
export const PageModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Page')
  .props({
    __typename: types.optional(types.literal("Page"), "Page"),
    shortName: types.union(types.undefined, types.null, types.string),
    metadata: types.union(types.undefined, MSTGQLRef(types.late((): any => ComponentMetaMetadataModel))),
    contentSections: types.union(types.undefined, types.null, types.array(types.union(types.null, types.union(types.late(() => ErrorModel), types.late(() => ComponentSectionsBottomActionsModel), types.late(() => ComponentSectionsFeatureColumnsGroupModel), types.late(() => ComponentSectionsFeatureRowsGroupModel), types.late(() => ComponentSectionsHeroModel), types.late(() => ComponentSectionsLargeVideoModel), types.late(() => ComponentSectionsLeadFormModel), types.late(() => ComponentSectionsPricingModel), types.late(() => ComponentSectionsRichTextModel), types.late(() => ComponentSectionsTestimonialsGroupModel))))),
    slug: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    updatedAt: types.union(types.undefined, types.null, types.frozen()),
    publishedAt: types.union(types.undefined, types.null, types.frozen()),
    localizations: types.union(types.undefined, types.null, types.late((): any => PageRelationResponseCollectionModel)),
    locale: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PageModelSelector extends QueryBuilder {
  get shortName() { return this.__attr(`shortName`) }
  get slug() { return this.__attr(`slug`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get publishedAt() { return this.__attr(`publishedAt`) }
  get locale() { return this.__attr(`locale`) }
  metadata(builder?: string | ComponentMetaMetadataModelSelector | ((selector: ComponentMetaMetadataModelSelector) => ComponentMetaMetadataModelSelector)) { return this.__child(`metadata`, ComponentMetaMetadataModelSelector, builder) }
  contentSections(builder?: string | PageContentSectionsDynamicZoneModelSelector | ((selector: PageContentSectionsDynamicZoneModelSelector) => PageContentSectionsDynamicZoneModelSelector)) { return this.__child(`contentSections`, PageContentSectionsDynamicZoneModelSelector, builder) }
  localizations(builder?: string | PageRelationResponseCollectionModelSelector | ((selector: PageRelationResponseCollectionModelSelector) => PageRelationResponseCollectionModelSelector)) { return this.__child(`localizations`, PageRelationResponseCollectionModelSelector, builder) }
}
export function selectFromPage() {
  return new PageModelSelector()
}

export const pageModelPrimitives = selectFromPage().shortName.slug.createdAt.updatedAt.publishedAt.locale
