import { proxyActivities } from "@temporalio/workflow";
import { createActivities } from "./activities";

export const { createCandidatePartitionTable } = proxyActivities<
  ReturnType<typeof createActivities>
>({
  startToCloseTimeout: "30 seconds",
});

export async function materializeProduct(id: number): Promise<string> {
  createCandidatePartitionTable(id, "products");
  return "";
  // 1. Create a candidate partition table, return a timestamp of the latest product updated_at
  // 2. Conditionally detach the old partition and attach the new one, return the name of the old table
  // 3. Remove the old partition table
}
