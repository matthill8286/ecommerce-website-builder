// THIS FILE IS GENERATED WITH `npm run generate`
import * as Scalar from '../scalars'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type Enum_Componentelementsnotificationbanner_Type =
  | 'alert'
  | 'info'
  | 'warning';

export type Enum_Componentlinksbuttonlink_Type =
  | 'primary'
  | 'secondary';

export type Enum_Componentlinksbutton_Type =
  | 'primary'
  | 'secondary';

export type Enum_Componentmetametadata_Twittercardtype =
  | 'app'
  | 'player'
  | 'summary'
  | 'summary_large_image';

export type Enum_Componentsharedmetasocial_Socialnetwork =
  | 'Facebook'
  | 'Twitter';

export type Enum_Leadformsubmission_Status =
  | 'contacted'
  | 'ignored'
  | 'seen';

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

export type PublicationState =
  | 'LIVE'
  | 'PREVIEW';

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

export type CollectionsByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CollectionsByIdQuery = { __typename?: 'Query', collection?: { __typename?: 'CollectionEntityResponse', data?: { __typename?: 'CollectionEntity', id?: string | null, attributes?: { __typename?: 'Collection', name?: string | null } | null } | null } | null };

export type CollectionsQueryVariables = Exact<{
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type CollectionsQuery = { __typename?: 'Query', collections?: { __typename?: 'CollectionEntityResponseCollection', data: Array<{ __typename?: 'CollectionEntity', id?: string | null, attributes?: { __typename?: 'Collection', name?: string | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GlobalQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GlobalQuery = { __typename?: 'Query', global?: { __typename?: 'GlobalEntityResponse', data?: { __typename?: 'GlobalEntity', id?: string | null, attributes?: { __typename?: 'Global', metaTitleSuffix: string, locale?: string | null, favicon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null, metadata?: { __typename?: 'ComponentMetaMetadata', id: string, metaTitle: string, metaDescription: string, twitterCardType?: Enum_Componentmetametadata_Twittercardtype | null, twitterUsername?: string | null, shareImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null } | null, notificationBanner?: { __typename?: 'ComponentElementsNotificationBanner', id: string, text?: string | null, type: Enum_Componentelementsnotificationbanner_Type } | null, navbar?: { __typename?: 'ComponentLayoutNavbar', id: string, links?: Array<{ __typename?: 'ComponentLinksLink', id: string, url: string, newTab?: boolean | null, text: string } | null> | null, button?: { __typename?: 'ComponentLinksButtonLink', id: string, url?: string | null, newTab?: boolean | null, text?: string | null, type?: Enum_Componentlinksbuttonlink_Type | null } | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null, footer?: { __typename?: 'ComponentLayoutFooter', id: string, smallText?: string | null, columns?: Array<{ __typename?: 'ComponentElementsFooterSection', id: string, title?: string | null, links?: Array<{ __typename?: 'ComponentLinksLink', id: string, url: string, newTab?: boolean | null, text: string } | null> | null } | null> | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null } | null, localizations?: { __typename?: 'GlobalRelationResponseCollection', data: Array<{ __typename?: 'GlobalEntity', id?: string | null, attributes?: { __typename?: 'Global', locale?: string | null, favicon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type LeadFormSubmissionByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type LeadFormSubmissionByIdQuery = { __typename?: 'Query', leadFormSubmission?: { __typename?: 'LeadFormSubmissionEntityResponse', data?: { __typename?: 'LeadFormSubmissionEntity', id?: string | null, attributes?: { __typename?: 'LeadFormSubmission', email?: string | null, status?: Enum_Leadformsubmission_Status | null, location?: string | null } | null } | null } | null };

export type LeadFormSubmissionsQueryVariables = Exact<{
  filters?: InputMaybe<LeadFormSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type LeadFormSubmissionsQuery = { __typename?: 'Query', leadFormSubmission?: { __typename?: 'LeadFormSubmissionEntityResponse', data?: { __typename?: 'LeadFormSubmissionEntity', id?: string | null, attributes?: { __typename?: 'LeadFormSubmission', email?: string | null, status?: Enum_Leadformsubmission_Status | null, location?: string | null } | null } | null } | null };

export type GetPagesQueryVariables = Exact<{
  slug: Scalars['String'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  publicationState: PublicationState;
  locale: Scalars['I18NLocaleCode'];
}>;


export type GetPagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', locale?: string | null, slug?: string | null, localizations?: { __typename?: 'PageRelationResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', locale?: string | null } | null }> } | null, metadata: { __typename?: 'ComponentMetaMetadata', metaTitle: string, metaDescription: string, twitterCardType?: Enum_Componentmetametadata_Twittercardtype | null, twitterUsername?: string | null, shareImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null }, contentSections?: Array<{ __typename: 'ComponentSectionsBottomActions', id: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentLinksButtonLink', id: string, newTab?: boolean | null, text?: string | null, type?: Enum_Componentlinksbuttonlink_Type | null, url?: string | null } | null> | null } | { __typename: 'ComponentSectionsFeatureColumnsGroup', id: string, features?: Array<{ __typename?: 'ComponentElementsFeatureColumn', id: string, description?: string | null, title: string, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsFeatureRowsGroup', id: string, features?: Array<{ __typename?: 'ComponentElementsFeatureRow', id: string, description?: string | null, title: string, link?: { __typename?: 'ComponentLinksLink', id: string, newTab?: boolean | null, text: string, url: string } | null, media: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } } | null> | null } | { __typename: 'ComponentSectionsHero', id: string, title?: string | null, description?: string | null, label?: string | null, buttons?: Array<{ __typename?: 'ComponentLinksButtonLink', id: string, newTab?: boolean | null, text?: string | null, type?: Enum_Componentlinksbuttonlink_Type | null, url?: string | null } | null> | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null } | { __typename: 'ComponentSectionsLargeVideo', id: string, description?: string | null, title?: string | null, poster?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null, video: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } } | { __typename: 'ComponentSectionsLeadForm', id: string, emailPlaceholder?: string | null, location?: string | null, title?: string | null, submitButton?: { __typename?: 'ComponentLinksButton', id: string, text?: string | null, type?: Enum_Componentlinksbutton_Type | null } | null } | { __typename: 'ComponentSectionsPricing', id: string, title?: string | null, plans?: Array<{ __typename?: 'ComponentElementsPlan', description?: string | null, id: string, isRecommended?: boolean | null, name?: string | null, price?: number | null, pricePeriod?: string | null, features?: Array<{ __typename?: 'ComponentElementsFeature', id: string, name?: string | null } | null> | null } | null> | null } | { __typename: 'ComponentSectionsRichText', id: string, content?: string | null } | { __typename: 'ComponentSectionsTestimonialsGroup', id: string, description?: string | null, title?: string | null, link?: { __typename?: 'ComponentLinksLink', id: string, newTab?: boolean | null, text: string, url: string } | null, logos?: Array<{ __typename?: 'ComponentElementsLogos', id: string, title?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null } | null> | null, testimonials?: Array<{ __typename?: 'ComponentElementsTestimonial', id: string, text?: string | null, authorName?: string | null, authorTitle?: string | null, link?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, mime: string, url: string, formats?: any | null } | null } | null } | null } | null> | null } | { __typename: 'Error' } | null> | null } | null }> } | null };

export type PagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type PagePathsQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', slug?: string | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductByIdQuery = { __typename?: 'Query', product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name?: string | null } | null } | null } | null };

export type ProductsCollectionQueryVariables = Exact<{
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type ProductsCollectionQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name?: string | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };
