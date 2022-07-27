import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from '../helpers/fetcher';
import {
  Exact,
  InputMaybe,
  Maybe,
  PaginatorInfo,
  Response,
  Scalars,
  SortOrder,
  SqlOperator,
} from '../types/types';

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

export type FindRelationsQueryVariables = Exact<{
  orderBy?: InputMaybe<
    | Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>
    | QueryApplicantIndividualCompanyRelationsOrderByOrderByClause
  >;
}>;

export type FindRelationsQuery = {
  __typename?: 'Query';
  applicantIndividualCompanyRelations?: {
    __typename?: 'ApplicantIndividualCompanyRelationPaginator';
    data: Array<{ __typename?: 'ApplicantIndividualCompanyRelation'; id: string; name: string }>;
  } | null;
};

export const FindRelationsDocument = `{
  applicantIndividualCompanyRelations(orderBy:{order:ASC, column:NAME}){
    data{
      id
      name
    }
  }
}`;

export const useFindRelationsQuery = <TData = FindRelationsQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: FindRelationsQueryVariables,
  options?: UseQueryOptions<FindRelationsQuery, TError, TData>
): Response<FindRelationsQuery> =>
  useQuery<FindRelationsQuery, TError, TData>(
    variables === undefined ? ['findRelations'] : ['findRelations', variables],
    fetcher<FindRelationsQuery, FindRelationsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FindRelationsDocument,
      variables
    ),
    options
  );
