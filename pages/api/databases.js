import { getDatabase } from "../../lib/notion";

export default async function handler(_, res) {
  const results = await getDatabase(process.env.DATABASE_ID);
  res.status(200).json(results);
}