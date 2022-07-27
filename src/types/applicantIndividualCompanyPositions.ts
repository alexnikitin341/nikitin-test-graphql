import { SortOrder, SqlOperator } from "./types";

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
  Date: any;
  Mixed: any;
};

export type Query = {
  __typename?: 'Query';
  applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
};

export type QueryApplicantIndividualCompanyPositionsArgs = {
  where?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ApplicantIndividualCompanyPositionPaginator = {
  __typename?: 'ApplicantIndividualCompanyPositionPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualCompanyPosition>;
};

export type QueryApplicantIndividualCompanyPositionsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditionsRelation>;
};

export enum QueryApplicantIndividualCompanyPositionsWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  order: SortOrder;
};

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  lastPage: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type ApplicantIndividualCompanyPosition = {
  __typename?: 'ApplicantIndividualCompanyPosition';
  id: Scalars['ID'];
  name: Scalars['String'];
};



export type QueryApplicantIndividualCompanyPositionsWhereWhereConditionsRelation = {
  relation: Scalars['String'];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>;
};

export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}


