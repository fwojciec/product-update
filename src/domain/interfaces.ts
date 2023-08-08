/** Interfaces for the application */

export type QueryRow = {
  [column: string]: any;
};

export interface QueryResult<T extends QueryRow> {
  rowCount: number;
  rows: T[];
}

export interface Transaction {
  query: <T extends QueryRow>(
    sql: string,
    params?: any[],
  ) => Promise<QueryResult<T>>;
  commit: () => Promise<void>;
  rollback: () => Promise<void>;
}

export interface TransactionManager {
  beginTransaction: () => Promise<Transaction>;
}

export interface ProductService {
  materializeProduct(product: number): Promise<void>;
}
