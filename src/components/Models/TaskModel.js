import AWS from "aws-sdk";
import dayjs from "dayjs";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
});

const docClient = new AWS.DynamoDB.DocumentClient();
const table = "Oopsies-test";
const project = "Whoopsies!";

function getLatestTaskId() {
  const params = {
    TableName: table,
  };

  return new Promise((resolve, reject) => {
    docClient.scan(params, (err, data) => {
      let taskId = 0;

      data.Items.forEach((item) => {
        if (item.id > taskId) {
          taskId = item.id;
        }
      });

      return err
        ? reject(new Error(`Error: unable to scan table. ${err}`))
        : resolve(taskId + 1);
    });
  });
}

function addTaskToDatabase(id, newTask) {
  const {
    name,
    description,
    status,
    priority,
    sprint,
    version,
    release,
  } = newTask;
  const dateCreated = dayjs().format();

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
      version,
      release,
      dateCreated,
      dateUpdated: dateCreated,
    },
  };

  return new Promise((resolve, reject) => {
    docClient.put(params, (err) => {
      return err
        ? reject(new Error(`Error: unable to add item. ${err}`))
        : resolve();
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
        ? reject(new Error(`Error: unable to scan table. ${err}`))
        : resolve(data.Items);
    });
  });
}

function deleteTaskFromDatebase(id) {
  const params = {
    TableName: table,
    Key: {
      project,
      id,
    },
  };

  return new Promise((resolve, reject) => {
    docClient.delete(params, (err) => {
      return err
        ? reject(new Error(`Error: unable to delete item. ${err}`))
        : resolve();
    });
  });
}

export default function TaskModel() {
  return {
    getLatestTaskId,
    addTaskToDatabase,
    getTasksFromDatabase,
    deleteTaskFromDatebase,
  };
}
