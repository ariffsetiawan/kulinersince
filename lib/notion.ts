import { APIErrorCode, Client, ClientErrorCode, isNotionClientError } from "@notionhq/client";

// @see https://github.com/makenotion/notion-sdk-js#usage
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

/**
 * @see https://developers.notion.com/reference/database
 * @param {String} databaseId
 * @return {Promise<Array>}
 */
export const getDatabase = async (databaseId: string) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      // error is now strongly typed to NotionClientError
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          // ...
          break
        case APIErrorCode.ObjectNotFound:
          // ...
          break
        case APIErrorCode.Unauthorized:
          // ...
          break
          // ...
        default:
          break
      }
    }
  }
};

