import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  PageContentSectionsDynamicZoneInput: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  categoryImage?: Maybe<UploadFileEntityResponse>;
  categoryMetadata?: Maybe<ComponentMetaMetadata>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  categoryImage?: InputMaybe<Scalars['ID']>;
  categoryMetadata?: InputMaybe<ComponentMetaMetadataInput>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type Collection = {
  __typename?: 'Collection';
  backgroundImage?: Maybe<UploadFileEntityResponse>;
  collectionMetadata?: Maybe<ComponentMetaMetadata>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CollectionEntity = {
  __typename?: 'CollectionEntity';
  attributes?: Maybe<Collection>;
  id?: Maybe<Scalars['ID']>;
};

export type CollectionEntityResponse = {
  __typename?: 'CollectionEntityResponse';
  data?: Maybe<CollectionEntity>;
};

export type CollectionEntityResponseCollection = {
  __typename?: 'CollectionEntityResponseCollection';
  data: Array<CollectionEntity>;
  meta: ResponseCollectionMeta;
};

export type CollectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CollectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectionInput = {
  backgroundImage?: InputMaybe<Scalars['ID']>;
  collectionMetadata?: InputMaybe<ComponentMetaMetadataInput>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ComponentElementsFeature = {
  __typename?: 'ComponentElementsFeature';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentElementsFeatureColumn = {
  __typename?: 'ComponentElementsFeatureColumn';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentElementsFeatureColumnFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureColumnFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsFeatureColumnFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureColumnFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureFiltersInput>>>;
};

export type ComponentElementsFeatureInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentElementsFeatureRow = {
  __typename?: 'ComponentElementsFeatureRow';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<ComponentLinksLink>;
  media: UploadFileEntityResponse;
  title: Scalars['String'];
};

export type ComponentElementsFeatureRowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureRowFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsFeatureRowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureRowFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsFooterSection = {
  __typename?: 'ComponentElementsFooterSection';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentElementsFooterSectionLinksArgs = {
  filters?: InputMaybe<ComponentLinksLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentElementsFooterSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFooterSectionFiltersInput>>>;
  not?: InputMaybe<ComponentElementsFooterSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFooterSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsFooterSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentLinksLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentElementsLogos = {
  __typename?: 'ComponentElementsLogos';
  id: Scalars['ID'];
  logo?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentElementsLogosFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsLogosFiltersInput>>>;
  not?: InputMaybe<ComponentElementsLogosFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsLogosFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsNotificationBanner = {
  __typename?: 'ComponentElementsNotificationBanner';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  type: Enum_Componentelementsnotificationbanner_Type;
};

export type ComponentElementsNotificationBannerInput = {
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Componentelementsnotificationbanner_Type>;
};

export type ComponentElementsPlan = {
  __typename?: 'ComponentElementsPlan';
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<ComponentElementsFeature>>>;
  id: Scalars['ID'];
  isRecommended?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  pricePeriod?: Maybe<Scalars['String']>;
};


export type ComponentElementsPlanFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentElementsPlanFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsPlanFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  isRecommended?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsPlanFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsPlanFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  pricePeriod?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsProductTile = {
  __typename?: 'ComponentElementsProductTile';
  categories?: Maybe<CategoryRelationResponseCollection>;
  category_name?: Maybe<Scalars['String']>;
  collection_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featured_images?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  product_image?: Maybe<UploadFileEntityResponse>;
};


export type ComponentElementsProductTileCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentElementsProductTileFeatured_ImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentElementsTestimonial = {
  __typename?: 'ComponentElementsTestimonial';
  authorName?: Maybe<Scalars['String']>;
  authorTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFileEntityResponse>;
  picture?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentElementsTestimonialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsTestimonialFiltersInput>>>;
  authorName?: InputMaybe<StringFilterInput>;
  authorTitle?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsTestimonialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsTestimonialFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentLayoutFooter = {
  __typename?: 'ComponentLayoutFooter';
  columns?: Maybe<Array<Maybe<ComponentElementsFooterSection>>>;
  id: Scalars['ID'];
  logo?: Maybe<UploadFileEntityResponse>;
  smallText?: Maybe<Scalars['String']>;
};


export type ComponentLayoutFooterColumnsArgs = {
  filters?: InputMaybe<ComponentElementsFooterSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLayoutFooterInput = {
  columns?: InputMaybe<Array<InputMaybe<ComponentElementsFooterSectionInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  logo?: InputMaybe<Scalars['ID']>;
  smallText?: InputMaybe<Scalars['String']>;
};

export type ComponentLayoutNavbar = {
  __typename?: 'ComponentLayoutNavbar';
  button?: Maybe<ComponentLinksButtonLink>;
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
  logo: UploadFileEntityResponse;
};


export type ComponentLayoutNavbarLinksArgs = {
  filters?: InputMaybe<ComponentLinksLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLayoutNavbarInput = {
  button?: InputMaybe<ComponentLinksButtonLinkInput>;
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentLinksLinkInput>>>;
  logo?: InputMaybe<Scalars['ID']>;
};

export type ComponentLinksButton = {
  __typename?: 'ComponentLinksButton';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbutton_Type>;
};

export type ComponentLinksButtonLink = {
  __typename?: 'ComponentLinksButtonLink';
  id: Scalars['ID'];
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbuttonlink_Type>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentLinksButtonLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLinksButtonLinkFiltersInput>>>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentLinksButtonLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinksButtonLinkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentLinksButtonLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  newTab?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Componentlinksbuttonlink_Type>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentLinksLink = {
  __typename?: 'ComponentLinksLink';
  id: Scalars['ID'];
  newTab?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentLinksLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLinksLinkFiltersInput>>>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentLinksLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinksLinkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentLinksLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  newTab?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentMetaMetadata = {
  __typename?: 'ComponentMetaMetadata';
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shareImage?: Maybe<UploadFileEntityResponse>;
  twitterCardType?: Maybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: Maybe<Scalars['String']>;
};

export type ComponentMetaMetadataInput = {
  id?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  shareImage?: InputMaybe<Scalars['ID']>;
  twitterCardType?: InputMaybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsBottomActions = {
  __typename?: 'ComponentSectionsBottomActions';
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLink>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsBottomActionsButtonsArgs = {
  filters?: InputMaybe<ComponentLinksButtonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsFeatureColumnsGroup = {
  __typename?: 'ComponentSectionsFeatureColumnsGroup';
  features?: Maybe<Array<Maybe<ComponentElementsFeatureColumn>>>;
  id: Scalars['ID'];
};


export type ComponentSectionsFeatureColumnsGroupFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsFeatureColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsFeatureRowsGroup = {
  __typename?: 'ComponentSectionsFeatureRowsGroup';
  features?: Maybe<Array<Maybe<ComponentElementsFeatureRow>>>;
  id: Scalars['ID'];
};


export type ComponentSectionsFeatureRowsGroupFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsFeatureRowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLink>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFileEntityResponse>;
  smallTextWithLink?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsHeroButtonsArgs = {
  filters?: InputMaybe<ComponentLinksButtonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsLargeVideo = {
  __typename?: 'ComponentSectionsLargeVideo';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  poster?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
  video: UploadFileEntityResponse;
};

export type ComponentSectionsLeadForm = {
  __typename?: 'ComponentSectionsLeadForm';
  emailPlaceholder?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  submitButton?: Maybe<ComponentLinksButton>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsPricing = {
  __typename?: 'ComponentSectionsPricing';
  id: Scalars['ID'];
  plans?: Maybe<Array<Maybe<ComponentElementsPlan>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsPricingPlansArgs = {
  filters?: InputMaybe<ComponentElementsPlanFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsRichText = {
  __typename?: 'ComponentSectionsRichText';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentSectionsTestimonialsGroup = {
  __typename?: 'ComponentSectionsTestimonialsGroup';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<ComponentLinksLink>;
  logos?: Maybe<Array<Maybe<ComponentElementsLogos>>>;
  testimonials?: Maybe<Array<Maybe<ComponentElementsTestimonial>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsTestimonialsGroupLogosArgs = {
  filters?: InputMaybe<ComponentElementsLogosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsTestimonialsGroupTestimonialsArgs = {
  filters?: InputMaybe<ComponentElementsTestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription: Scalars['String'];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String'];
  metaViewport?: Maybe<Scalars['String']>;
  structuredData?: Maybe<Scalars['JSON']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentelementsnotificationbanner_Type {
  Alert = 'alert',
  Info = 'info',
  Warning = 'warning'
}

export enum Enum_Componentlinksbuttonlink_Type {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componentlinksbutton_Type {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componentmetametadata_Twittercardtype {
  App = 'app',
  Player = 'player',
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Leadformsubmission_Status {
  Contacted = 'contacted',
  Ignored = 'ignored',
  Seen = 'seen'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Category | Collection | ComponentElementsFeature | ComponentElementsFeatureColumn | ComponentElementsFeatureRow | ComponentElementsFooterSection | ComponentElementsLogos | ComponentElementsNotificationBanner | ComponentElementsPlan | ComponentElementsProductTile | ComponentElementsTestimonial | ComponentLayoutFooter | ComponentLayoutNavbar | ComponentLinksButton | ComponentLinksButtonLink | ComponentLinksLink | ComponentMetaMetadata | ComponentSectionsBottomActions | ComponentSectionsFeatureColumnsGroup | ComponentSectionsFeatureRowsGroup | ComponentSectionsHero | ComponentSectionsLargeVideo | ComponentSectionsLeadForm | ComponentSectionsPricing | ComponentSectionsRichText | ComponentSectionsTestimonialsGroup | ComponentSharedMetaSocial | ComponentSharedSeo | Global | I18NLocale | LeadFormSubmission | Page | Product | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Global = {
  __typename?: 'Global';
  createdAt?: Maybe<Scalars['DateTime']>;
  favicon?: Maybe<UploadFileEntityResponse>;
  footer?: Maybe<ComponentLayoutFooter>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GlobalRelationResponseCollection>;
  metaTitleSuffix: Scalars['String'];
  metadata?: Maybe<ComponentMetaMetadata>;
  navbar?: Maybe<ComponentLayoutNavbar>;
  notificationBanner?: Maybe<ComponentElementsNotificationBanner>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  favicon?: InputMaybe<Scalars['ID']>;
  footer?: InputMaybe<ComponentLayoutFooterInput>;
  metaTitleSuffix?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<ComponentMetaMetadataInput>;
  navbar?: InputMaybe<ComponentLayoutNavbarInput>;
  notificationBanner?: InputMaybe<ComponentElementsNotificationBannerInput>;
};

export type GlobalRelationResponseCollection = {
  __typename?: 'GlobalRelationResponseCollection';
  data: Array<GlobalEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type LeadFormSubmission = {
  __typename?: 'LeadFormSubmission';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Leadformsubmission_Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LeadFormSubmissionEntity = {
  __typename?: 'LeadFormSubmissionEntity';
  attributes?: Maybe<LeadFormSubmission>;
  id?: Maybe<Scalars['ID']>;
};

export type LeadFormSubmissionEntityResponse = {
  __typename?: 'LeadFormSubmissionEntityResponse';
  data?: Maybe<LeadFormSubmissionEntity>;
};

export type LeadFormSubmissionEntityResponseCollection = {
  __typename?: 'LeadFormSubmissionEntityResponseCollection';
  data: Array<LeadFormSubmissionEntity>;
  meta: ResponseCollectionMeta;
};

export type LeadFormSubmissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LeadFormSubmissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LeadFormSubmissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LeadFormSubmissionFiltersInput>>>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LeadFormSubmissionInput = {
  email?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Leadformsubmission_Status>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<CategoryEntityResponse>;
  createCollection?: Maybe<CollectionEntityResponse>;
  createGlobalLocalization?: Maybe<GlobalEntityResponse>;
  createLeadFormSubmission?: Maybe<LeadFormSubmissionEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCollection?: Maybe<CollectionEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteLeadFormSubmission?: Maybe<LeadFormSubmissionEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCollection?: Maybe<CollectionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateLeadFormSubmission?: Maybe<LeadFormSubmissionEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCollectionArgs = {
  data: CollectionInput;
};


export type MutationCreateGlobalLocalizationArgs = {
  data?: InputMaybe<GlobalInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateLeadFormSubmissionArgs = {
  data: LeadFormSubmissionInput;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGlobalArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteLeadFormSubmissionArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateCollectionArgs = {
  data: CollectionInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateLeadFormSubmissionArgs = {
  data: LeadFormSubmissionInput;
  id: Scalars['ID'];
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Page = {
  __typename?: 'Page';
  contentSections?: Maybe<Array<Maybe<PageContentSectionsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  metadata: ComponentMetaMetadata;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shortName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageContentSectionsDynamicZone = ComponentSectionsBottomActions | ComponentSectionsFeatureColumnsGroup | ComponentSectionsFeatureRowsGroup | ComponentSectionsHero | ComponentSectionsLargeVideo | ComponentSectionsLeadForm | ComponentSectionsPricing | ComponentSectionsRichText | ComponentSectionsTestimonialsGroup | Error;

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortName?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  contentSections?: InputMaybe<Array<Scalars['PageContentSectionsDynamicZoneInput']>>;
  metadata?: InputMaybe<ComponentMetaMetadataInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  shortName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  feature?: Maybe<Array<Maybe<ComponentElementsFeature>>>;
  featuredImages?: Maybe<UploadFileRelationResponseCollection>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productimage?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductFeatureArgs = {
  filters?: InputMaybe<ComponentElementsFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductFeaturedImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  feature?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureInput>>>;
  featuredImages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  productimage?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  collection?: Maybe<CollectionEntityResponse>;
  collections?: Maybe<CollectionEntityResponseCollection>;
  global?: Maybe<GlobalEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  leadFormSubmission?: Maybe<LeadFormSubmissionEntityResponse>;
  leadFormSubmissions?: Maybe<LeadFormSubmissionEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGlobalArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLeadFormSubmissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLeadFormSubmissionsArgs = {
  filters?: InputMaybe<LeadFormSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type FilePartsFragment = { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null };

export type PaginationFragment = { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } };

export type CreateLeadFormSubmissionMutationVariables = Exact<{
  data: LeadFormSubmissionInput;
}>;


export type CreateLeadFormSubmissionMutation = { __typename?: 'Mutation', createLeadFormSubmission?: { __typename?: 'LeadFormSubmissionEntityResponse', data?: { __typename?: 'LeadFormSubmissionEntity', id?: string | null, attributes?: { __typename?: 'LeadFormSubmission', email?: string | null, status?: Enum_Leadformsubmission_Status | null, location?: string | null } | null } | null } | null };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword?: { __typename?: 'UsersPermissionsPasswordPayload', ok: boolean } | null };

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string, description?: string | null, type?: string | null } | null } } };

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', username: string, email?: string | null } } };

export type ResetPasswordMutationVariables = Exact<{
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string } | null } } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name?: string | null, slug?: string | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type CategoryByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CategoryByIdQuery = { __typename?: 'Query', category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name?: string | null } | null } | null } | null };

export type CollectionsByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CollectionsByIdQuery = { __typename?: 'Query', collection?: { __typename?: 'CollectionEntityResponse', data?: { __typename?: 'CollectionEntity', id?: string | null, attributes?: { __typename?: 'Collection', name?: string | null } | null } | null } | null };

export type CollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsQuery = { __typename?: 'Query', collections?: { __typename?: 'CollectionEntityResponseCollection', data: Array<{ __typename?: 'CollectionEntity', id?: string | null, attributes?: { __typename?: 'Collection', name?: string | null, slug?: string | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GlobalQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GlobalQuery = { __typename?: 'Query', global?: { __typename?: 'GlobalEntityResponse', data?: { __typename?: 'GlobalEntity', id?: string | null, attributes?: { __typename?: 'Global', metaTitleSuffix: string, locale?: string | null, favicon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null, metadata?: { __typename?: 'ComponentMetaMetadata', id: string, metaTitle: string, metaDescription: string, twitterCardType?: Enum_Componentmetametadata_Twittercardtype | null, twitterUsername?: string | null, shareImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null } | null, notificationBanner?: { __typename?: 'ComponentElementsNotificationBanner', id: string, text?: string | null, type: Enum_Componentelementsnotificationbanner_Type } | null, navbar?: { __typename?: 'ComponentLayoutNavbar', id: string, links?: Array<{ __typename?: 'ComponentLinksLink', id: string, url: string, newTab?: boolean | null, text: string } | null> | null, button?: { __typename?: 'ComponentLinksButtonLink', id: string, url?: string | null, newTab?: boolean | null, text?: string | null, type?: Enum_Componentlinksbuttonlink_Type | null } | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null, footer?: { __typename?: 'ComponentLayoutFooter', id: string, smallText?: string | null, columns?: Array<{ __typename?: 'ComponentElementsFooterSection', id: string, title?: string | null, links?: Array<{ __typename?: 'ComponentLinksLink', id: string, url: string, newTab?: boolean | null, text: string } | null> | null } | null> | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null } | null, localizations?: { __typename?: 'GlobalRelationResponseCollection', data: Array<{ __typename?: 'GlobalEntity', id?: string | null, attributes?: { __typename?: 'Global', locale?: string | null, favicon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type LeadFormSubmissionByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type LeadFormSubmissionByIdQuery = { __typename?: 'Query', leadFormSubmission?: { __typename?: 'LeadFormSubmissionEntityResponse', data?: { __typename?: 'LeadFormSubmissionEntity', id?: string | null, attributes?: { __typename?: 'LeadFormSubmission', email?: string | null, status?: Enum_Leadformsubmission_Status | null, location?: string | null } | null } | null } | null };

export type LeadFormSubmissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type LeadFormSubmissionsQuery = { __typename?: 'Query', leadFormSubmission?: { __typename?: 'LeadFormSubmissionEntityResponse', data?: { __typename?: 'LeadFormSubmissionEntity', id?: string | null, attributes?: { __typename?: 'LeadFormSubmission', email?: string | null, status?: Enum_Leadformsubmission_Status | null, location?: string | null } | null } | null } | null };

export type GetPageQueryVariables = Exact<{
  slug: Scalars['String'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  publicationState: PublicationState;
  locale: Scalars['I18NLocaleCode'];
}>;


export type GetPageQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', locale?: string | null, slug?: string | null, localizations?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', locale?: string | null } | null }> } | null, metadata: { __typename?: 'ComponentMetaMetadata', metaTitle: string, metaDescription: string, twitterCardType?: Enum_Componentmetametadata_Twittercardtype | null, twitterUsername?: string | null, shareImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null }, contentSections?: Array<{ __typename: 'ComponentSectionsBottomActions', id: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentLinksButtonLink', id: string, newTab?: boolean | null, text?: string | null, type?: Enum_Componentlinksbuttonlink_Type | null, url?: string | null } | null> | null } | { __typename: 'ComponentSectionsFeatureColumnsGroup', id: string, features?: Array<{ __typename?: 'ComponentElementsFeatureColumn', id: string, description?: string | null, title: string, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsFeatureRowsGroup', id: string, features?: Array<{ __typename?: 'ComponentElementsFeatureRow', id: string, description?: string | null, title: string, link?: { __typename?: 'ComponentLinksLink', id: string, newTab?: boolean | null, text: string, url: string } | null, media: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } } | null> | null } | { __typename: 'ComponentSectionsHero', id: string, title?: string | null, description?: string | null, label?: string | null, buttons?: Array<{ __typename?: 'ComponentLinksButtonLink', id: string, newTab?: boolean | null, text?: string | null, type?: Enum_Componentlinksbuttonlink_Type | null, url?: string | null } | null> | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null } | { __typename: 'ComponentSectionsLargeVideo', id: string, description?: string | null, title?: string | null, poster?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null, video: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } } | { __typename: 'ComponentSectionsLeadForm', id: string, emailPlaceholder?: string | null, location?: string | null, title?: string | null, submitButton?: { __typename?: 'ComponentLinksButton', id: string, text?: string | null, type?: Enum_Componentlinksbutton_Type | null } | null } | { __typename: 'ComponentSectionsPricing', id: string, title?: string | null, plans?: Array<{ __typename?: 'ComponentElementsPlan', description?: string | null, id: string, isRecommended?: boolean | null, name?: string | null, price?: number | null, pricePeriod?: string | null, features?: Array<{ __typename?: 'ComponentElementsFeature', id: string, name?: string | null } | null> | null } | null> | null } | { __typename: 'ComponentSectionsRichText', id: string, content?: string | null } | { __typename: 'ComponentSectionsTestimonialsGroup', id: string, description?: string | null, title?: string | null, link?: { __typename?: 'ComponentLinksLink', id: string, newTab?: boolean | null, text: string, url: string } | null, logos?: Array<{ __typename?: 'ComponentElementsLogos', id: string, title?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null } | null> | null, testimonials?: Array<{ __typename?: 'ComponentElementsTestimonial', id: string, text?: string | null, authorName?: string | null, authorTitle?: string | null, link?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null } | null> | null } | { __typename: 'Error' } | null> | null } | null }> } | null };

export type PagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type PagePathsQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', slug?: string | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductByIdQuery = { __typename?: 'Query', product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name?: string | null, slug?: string | null } | null } | null } | null };

export type ProductsCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsCollectionQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name?: string | null, slug?: string | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null } | null };

export const FilePartsFragmentDoc = gql`
    fragment FileParts on UploadFileEntityResponse {
  data {
    id
    attributes {
      alternativeText
      width
      height
      mime
      url
      formats
    }
  }
}
    `;
export const PaginationFragmentDoc = gql`
    fragment Pagination on ResponseCollectionMeta {
  pagination {
    total
    page
    pageSize
    pageCount
  }
}
    `;
export const CreateLeadFormSubmissionDocument = gql`
    mutation CreateLeadFormSubmission($data: LeadFormSubmissionInput!) {
  createLeadFormSubmission(data: $data) {
    data {
      id
      attributes {
        email
        status
        location
      }
    }
  }
}
    `;
export type CreateLeadFormSubmissionMutationFn = Apollo.MutationFunction<CreateLeadFormSubmissionMutation, CreateLeadFormSubmissionMutationVariables>;

/**
 * __useCreateLeadFormSubmissionMutation__
 *
 * To run a mutation, you first call `useCreateLeadFormSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeadFormSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeadFormSubmissionMutation, { data, loading, error }] = useCreateLeadFormSubmissionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLeadFormSubmissionMutation(baseOptions?: Apollo.MutationHookOptions<CreateLeadFormSubmissionMutation, CreateLeadFormSubmissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLeadFormSubmissionMutation, CreateLeadFormSubmissionMutationVariables>(CreateLeadFormSubmissionDocument, options);
      }
export type CreateLeadFormSubmissionMutationHookResult = ReturnType<typeof useCreateLeadFormSubmissionMutation>;
export type CreateLeadFormSubmissionMutationResult = Apollo.MutationResult<CreateLeadFormSubmissionMutation>;
export type CreateLeadFormSubmissionMutationOptions = Apollo.BaseMutationOptions<CreateLeadFormSubmissionMutation, CreateLeadFormSubmissionMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      id
      username
      email
      confirmed
      blocked
      role {
        id
        name
        description
        type
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
    user {
      username
      email
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($password: String!, $passwordConfirmation: String!, $code: String!) {
  resetPassword(
    password: $password
    passwordConfirmation: $passwordConfirmation
    code: $code
  ) {
    jwt
    user {
      id
      username
      email
      confirmed
      blocked
      role {
        name
      }
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    data {
      id
      attributes {
        name
        slug
      }
    }
    meta {
      ...Pagination
    }
  }
}
    ${PaginationFragmentDoc}`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryByIdDocument = gql`
    query CategoryById($id: ID!) {
  category(id: $id) {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `;

/**
 * __useCategoryByIdQuery__
 *
 * To run a query within a React component, call `useCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryByIdQuery(baseOptions: Apollo.QueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
      }
export function useCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
        }
export type CategoryByIdQueryHookResult = ReturnType<typeof useCategoryByIdQuery>;
export type CategoryByIdLazyQueryHookResult = ReturnType<typeof useCategoryByIdLazyQuery>;
export type CategoryByIdQueryResult = Apollo.QueryResult<CategoryByIdQuery, CategoryByIdQueryVariables>;
export const CollectionsByIdDocument = gql`
    query CollectionsById($id: ID!) {
  collection(id: $id) {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `;

/**
 * __useCollectionsByIdQuery__
 *
 * To run a query within a React component, call `useCollectionsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectionsByIdQuery(baseOptions: Apollo.QueryHookOptions<CollectionsByIdQuery, CollectionsByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionsByIdQuery, CollectionsByIdQueryVariables>(CollectionsByIdDocument, options);
      }
export function useCollectionsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsByIdQuery, CollectionsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionsByIdQuery, CollectionsByIdQueryVariables>(CollectionsByIdDocument, options);
        }
export type CollectionsByIdQueryHookResult = ReturnType<typeof useCollectionsByIdQuery>;
export type CollectionsByIdLazyQueryHookResult = ReturnType<typeof useCollectionsByIdLazyQuery>;
export type CollectionsByIdQueryResult = Apollo.QueryResult<CollectionsByIdQuery, CollectionsByIdQueryVariables>;
export const CollectionsDocument = gql`
    query Collections {
  collections {
    data {
      id
      attributes {
        name
        slug
      }
    }
    meta {
      ...Pagination
    }
  }
}
    ${PaginationFragmentDoc}`;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
      }
export function useCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export type CollectionsQueryResult = Apollo.QueryResult<CollectionsQuery, CollectionsQueryVariables>;
export const GlobalDocument = gql`
    query Global($locale: I18NLocaleCode) {
  global(locale: $locale) {
    data {
      id
      attributes {
        favicon {
          data {
            attributes {
              name
              alternativeText
              url
            }
          }
        }
        metaTitleSuffix
        metadata {
          id
          metaTitle
          metaDescription
          twitterCardType
          twitterUsername
          shareImage {
            data {
              attributes {
                name
                alternativeText
                url
              }
            }
          }
        }
        notificationBanner {
          id
          text
          type
        }
        navbar {
          id
          links {
            id
            url
            newTab
            text
          }
          button {
            id
            url
            newTab
            text
            type
          }
          logo {
            data {
              attributes {
                name
                alternativeText
                url
              }
            }
          }
        }
        footer {
          id
          smallText
          columns {
            id
            title
            links {
              id
              url
              newTab
              text
            }
          }
          logo {
            data {
              attributes {
                name
                alternativeText
                url
              }
            }
          }
        }
        locale
        localizations {
          data {
            id
            attributes {
              favicon {
                data {
                  attributes {
                    name
                    alternativeText
                    url
                  }
                }
              }
              locale
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGlobalQuery__
 *
 * To run a query within a React component, call `useGlobalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGlobalQuery(baseOptions?: Apollo.QueryHookOptions<GlobalQuery, GlobalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlobalQuery, GlobalQueryVariables>(GlobalDocument, options);
      }
export function useGlobalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlobalQuery, GlobalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlobalQuery, GlobalQueryVariables>(GlobalDocument, options);
        }
export type GlobalQueryHookResult = ReturnType<typeof useGlobalQuery>;
export type GlobalLazyQueryHookResult = ReturnType<typeof useGlobalLazyQuery>;
export type GlobalQueryResult = Apollo.QueryResult<GlobalQuery, GlobalQueryVariables>;
export const LeadFormSubmissionByIdDocument = gql`
    query LeadFormSubmissionById($id: ID) {
  leadFormSubmission {
    data {
      id
      attributes {
        email
        status
        location
      }
    }
  }
}
    `;

/**
 * __useLeadFormSubmissionByIdQuery__
 *
 * To run a query within a React component, call `useLeadFormSubmissionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeadFormSubmissionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeadFormSubmissionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLeadFormSubmissionByIdQuery(baseOptions?: Apollo.QueryHookOptions<LeadFormSubmissionByIdQuery, LeadFormSubmissionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeadFormSubmissionByIdQuery, LeadFormSubmissionByIdQueryVariables>(LeadFormSubmissionByIdDocument, options);
      }
export function useLeadFormSubmissionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeadFormSubmissionByIdQuery, LeadFormSubmissionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeadFormSubmissionByIdQuery, LeadFormSubmissionByIdQueryVariables>(LeadFormSubmissionByIdDocument, options);
        }
export type LeadFormSubmissionByIdQueryHookResult = ReturnType<typeof useLeadFormSubmissionByIdQuery>;
export type LeadFormSubmissionByIdLazyQueryHookResult = ReturnType<typeof useLeadFormSubmissionByIdLazyQuery>;
export type LeadFormSubmissionByIdQueryResult = Apollo.QueryResult<LeadFormSubmissionByIdQuery, LeadFormSubmissionByIdQueryVariables>;
export const LeadFormSubmissionsDocument = gql`
    query LeadFormSubmissions {
  leadFormSubmission {
    data {
      id
      attributes {
        email
        status
        location
      }
    }
  }
}
    `;

/**
 * __useLeadFormSubmissionsQuery__
 *
 * To run a query within a React component, call `useLeadFormSubmissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeadFormSubmissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeadFormSubmissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLeadFormSubmissionsQuery(baseOptions?: Apollo.QueryHookOptions<LeadFormSubmissionsQuery, LeadFormSubmissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeadFormSubmissionsQuery, LeadFormSubmissionsQueryVariables>(LeadFormSubmissionsDocument, options);
      }
export function useLeadFormSubmissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeadFormSubmissionsQuery, LeadFormSubmissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeadFormSubmissionsQuery, LeadFormSubmissionsQueryVariables>(LeadFormSubmissionsDocument, options);
        }
export type LeadFormSubmissionsQueryHookResult = ReturnType<typeof useLeadFormSubmissionsQuery>;
export type LeadFormSubmissionsLazyQueryHookResult = ReturnType<typeof useLeadFormSubmissionsLazyQuery>;
export type LeadFormSubmissionsQueryResult = Apollo.QueryResult<LeadFormSubmissionsQuery, LeadFormSubmissionsQueryVariables>;
export const GetPageDocument = gql`
    query GetPage($slug: String!, $sort: [String], $publicationState: PublicationState!, $locale: I18NLocaleCode!) {
  pages(
    filters: {slug: {eq: $slug}}
    sort: $sort
    publicationState: $publicationState
    locale: $locale
  ) {
    data {
      id
      attributes {
        locale
        localizations {
          data {
            id
            attributes {
              locale
            }
          }
        }
        slug
        metadata {
          metaTitle
          metaDescription
          shareImage {
            ...FileParts
          }
          twitterCardType
          twitterUsername
        }
        contentSections {
          __typename
          ... on ComponentSectionsBottomActions {
            id
            title
            buttons {
              id
              newTab
              text
              type
              url
            }
          }
          ... on ComponentSectionsHero {
            id
            buttons {
              id
              newTab
              text
              type
              url
            }
            title
            description
            label
            picture {
              ...FileParts
            }
          }
          ... on ComponentSectionsFeatureColumnsGroup {
            id
            features {
              id
              description
              icon {
                ...FileParts
              }
              title
            }
          }
          ... on ComponentSectionsFeatureRowsGroup {
            id
            features {
              id
              description
              link {
                id
                newTab
                text
                url
              }
              media {
                ...FileParts
              }
              title
            }
          }
          ... on ComponentSectionsTestimonialsGroup {
            id
            description
            link {
              id
              newTab
              text
              url
            }
            logos {
              id
              title
              logo {
                ...FileParts
              }
            }
            testimonials {
              id
              logo {
                ...FileParts
              }
              picture {
                ...FileParts
              }
              text
              authorName
              authorTitle
              link
            }
            title
          }
          ... on ComponentSectionsLargeVideo {
            id
            description
            title
            poster {
              ...FileParts
            }
            video {
              ...FileParts
            }
          }
          ... on ComponentSectionsRichText {
            id
            content
          }
          ... on ComponentSectionsPricing {
            id
            title
            plans {
              description
              features {
                id
                name
              }
              id
              isRecommended
              name
              price
              pricePeriod
            }
          }
          ... on ComponentSectionsLeadForm {
            id
            emailPlaceholder
            location
            submitButton {
              id
              text
              type
            }
            title
          }
        }
      }
    }
  }
}
    ${FilePartsFragmentDoc}`;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      sort: // value for 'sort'
 *      publicationState: // value for 'publicationState'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, options);
      }
export function useGetPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, options);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<GetPageQuery, GetPageQueryVariables>;
export const PagePathsDocument = gql`
    query PagePaths {
  pages {
    data {
      attributes {
        slug
      }
    }
    meta {
      ...Pagination
    }
  }
}
    ${PaginationFragmentDoc}`;

/**
 * __usePagePathsQuery__
 *
 * To run a query within a React component, call `usePagePathsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagePathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagePathsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePagePathsQuery(baseOptions?: Apollo.QueryHookOptions<PagePathsQuery, PagePathsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagePathsQuery, PagePathsQueryVariables>(PagePathsDocument, options);
      }
export function usePagePathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagePathsQuery, PagePathsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagePathsQuery, PagePathsQueryVariables>(PagePathsDocument, options);
        }
export type PagePathsQueryHookResult = ReturnType<typeof usePagePathsQuery>;
export type PagePathsLazyQueryHookResult = ReturnType<typeof usePagePathsLazyQuery>;
export type PagePathsQueryResult = Apollo.QueryResult<PagePathsQuery, PagePathsQueryVariables>;
export const ProductByIdDocument = gql`
    query ProductById($id: ID!) {
  product(id: $id) {
    data {
      id
      attributes {
        name
        slug
      }
    }
  }
}
    `;

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions: Apollo.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
      }
export function useProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdQueryResult = Apollo.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export const ProductsCollectionDocument = gql`
    query ProductsCollection {
  products {
    data {
      id
      attributes {
        name
        slug
      }
    }
    meta {
      ...Pagination
    }
  }
}
    ${PaginationFragmentDoc}`;

/**
 * __useProductsCollectionQuery__
 *
 * To run a query within a React component, call `useProductsCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsCollectionQuery(baseOptions?: Apollo.QueryHookOptions<ProductsCollectionQuery, ProductsCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsCollectionQuery, ProductsCollectionQueryVariables>(ProductsCollectionDocument, options);
      }
export function useProductsCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsCollectionQuery, ProductsCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsCollectionQuery, ProductsCollectionQueryVariables>(ProductsCollectionDocument, options);
        }
export type ProductsCollectionQueryHookResult = ReturnType<typeof useProductsCollectionQuery>;
export type ProductsCollectionLazyQueryHookResult = ReturnType<typeof useProductsCollectionLazyQuery>;
export type ProductsCollectionQueryResult = Apollo.QueryResult<ProductsCollectionQuery, ProductsCollectionQueryVariables>;
export const UserDocument = gql`
    query User {
  user: me {
    id
    username
    email
    confirmed
    blocked
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export type CategoryKeySpecifier = ('categoryImage' | 'categoryMetadata' | 'createdAt' | 'name' | 'products' | 'publishedAt' | 'slug' | 'updatedAt' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	categoryImage?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryEntityKeySpecifier = ('attributes' | 'id' | CategoryEntityKeySpecifier)[];
export type CategoryEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryEntityResponseKeySpecifier = ('data' | CategoryEntityResponseKeySpecifier)[];
export type CategoryEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryEntityResponseCollectionKeySpecifier = ('data' | 'meta' | CategoryEntityResponseCollectionKeySpecifier)[];
export type CategoryEntityResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryRelationResponseCollectionKeySpecifier = ('data' | CategoryRelationResponseCollectionKeySpecifier)[];
export type CategoryRelationResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionKeySpecifier = ('backgroundImage' | 'collectionMetadata' | 'createdAt' | 'description' | 'name' | 'publishedAt' | 'slug' | 'updatedAt' | CollectionKeySpecifier)[];
export type CollectionFieldPolicy = {
	backgroundImage?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionEntityKeySpecifier = ('attributes' | 'id' | CollectionEntityKeySpecifier)[];
export type CollectionEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionEntityResponseKeySpecifier = ('data' | CollectionEntityResponseKeySpecifier)[];
export type CollectionEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionEntityResponseCollectionKeySpecifier = ('data' | 'meta' | CollectionEntityResponseCollectionKeySpecifier)[];
export type CollectionEntityResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentElementsFeatureKeySpecifier = ('id' | 'name' | ComponentElementsFeatureKeySpecifier)[];
export type ComponentElementsFeatureFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentElementsFeatureColumnKeySpecifier = ('description' | 'icon' | 'id' | 'title' | ComponentElementsFeatureColumnKeySpecifier)[];
export type ComponentElementsFeatureColumnFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentElementsFeatureRowKeySpecifier = ('description' | 'id' | 'link' | 'media' | 'title' | ComponentElementsFeatureRowKeySpecifier)[];
export type ComponentElementsFeatureRowFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentElementsFooterSectionKeySpecifier = ('id' | 'links' | 'title' | ComponentElementsFooterSectionKeySpecifier)[];
export type ComponentElementsFooterSectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentElementsLogosKeySpecifier = ('id' | 'logo' | 'title' | ComponentElementsLogosKeySpecifier)[];
export type ComponentElementsLogosFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentElementsNotificationBannerKeySpecifier = ('id' | 'text' | 'type' | ComponentElementsNotificationBannerKeySpecifier)[];
export type ComponentElementsNotificationBannerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentElementsPlanKeySpecifier = ('description' | 'features' | 'id' | 'isRecommended' | 'name' | 'price' | 'pricePeriod' | ComponentElementsPlanKeySpecifier)[];
export type ComponentElementsPlanFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRecommended?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	pricePeriod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentElementsProductTileKeySpecifier = ('categories' | 'category_name' | 'collection_name' | 'description' | 'featured_images' | 'id' | 'name' | 'price' | 'product_image' | ComponentElementsProductTileKeySpecifier)[];
export type ComponentElementsProductTileFieldPolicy = {
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category_name?: FieldPolicy<any> | FieldReadFunction<any>,
	collection_name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	featured_images?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	product_image?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentElementsTestimonialKeySpecifier = ('authorName' | 'authorTitle' | 'id' | 'link' | 'logo' | 'picture' | 'text' | ComponentElementsTestimonialKeySpecifier)[];
export type ComponentElementsTestimonialFieldPolicy = {
	authorName?: FieldPolicy<any> | FieldReadFunction<any>,
	authorTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentLayoutFooterKeySpecifier = ('columns' | 'id' | 'logo' | 'smallText' | ComponentLayoutFooterKeySpecifier)[];
export type ComponentLayoutFooterFieldPolicy = {
	columns?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	smallText?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentLayoutNavbarKeySpecifier = ('button' | 'id' | 'links' | 'logo' | ComponentLayoutNavbarKeySpecifier)[];
export type ComponentLayoutNavbarFieldPolicy = {
	button?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentLinksButtonKeySpecifier = ('id' | 'text' | 'type' | ComponentLinksButtonKeySpecifier)[];
export type ComponentLinksButtonFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentLinksButtonLinkKeySpecifier = ('id' | 'newTab' | 'text' | 'type' | 'url' | ComponentLinksButtonLinkKeySpecifier)[];
export type ComponentLinksButtonLinkFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	newTab?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentLinksLinkKeySpecifier = ('id' | 'newTab' | 'text' | 'url' | ComponentLinksLinkKeySpecifier)[];
export type ComponentLinksLinkFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	newTab?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentMetaMetadataKeySpecifier = ('id' | 'metaDescription' | 'metaTitle' | 'shareImage' | 'twitterCardType' | 'twitterUsername' | ComponentMetaMetadataKeySpecifier)[];
export type ComponentMetaMetadataFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	metaTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	shareImage?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterCardType?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterUsername?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSectionsBottomActionsKeySpecifier = ('buttons' | 'id' | 'title' | ComponentSectionsBottomActionsKeySpecifier)[];
export type ComponentSectionsBottomActionsFieldPolicy = {
	buttons?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSectionsFeatureColumnsGroupKeySpecifier = ('features' | 'id' | ComponentSectionsFeatureColumnsGroupKeySpecifier)[];
export type ComponentSectionsFeatureColumnsGroupFieldPolicy = {
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSectionsFeatureRowsGroupKeySpecifier = ('features' | 'id' | ComponentSectionsFeatureRowsGroupKeySpecifier)[];
export type ComponentSectionsFeatureRowsGroupFieldPolicy = {
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSectionsHeroKeySpecifier = ('buttons' | 'description' | 'id' | 'label' | 'picture' | 'smallTextWithLink' | 'title' | ComponentSectionsHeroKeySpecifier)[];
export type ComponentSectionsHeroFieldPolicy = {
	buttons?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	smallTextWithLink?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSectionsLargeVideoKeySpecifier = ('description' | 'id' | 'poster' | 'title' | 'video' | ComponentSectionsLargeVideoKeySpecifier)[];
export type ComponentSectionsLargeVideoFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poster?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSectionsLeadFormKeySpecifier = ('emailPlaceholder' | 'id' | 'location' | 'submitButton' | 'title' | ComponentSectionsLeadFormKeySpecifier)[];
export type ComponentSectionsLeadFormFieldPolicy = {
	emailPlaceholder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	submitButton?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSectionsPricingKeySpecifier = ('id' | 'plans' | 'title' | ComponentSectionsPricingKeySpecifier)[];
export type ComponentSectionsPricingFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	plans?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSectionsRichTextKeySpecifier = ('content' | 'id' | ComponentSectionsRichTextKeySpecifier)[];
export type ComponentSectionsRichTextFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSectionsTestimonialsGroupKeySpecifier = ('description' | 'id' | 'link' | 'logos' | 'testimonials' | 'title' | ComponentSectionsTestimonialsGroupKeySpecifier)[];
export type ComponentSectionsTestimonialsGroupFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	logos?: FieldPolicy<any> | FieldReadFunction<any>,
	testimonials?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSharedMetaSocialKeySpecifier = ('description' | 'id' | 'image' | 'socialNetwork' | 'title' | ComponentSharedMetaSocialKeySpecifier)[];
export type ComponentSharedMetaSocialFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	socialNetwork?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentSharedSeoKeySpecifier = ('canonicalURL' | 'id' | 'keywords' | 'metaDescription' | 'metaImage' | 'metaRobots' | 'metaSocial' | 'metaTitle' | 'metaViewport' | 'structuredData' | ComponentSharedSeoKeySpecifier)[];
export type ComponentSharedSeoFieldPolicy = {
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	metaImage?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobots?: FieldPolicy<any> | FieldReadFunction<any>,
	metaSocial?: FieldPolicy<any> | FieldReadFunction<any>,
	metaTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	metaViewport?: FieldPolicy<any> | FieldReadFunction<any>,
	structuredData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorKeySpecifier = ('code' | 'message' | ErrorKeySpecifier)[];
export type ErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GlobalKeySpecifier = ('createdAt' | 'favicon' | 'footer' | 'locale' | 'localizations' | 'metaTitleSuffix' | 'metadata' | 'navbar' | 'notificationBanner' | 'updatedAt' | GlobalKeySpecifier)[];
export type GlobalFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	favicon?: FieldPolicy<any> | FieldReadFunction<any>,
	footer?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	localizations?: FieldPolicy<any> | FieldReadFunction<any>,
	metaTitleSuffix?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	navbar?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationBanner?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GlobalEntityKeySpecifier = ('attributes' | 'id' | GlobalEntityKeySpecifier)[];
export type GlobalEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GlobalEntityResponseKeySpecifier = ('data' | GlobalEntityResponseKeySpecifier)[];
export type GlobalEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GlobalRelationResponseCollectionKeySpecifier = ('data' | GlobalRelationResponseCollectionKeySpecifier)[];
export type GlobalRelationResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type I18NLocaleKeySpecifier = ('code' | 'createdAt' | 'name' | 'updatedAt' | I18NLocaleKeySpecifier)[];
export type I18NLocaleFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type I18NLocaleEntityKeySpecifier = ('attributes' | 'id' | I18NLocaleEntityKeySpecifier)[];
export type I18NLocaleEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type I18NLocaleEntityResponseKeySpecifier = ('data' | I18NLocaleEntityResponseKeySpecifier)[];
export type I18NLocaleEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type I18NLocaleEntityResponseCollectionKeySpecifier = ('data' | 'meta' | I18NLocaleEntityResponseCollectionKeySpecifier)[];
export type I18NLocaleEntityResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeadFormSubmissionKeySpecifier = ('createdAt' | 'email' | 'location' | 'status' | 'updatedAt' | LeadFormSubmissionKeySpecifier)[];
export type LeadFormSubmissionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeadFormSubmissionEntityKeySpecifier = ('attributes' | 'id' | LeadFormSubmissionEntityKeySpecifier)[];
export type LeadFormSubmissionEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeadFormSubmissionEntityResponseKeySpecifier = ('data' | LeadFormSubmissionEntityResponseKeySpecifier)[];
export type LeadFormSubmissionEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeadFormSubmissionEntityResponseCollectionKeySpecifier = ('data' | 'meta' | LeadFormSubmissionEntityResponseCollectionKeySpecifier)[];
export type LeadFormSubmissionEntityResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createCategory' | 'createCollection' | 'createGlobalLocalization' | 'createLeadFormSubmission' | 'createPage' | 'createPageLocalization' | 'createProduct' | 'createUploadFile' | 'createUsersPermissionsRole' | 'createUsersPermissionsUser' | 'deleteCategory' | 'deleteCollection' | 'deleteGlobal' | 'deleteLeadFormSubmission' | 'deletePage' | 'deleteProduct' | 'deleteUploadFile' | 'deleteUsersPermissionsRole' | 'deleteUsersPermissionsUser' | 'emailConfirmation' | 'forgotPassword' | 'login' | 'multipleUpload' | 'register' | 'removeFile' | 'resetPassword' | 'updateCategory' | 'updateCollection' | 'updateFileInfo' | 'updateGlobal' | 'updateLeadFormSubmission' | 'updatePage' | 'updateProduct' | 'updateUploadFile' | 'updateUsersPermissionsRole' | 'updateUsersPermissionsUser' | 'upload' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	createCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	createGlobalLocalization?: FieldPolicy<any> | FieldReadFunction<any>,
	createLeadFormSubmission?: FieldPolicy<any> | FieldReadFunction<any>,
	createPage?: FieldPolicy<any> | FieldReadFunction<any>,
	createPageLocalization?: FieldPolicy<any> | FieldReadFunction<any>,
	createProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	createUploadFile?: FieldPolicy<any> | FieldReadFunction<any>,
	createUsersPermissionsRole?: FieldPolicy<any> | FieldReadFunction<any>,
	createUsersPermissionsUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGlobal?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteLeadFormSubmission?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUploadFile?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUsersPermissionsRole?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUsersPermissionsUser?: FieldPolicy<any> | FieldReadFunction<any>,
	emailConfirmation?: FieldPolicy<any> | FieldReadFunction<any>,
	forgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	multipleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	removeFile?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFileInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGlobal?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLeadFormSubmission?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePage?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUploadFile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUsersPermissionsRole?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUsersPermissionsUser?: FieldPolicy<any> | FieldReadFunction<any>,
	upload?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('contentSections' | 'createdAt' | 'locale' | 'localizations' | 'metadata' | 'publishedAt' | 'shortName' | 'slug' | 'updatedAt' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	contentSections?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	localizations?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	shortName?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageEntityKeySpecifier = ('attributes' | 'id' | PageEntityKeySpecifier)[];
export type PageEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageEntityResponseKeySpecifier = ('data' | PageEntityResponseKeySpecifier)[];
export type PageEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageEntityResponseCollectionKeySpecifier = ('data' | 'meta' | PageEntityResponseCollectionKeySpecifier)[];
export type PageEntityResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageRelationResponseCollectionKeySpecifier = ('data' | PageRelationResponseCollectionKeySpecifier)[];
export type PageRelationResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationKeySpecifier = ('page' | 'pageCount' | 'pageSize' | 'total' | PaginationKeySpecifier)[];
export type PaginationFieldPolicy = {
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('categories' | 'createdAt' | 'description' | 'feature' | 'featuredImages' | 'name' | 'price' | 'productimage' | 'publishedAt' | 'slug' | 'updatedAt' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImages?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	productimage?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductEntityKeySpecifier = ('attributes' | 'id' | ProductEntityKeySpecifier)[];
export type ProductEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductEntityResponseKeySpecifier = ('data' | ProductEntityResponseKeySpecifier)[];
export type ProductEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductEntityResponseCollectionKeySpecifier = ('data' | 'meta' | ProductEntityResponseCollectionKeySpecifier)[];
export type ProductEntityResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductRelationResponseCollectionKeySpecifier = ('data' | ProductRelationResponseCollectionKeySpecifier)[];
export type ProductRelationResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('categories' | 'category' | 'collection' | 'collections' | 'global' | 'i18NLocale' | 'i18NLocales' | 'leadFormSubmission' | 'leadFormSubmissions' | 'me' | 'page' | 'pages' | 'product' | 'products' | 'uploadFile' | 'uploadFiles' | 'usersPermissionsRole' | 'usersPermissionsRoles' | 'usersPermissionsUser' | 'usersPermissionsUsers' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	global?: FieldPolicy<any> | FieldReadFunction<any>,
	i18NLocale?: FieldPolicy<any> | FieldReadFunction<any>,
	i18NLocales?: FieldPolicy<any> | FieldReadFunction<any>,
	leadFormSubmission?: FieldPolicy<any> | FieldReadFunction<any>,
	leadFormSubmissions?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadFile?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	usersPermissionsRole?: FieldPolicy<any> | FieldReadFunction<any>,
	usersPermissionsRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	usersPermissionsUser?: FieldPolicy<any> | FieldReadFunction<any>,
	usersPermissionsUsers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResponseCollectionMetaKeySpecifier = ('pagination' | ResponseCollectionMetaKeySpecifier)[];
export type ResponseCollectionMetaFieldPolicy = {
	pagination?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileKeySpecifier = ('alternativeText' | 'caption' | 'createdAt' | 'ext' | 'formats' | 'hash' | 'height' | 'mime' | 'name' | 'previewUrl' | 'provider' | 'provider_metadata' | 'related' | 'size' | 'updatedAt' | 'url' | 'width' | UploadFileKeySpecifier)[];
export type UploadFileFieldPolicy = {
	alternativeText?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	ext?: FieldPolicy<any> | FieldReadFunction<any>,
	formats?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	mime?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	previewUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	provider_metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	related?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileEntityKeySpecifier = ('attributes' | 'id' | UploadFileEntityKeySpecifier)[];
export type UploadFileEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileEntityResponseKeySpecifier = ('data' | UploadFileEntityResponseKeySpecifier)[];
export type UploadFileEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileEntityResponseCollectionKeySpecifier = ('data' | 'meta' | UploadFileEntityResponseCollectionKeySpecifier)[];
export type UploadFileEntityResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileRelationResponseCollectionKeySpecifier = ('data' | UploadFileRelationResponseCollectionKeySpecifier)[];
export type UploadFileRelationResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsCreateRolePayloadKeySpecifier = ('ok' | UsersPermissionsCreateRolePayloadKeySpecifier)[];
export type UsersPermissionsCreateRolePayloadFieldPolicy = {
	ok?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsDeleteRolePayloadKeySpecifier = ('ok' | UsersPermissionsDeleteRolePayloadKeySpecifier)[];
export type UsersPermissionsDeleteRolePayloadFieldPolicy = {
	ok?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsLoginPayloadKeySpecifier = ('jwt' | 'user' | UsersPermissionsLoginPayloadKeySpecifier)[];
export type UsersPermissionsLoginPayloadFieldPolicy = {
	jwt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsMeKeySpecifier = ('blocked' | 'confirmed' | 'email' | 'id' | 'role' | 'username' | UsersPermissionsMeKeySpecifier)[];
export type UsersPermissionsMeFieldPolicy = {
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsMeRoleKeySpecifier = ('description' | 'id' | 'name' | 'type' | UsersPermissionsMeRoleKeySpecifier)[];
export type UsersPermissionsMeRoleFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsPasswordPayloadKeySpecifier = ('ok' | UsersPermissionsPasswordPayloadKeySpecifier)[];
export type UsersPermissionsPasswordPayloadFieldPolicy = {
	ok?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsPermissionKeySpecifier = ('action' | 'createdAt' | 'role' | 'updatedAt' | UsersPermissionsPermissionKeySpecifier)[];
export type UsersPermissionsPermissionFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsPermissionEntityKeySpecifier = ('attributes' | 'id' | UsersPermissionsPermissionEntityKeySpecifier)[];
export type UsersPermissionsPermissionEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsPermissionRelationResponseCollectionKeySpecifier = ('data' | UsersPermissionsPermissionRelationResponseCollectionKeySpecifier)[];
export type UsersPermissionsPermissionRelationResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleKeySpecifier = ('createdAt' | 'description' | 'name' | 'permissions' | 'type' | 'updatedAt' | 'users' | UsersPermissionsRoleKeySpecifier)[];
export type UsersPermissionsRoleFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleEntityKeySpecifier = ('attributes' | 'id' | UsersPermissionsRoleEntityKeySpecifier)[];
export type UsersPermissionsRoleEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleEntityResponseKeySpecifier = ('data' | UsersPermissionsRoleEntityResponseKeySpecifier)[];
export type UsersPermissionsRoleEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleEntityResponseCollectionKeySpecifier = ('data' | 'meta' | UsersPermissionsRoleEntityResponseCollectionKeySpecifier)[];
export type UsersPermissionsRoleEntityResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUpdateRolePayloadKeySpecifier = ('ok' | UsersPermissionsUpdateRolePayloadKeySpecifier)[];
export type UsersPermissionsUpdateRolePayloadFieldPolicy = {
	ok?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserKeySpecifier = ('blocked' | 'confirmed' | 'createdAt' | 'email' | 'provider' | 'role' | 'updatedAt' | 'username' | UsersPermissionsUserKeySpecifier)[];
export type UsersPermissionsUserFieldPolicy = {
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserEntityKeySpecifier = ('attributes' | 'id' | UsersPermissionsUserEntityKeySpecifier)[];
export type UsersPermissionsUserEntityFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserEntityResponseKeySpecifier = ('data' | UsersPermissionsUserEntityResponseKeySpecifier)[];
export type UsersPermissionsUserEntityResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserEntityResponseCollectionKeySpecifier = ('data' | 'meta' | UsersPermissionsUserEntityResponseCollectionKeySpecifier)[];
export type UsersPermissionsUserEntityResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserRelationResponseCollectionKeySpecifier = ('data' | UsersPermissionsUserRelationResponseCollectionKeySpecifier)[];
export type UsersPermissionsUserRelationResponseCollectionFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	CategoryEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryEntityKeySpecifier | (() => undefined | CategoryEntityKeySpecifier),
		fields?: CategoryEntityFieldPolicy,
	},
	CategoryEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryEntityResponseKeySpecifier | (() => undefined | CategoryEntityResponseKeySpecifier),
		fields?: CategoryEntityResponseFieldPolicy,
	},
	CategoryEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryEntityResponseCollectionKeySpecifier | (() => undefined | CategoryEntityResponseCollectionKeySpecifier),
		fields?: CategoryEntityResponseCollectionFieldPolicy,
	},
	CategoryRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryRelationResponseCollectionKeySpecifier | (() => undefined | CategoryRelationResponseCollectionKeySpecifier),
		fields?: CategoryRelationResponseCollectionFieldPolicy,
	},
	Collection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionKeySpecifier | (() => undefined | CollectionKeySpecifier),
		fields?: CollectionFieldPolicy,
	},
	CollectionEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionEntityKeySpecifier | (() => undefined | CollectionEntityKeySpecifier),
		fields?: CollectionEntityFieldPolicy,
	},
	CollectionEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionEntityResponseKeySpecifier | (() => undefined | CollectionEntityResponseKeySpecifier),
		fields?: CollectionEntityResponseFieldPolicy,
	},
	CollectionEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionEntityResponseCollectionKeySpecifier | (() => undefined | CollectionEntityResponseCollectionKeySpecifier),
		fields?: CollectionEntityResponseCollectionFieldPolicy,
	},
	ComponentElementsFeature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentElementsFeatureKeySpecifier | (() => undefined | ComponentElementsFeatureKeySpecifier),
		fields?: ComponentElementsFeatureFieldPolicy,
	},
	ComponentElementsFeatureColumn?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentElementsFeatureColumnKeySpecifier | (() => undefined | ComponentElementsFeatureColumnKeySpecifier),
		fields?: ComponentElementsFeatureColumnFieldPolicy,
	},
	ComponentElementsFeatureRow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentElementsFeatureRowKeySpecifier | (() => undefined | ComponentElementsFeatureRowKeySpecifier),
		fields?: ComponentElementsFeatureRowFieldPolicy,
	},
	ComponentElementsFooterSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentElementsFooterSectionKeySpecifier | (() => undefined | ComponentElementsFooterSectionKeySpecifier),
		fields?: ComponentElementsFooterSectionFieldPolicy,
	},
	ComponentElementsLogos?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentElementsLogosKeySpecifier | (() => undefined | ComponentElementsLogosKeySpecifier),
		fields?: ComponentElementsLogosFieldPolicy,
	},
	ComponentElementsNotificationBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentElementsNotificationBannerKeySpecifier | (() => undefined | ComponentElementsNotificationBannerKeySpecifier),
		fields?: ComponentElementsNotificationBannerFieldPolicy,
	},
	ComponentElementsPlan?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentElementsPlanKeySpecifier | (() => undefined | ComponentElementsPlanKeySpecifier),
		fields?: ComponentElementsPlanFieldPolicy,
	},
	ComponentElementsProductTile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentElementsProductTileKeySpecifier | (() => undefined | ComponentElementsProductTileKeySpecifier),
		fields?: ComponentElementsProductTileFieldPolicy,
	},
	ComponentElementsTestimonial?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentElementsTestimonialKeySpecifier | (() => undefined | ComponentElementsTestimonialKeySpecifier),
		fields?: ComponentElementsTestimonialFieldPolicy,
	},
	ComponentLayoutFooter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentLayoutFooterKeySpecifier | (() => undefined | ComponentLayoutFooterKeySpecifier),
		fields?: ComponentLayoutFooterFieldPolicy,
	},
	ComponentLayoutNavbar?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentLayoutNavbarKeySpecifier | (() => undefined | ComponentLayoutNavbarKeySpecifier),
		fields?: ComponentLayoutNavbarFieldPolicy,
	},
	ComponentLinksButton?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentLinksButtonKeySpecifier | (() => undefined | ComponentLinksButtonKeySpecifier),
		fields?: ComponentLinksButtonFieldPolicy,
	},
	ComponentLinksButtonLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentLinksButtonLinkKeySpecifier | (() => undefined | ComponentLinksButtonLinkKeySpecifier),
		fields?: ComponentLinksButtonLinkFieldPolicy,
	},
	ComponentLinksLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentLinksLinkKeySpecifier | (() => undefined | ComponentLinksLinkKeySpecifier),
		fields?: ComponentLinksLinkFieldPolicy,
	},
	ComponentMetaMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentMetaMetadataKeySpecifier | (() => undefined | ComponentMetaMetadataKeySpecifier),
		fields?: ComponentMetaMetadataFieldPolicy,
	},
	ComponentSectionsBottomActions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSectionsBottomActionsKeySpecifier | (() => undefined | ComponentSectionsBottomActionsKeySpecifier),
		fields?: ComponentSectionsBottomActionsFieldPolicy,
	},
	ComponentSectionsFeatureColumnsGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSectionsFeatureColumnsGroupKeySpecifier | (() => undefined | ComponentSectionsFeatureColumnsGroupKeySpecifier),
		fields?: ComponentSectionsFeatureColumnsGroupFieldPolicy,
	},
	ComponentSectionsFeatureRowsGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSectionsFeatureRowsGroupKeySpecifier | (() => undefined | ComponentSectionsFeatureRowsGroupKeySpecifier),
		fields?: ComponentSectionsFeatureRowsGroupFieldPolicy,
	},
	ComponentSectionsHero?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSectionsHeroKeySpecifier | (() => undefined | ComponentSectionsHeroKeySpecifier),
		fields?: ComponentSectionsHeroFieldPolicy,
	},
	ComponentSectionsLargeVideo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSectionsLargeVideoKeySpecifier | (() => undefined | ComponentSectionsLargeVideoKeySpecifier),
		fields?: ComponentSectionsLargeVideoFieldPolicy,
	},
	ComponentSectionsLeadForm?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSectionsLeadFormKeySpecifier | (() => undefined | ComponentSectionsLeadFormKeySpecifier),
		fields?: ComponentSectionsLeadFormFieldPolicy,
	},
	ComponentSectionsPricing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSectionsPricingKeySpecifier | (() => undefined | ComponentSectionsPricingKeySpecifier),
		fields?: ComponentSectionsPricingFieldPolicy,
	},
	ComponentSectionsRichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSectionsRichTextKeySpecifier | (() => undefined | ComponentSectionsRichTextKeySpecifier),
		fields?: ComponentSectionsRichTextFieldPolicy,
	},
	ComponentSectionsTestimonialsGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSectionsTestimonialsGroupKeySpecifier | (() => undefined | ComponentSectionsTestimonialsGroupKeySpecifier),
		fields?: ComponentSectionsTestimonialsGroupFieldPolicy,
	},
	ComponentSharedMetaSocial?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSharedMetaSocialKeySpecifier | (() => undefined | ComponentSharedMetaSocialKeySpecifier),
		fields?: ComponentSharedMetaSocialFieldPolicy,
	},
	ComponentSharedSeo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentSharedSeoKeySpecifier | (() => undefined | ComponentSharedSeoKeySpecifier),
		fields?: ComponentSharedSeoFieldPolicy,
	},
	Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		fields?: ErrorFieldPolicy,
	},
	Global?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GlobalKeySpecifier | (() => undefined | GlobalKeySpecifier),
		fields?: GlobalFieldPolicy,
	},
	GlobalEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GlobalEntityKeySpecifier | (() => undefined | GlobalEntityKeySpecifier),
		fields?: GlobalEntityFieldPolicy,
	},
	GlobalEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GlobalEntityResponseKeySpecifier | (() => undefined | GlobalEntityResponseKeySpecifier),
		fields?: GlobalEntityResponseFieldPolicy,
	},
	GlobalRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GlobalRelationResponseCollectionKeySpecifier | (() => undefined | GlobalRelationResponseCollectionKeySpecifier),
		fields?: GlobalRelationResponseCollectionFieldPolicy,
	},
	I18NLocale?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | I18NLocaleKeySpecifier | (() => undefined | I18NLocaleKeySpecifier),
		fields?: I18NLocaleFieldPolicy,
	},
	I18NLocaleEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | I18NLocaleEntityKeySpecifier | (() => undefined | I18NLocaleEntityKeySpecifier),
		fields?: I18NLocaleEntityFieldPolicy,
	},
	I18NLocaleEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | I18NLocaleEntityResponseKeySpecifier | (() => undefined | I18NLocaleEntityResponseKeySpecifier),
		fields?: I18NLocaleEntityResponseFieldPolicy,
	},
	I18NLocaleEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | I18NLocaleEntityResponseCollectionKeySpecifier | (() => undefined | I18NLocaleEntityResponseCollectionKeySpecifier),
		fields?: I18NLocaleEntityResponseCollectionFieldPolicy,
	},
	LeadFormSubmission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeadFormSubmissionKeySpecifier | (() => undefined | LeadFormSubmissionKeySpecifier),
		fields?: LeadFormSubmissionFieldPolicy,
	},
	LeadFormSubmissionEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeadFormSubmissionEntityKeySpecifier | (() => undefined | LeadFormSubmissionEntityKeySpecifier),
		fields?: LeadFormSubmissionEntityFieldPolicy,
	},
	LeadFormSubmissionEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeadFormSubmissionEntityResponseKeySpecifier | (() => undefined | LeadFormSubmissionEntityResponseKeySpecifier),
		fields?: LeadFormSubmissionEntityResponseFieldPolicy,
	},
	LeadFormSubmissionEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeadFormSubmissionEntityResponseCollectionKeySpecifier | (() => undefined | LeadFormSubmissionEntityResponseCollectionKeySpecifier),
		fields?: LeadFormSubmissionEntityResponseCollectionFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	PageEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageEntityKeySpecifier | (() => undefined | PageEntityKeySpecifier),
		fields?: PageEntityFieldPolicy,
	},
	PageEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageEntityResponseKeySpecifier | (() => undefined | PageEntityResponseKeySpecifier),
		fields?: PageEntityResponseFieldPolicy,
	},
	PageEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageEntityResponseCollectionKeySpecifier | (() => undefined | PageEntityResponseCollectionKeySpecifier),
		fields?: PageEntityResponseCollectionFieldPolicy,
	},
	PageRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageRelationResponseCollectionKeySpecifier | (() => undefined | PageRelationResponseCollectionKeySpecifier),
		fields?: PageRelationResponseCollectionFieldPolicy,
	},
	Pagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginationKeySpecifier | (() => undefined | PaginationKeySpecifier),
		fields?: PaginationFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductEntityKeySpecifier | (() => undefined | ProductEntityKeySpecifier),
		fields?: ProductEntityFieldPolicy,
	},
	ProductEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductEntityResponseKeySpecifier | (() => undefined | ProductEntityResponseKeySpecifier),
		fields?: ProductEntityResponseFieldPolicy,
	},
	ProductEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductEntityResponseCollectionKeySpecifier | (() => undefined | ProductEntityResponseCollectionKeySpecifier),
		fields?: ProductEntityResponseCollectionFieldPolicy,
	},
	ProductRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductRelationResponseCollectionKeySpecifier | (() => undefined | ProductRelationResponseCollectionKeySpecifier),
		fields?: ProductRelationResponseCollectionFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ResponseCollectionMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResponseCollectionMetaKeySpecifier | (() => undefined | ResponseCollectionMetaKeySpecifier),
		fields?: ResponseCollectionMetaFieldPolicy,
	},
	UploadFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileKeySpecifier | (() => undefined | UploadFileKeySpecifier),
		fields?: UploadFileFieldPolicy,
	},
	UploadFileEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileEntityKeySpecifier | (() => undefined | UploadFileEntityKeySpecifier),
		fields?: UploadFileEntityFieldPolicy,
	},
	UploadFileEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileEntityResponseKeySpecifier | (() => undefined | UploadFileEntityResponseKeySpecifier),
		fields?: UploadFileEntityResponseFieldPolicy,
	},
	UploadFileEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileEntityResponseCollectionKeySpecifier | (() => undefined | UploadFileEntityResponseCollectionKeySpecifier),
		fields?: UploadFileEntityResponseCollectionFieldPolicy,
	},
	UploadFileRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileRelationResponseCollectionKeySpecifier | (() => undefined | UploadFileRelationResponseCollectionKeySpecifier),
		fields?: UploadFileRelationResponseCollectionFieldPolicy,
	},
	UsersPermissionsCreateRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsCreateRolePayloadKeySpecifier | (() => undefined | UsersPermissionsCreateRolePayloadKeySpecifier),
		fields?: UsersPermissionsCreateRolePayloadFieldPolicy,
	},
	UsersPermissionsDeleteRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsDeleteRolePayloadKeySpecifier | (() => undefined | UsersPermissionsDeleteRolePayloadKeySpecifier),
		fields?: UsersPermissionsDeleteRolePayloadFieldPolicy,
	},
	UsersPermissionsLoginPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsLoginPayloadKeySpecifier | (() => undefined | UsersPermissionsLoginPayloadKeySpecifier),
		fields?: UsersPermissionsLoginPayloadFieldPolicy,
	},
	UsersPermissionsMe?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsMeKeySpecifier | (() => undefined | UsersPermissionsMeKeySpecifier),
		fields?: UsersPermissionsMeFieldPolicy,
	},
	UsersPermissionsMeRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsMeRoleKeySpecifier | (() => undefined | UsersPermissionsMeRoleKeySpecifier),
		fields?: UsersPermissionsMeRoleFieldPolicy,
	},
	UsersPermissionsPasswordPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsPasswordPayloadKeySpecifier | (() => undefined | UsersPermissionsPasswordPayloadKeySpecifier),
		fields?: UsersPermissionsPasswordPayloadFieldPolicy,
	},
	UsersPermissionsPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsPermissionKeySpecifier | (() => undefined | UsersPermissionsPermissionKeySpecifier),
		fields?: UsersPermissionsPermissionFieldPolicy,
	},
	UsersPermissionsPermissionEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsPermissionEntityKeySpecifier | (() => undefined | UsersPermissionsPermissionEntityKeySpecifier),
		fields?: UsersPermissionsPermissionEntityFieldPolicy,
	},
	UsersPermissionsPermissionRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsPermissionRelationResponseCollectionKeySpecifier | (() => undefined | UsersPermissionsPermissionRelationResponseCollectionKeySpecifier),
		fields?: UsersPermissionsPermissionRelationResponseCollectionFieldPolicy,
	},
	UsersPermissionsRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleKeySpecifier | (() => undefined | UsersPermissionsRoleKeySpecifier),
		fields?: UsersPermissionsRoleFieldPolicy,
	},
	UsersPermissionsRoleEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleEntityKeySpecifier | (() => undefined | UsersPermissionsRoleEntityKeySpecifier),
		fields?: UsersPermissionsRoleEntityFieldPolicy,
	},
	UsersPermissionsRoleEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleEntityResponseKeySpecifier | (() => undefined | UsersPermissionsRoleEntityResponseKeySpecifier),
		fields?: UsersPermissionsRoleEntityResponseFieldPolicy,
	},
	UsersPermissionsRoleEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleEntityResponseCollectionKeySpecifier | (() => undefined | UsersPermissionsRoleEntityResponseCollectionKeySpecifier),
		fields?: UsersPermissionsRoleEntityResponseCollectionFieldPolicy,
	},
	UsersPermissionsUpdateRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUpdateRolePayloadKeySpecifier | (() => undefined | UsersPermissionsUpdateRolePayloadKeySpecifier),
		fields?: UsersPermissionsUpdateRolePayloadFieldPolicy,
	},
	UsersPermissionsUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserKeySpecifier | (() => undefined | UsersPermissionsUserKeySpecifier),
		fields?: UsersPermissionsUserFieldPolicy,
	},
	UsersPermissionsUserEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserEntityKeySpecifier | (() => undefined | UsersPermissionsUserEntityKeySpecifier),
		fields?: UsersPermissionsUserEntityFieldPolicy,
	},
	UsersPermissionsUserEntityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserEntityResponseKeySpecifier | (() => undefined | UsersPermissionsUserEntityResponseKeySpecifier),
		fields?: UsersPermissionsUserEntityResponseFieldPolicy,
	},
	UsersPermissionsUserEntityResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserEntityResponseCollectionKeySpecifier | (() => undefined | UsersPermissionsUserEntityResponseCollectionKeySpecifier),
		fields?: UsersPermissionsUserEntityResponseCollectionFieldPolicy,
	},
	UsersPermissionsUserRelationResponseCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserRelationResponseCollectionKeySpecifier | (() => undefined | UsersPermissionsUserRelationResponseCollectionKeySpecifier),
		fields?: UsersPermissionsUserRelationResponseCollectionFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;