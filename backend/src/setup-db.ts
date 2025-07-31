import "dotenv/config";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { runSeeders } from "typeorm-extension";

async function main() {
  console.log("Initializing database connection...");
  await AppDataSource.initialize();
  
  console.log("Running migrations...");
  await AppDataSource.runMigrations();
  
  console.log("Running seeds...");
  await runSeeders(AppDataSource);
  
  console.log("Database initialized and seeded successfully!");
  await AppDataSource.destroy();
}

main().catch((err) => {
  console.error("Database setup error:", err);
  process.exit(1);
});
