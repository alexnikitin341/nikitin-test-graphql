import { InputMaybe, Maybe, PaginatorInfo, Scalars, SortOrder, SqlOperator } from './types';

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
