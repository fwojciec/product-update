import { Pool, PoolClient } from "pg";
import {
  Transaction as ITransaction,
  QueryResult,
  QueryRow,
} from "../domain/interfaces";

export class TransactionManager {
  constructor(private pool: Pool) {}

  async beginTransaction() {
    const client = await this.pool.connect();
    await client.query("BEGIN");
    return new Transaction(client);
  }
}

export class Transaction implements ITransaction {
  constructor(private client: PoolClient) {}

  async query<T extends QueryRow>(
    sql: string,
    params?: any[],
  ): Promise<QueryResult<T>> {
    return this.client.query<T>(sql, params);
  }

  async commit() {
    await this.client.query("COMMIT");
    this.client.release();
  }

  async rollback() {
    await this.client.query("ROLLBACK");
    this.client.release();
  }
}
