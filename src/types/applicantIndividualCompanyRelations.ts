import { SortOrder, SqlOperator } from './types';

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
  applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
};

export type QueryApplicantIndividualCompanyRelationsArgs = {
  where?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ApplicantIndividualCompanyRelationPaginator = {
  __typename?: 'ApplicantIndividualCompanyRelationPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualCompanyRelation>;
};

export type QueryApplicantIndividualCompanyRelationsWhereWhereConditions = {
  column?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditionsRelation>;
};

export enum QueryApplicantIndividualCompanyRelationsWhereColumn {
  Name = 'NAME',
}

export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
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

export type ApplicantIndividualCompanyRelation = {
  __typename?: 'ApplicantIndividualCompanyRelation';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type QueryApplicantIndividualCompanyRelationsWhereWhereConditionsRelation = {
  relation: Scalars['String'];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>;
};

export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
}
