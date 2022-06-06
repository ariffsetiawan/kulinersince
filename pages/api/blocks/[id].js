import { getBlock } from "../../../lib/notion";

export default async function handler(req, res) {
  const results = await getBlock(req.query.id, req.query.limit);
  res.status(200).json(results);
}