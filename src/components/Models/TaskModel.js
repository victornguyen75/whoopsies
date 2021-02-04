import AWS from "aws-sdk";
import moment from "moment";
import { accessKeyId, secretAccessKey } from "../../.awsconfig.json";

AWS.config.update({
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  accessKeyId,
  secretAccessKey,
});

const docClient = new AWS.DynamoDB.DocumentClient();
const table = "Oopsies-test";

function addTaskToDatabase(newTask) {
  const {
    id,
    project,
    name,
    description,
    status,
    priority,
    sprint,
    release,
  } = newTask;

  const dateCreated = moment().format();

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
      dateUpdated: dateCreated,
    },
  };

  return new Promise((resolve, reject) => {
    docClient.put(params, (err) => {
      return err ? reject(new Error(`Unable to add item. ${err}`)) : resolve();
    });
  });
}

function getTasksFromDatabase() {
  const params = {
    TableName: table,
  };

  return new Promise((resolve, reject) => {
    docClient.scan(params, (err, data) => {
      return err
        ? reject(new Error(`Unable to scan table. ${err}`))
        : resolve(data.Items);
    });
  });
}

export default function TaskModel() {
  return { addTaskToDatabase, getTasksFromDatabase };
}
