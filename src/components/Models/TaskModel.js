import AWS from "aws-sdk";
import dayjs from "dayjs";

console.log(process.env);

AWS.config.update({
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const docClient = new AWS.DynamoDB.DocumentClient();
const table = "Oopsies";
const project = "Whoopsies!";

function addTaskToDatabase(newTask) {
  const { id, name, description, status, priority, sprint, release } = newTask;

  const dateCreated = dayjs().format();

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
