export interface DB {
  preparePartitionTable(name: string, parent: string): Promise<void>;
  createTableAs(name: string, as: string): Promise<void>;
  copy;
}

export const createActivities = (db: DB) => ({
  async createCandidatePartitionTable(
    productId: number,
    parent: string,
  ): Promise<Date> {
    return new Date();
  },
});
