import { APIErrorCode, Client } from "@notionhq/client";

// @see https://github.com/makenotion/notion-sdk-js#usage
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

/**
 * @see https://developers.notion.com/reference/database
 * @param {String} databaseId
 * @return {Promise<Array>}
 */
export const getDatabase = async (databaseId) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  } catch (error) {
    if (error.code === APIErrorCode.ObjectNotFound) {
      // For example: handle by asking the user to select a different database
    } else {
      return error.body;
    }
  }
};
