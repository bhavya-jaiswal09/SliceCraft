import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { MainSeeder } from "./Database/seeds/MainSeeder";
import path from "path";

const PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;

const isProduction = process.env.NODE_ENV === "production" || !!process.env.RENDER;

const op: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: PORT,
  username: process.env.DB_USER || "admin",
  password: process.env.DB_PASS || "slicecraftpassword",
  database: process.env.DB_NAME || "slicecraft",
  ssl: process.env.DB_SSL === "false" ? false : (isProduction ? { rejectUnauthorized: false } : false),
  entities: [path.join(__dirname, "Database", "Entities", "*.{ts,js}")],
  migrations: [path.join(__dirname, "Database", "Migrations", "*.{ts,js}")],
  migrationsRun: true,
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(op);
