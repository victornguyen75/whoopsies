import AWS from "aws-sdk";
import { accessKeyId, secretAccessKey } from "../../.awsconfig.json";

AWS.config.update({
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  accessKeyId,
  secretAccessKey,
});

const docClient = new AWS.DynamoDB.DocumentClient();

export default function addTaskToDatabase() {
  const table = "Oopsies";
  const id = 7.77;
  const project = "Issue Tracker";
  const name = "Example task";
  const description = "Something something";
  const status = "To Do";
  const priority = "Showstopper";
  const sprint = "1 (12/11/2021)";
  const release = "12/12/2021";
  const dateCreated = "";
  const dateUpdated = "";

  const params = {
    TableName: table,
    Item: {
      project,
      id,
      name,
      description,
      status,
      priority,
      sprint,
      release,
      dateCreated,
      dateUpdated,
    },
  };

  docClient.put(params, (err) => {
    if (err) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("Added item");
    }
  });
}
