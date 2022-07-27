import { InputMaybe, Maybe, PaginatorInfo, Scalars, SortOrder, SqlOperator } from './types';

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
