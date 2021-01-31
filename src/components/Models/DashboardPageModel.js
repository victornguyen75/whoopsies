import AWS from "aws-sdk";
import { accessKeyId, secretAccessKey } from "../../.awsconfig.json";

AWS.config.update({
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  accessKeyId,
  secretAccessKey,
});

const docClient = new AWS.DynamoDB.DocumentClient();

export default function addTaskToDatabase(newTask) {
  const table = "Oopsies";
  const {
    id,
    project,
    name,
    description,
    status,
    priority,
    sprint,
    release,
    dateCreated,
    dateUpdated,
  } = newTask;

  const params = {
    TableName: table,
    Item: {
      project,
      id: parseInt(id, 10),
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
