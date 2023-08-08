import { Client } from "@temporalio/client";

async function run() {
  const client = new Client();
  await client.connection.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
