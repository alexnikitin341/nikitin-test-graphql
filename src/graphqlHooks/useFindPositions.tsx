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

export type FindPositionsQueryVariables = Exact<{
  orderBy?: InputMaybe<
    | Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>
    | QueryApplicantIndividualCompanyPositionsOrderByOrderByClause
  >;
}>;

export type FindPositionsQuery = {
  __typename?: 'Query';
  applicantIndividualCompanyPositions?: {
    __typename?: 'ApplicantIndividualCompanyPositionPaginator';
    data: Array<{ __typename?: 'ApplicantIndividualCompanyPosition'; id: string; name: string }>;
  } | null;
};

export const FindPositionsDocument = `{
  applicantIndividualCompanyPositions(orderBy: { order: ASC, column: NAME }) {
    data {
      id
      name
    }
  }
  }`;

export const useFindPositionsQuery = <TData = FindPositionsQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: FindPositionsQueryVariables,
  options?: UseQueryOptions<FindPositionsQuery, TError, TData>
): Response<FindPositionsQuery> =>
  useQuery<FindPositionsQuery, TError, TData>(
    variables === undefined ? ['findPositions'] : ['findPositions', variables],
    fetcher<FindPositionsQuery, FindPositionsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FindPositionsDocument,
      variables
    ),
    options
  );
