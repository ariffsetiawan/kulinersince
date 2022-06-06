import { getPage } from "../../../lib/notion";

export default async function handler(req, res) {
  const results = await getPage(req.query.id);
  res.status(200).json(results);
}