export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export type Response<T> = { data: T };

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SqlOperator {
  Eq = 'EQ',
  Neq = 'NEQ',
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE',
  Like = 'LIKE',
  NotLike = 'NOT_LIKE',
  In = 'IN',
  NotIn = 'NOT_IN',
  Between = 'BETWEEN',
  NotBetween = 'NOT_BETWEEN',
  IsNull = 'IS_NULL',
  IsNotNull = 'IS_NOT_NULL',
}

export interface OptionFromSelct {
  value: string;
  text: string;
}

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Mixed: any;
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
