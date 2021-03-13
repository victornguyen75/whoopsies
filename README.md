# Whoopsies!

An Issue Tracker for your Oopsies! Here is a working [demo](http://victornguyen75.github.io/whoopsies/) hosted on GitHub Pages.

This project is a work in progress. Here is a link to the [Software Requirement Specification (SRS)](https://docs.google.com/document/d/1FgaHyxg0d-MKl4OlfG0u36fmp6jM5nZxvI3ZeXUq4vs/edit?usp=sharing).

## Create Tasks

![Create Tasks on the Task Creation Form](/public/images/task-creation-form-1.jpg)
![Successfully Added the Task!](/public/images/task-creation-form-2.jpg)

## View Tasks

![View Tasks on the Dashboard](/public/images/dashboard-1.jpg "View Tasks on the Dashboard")

## View Detailed Task Information Before Editing or Deleting the Task

![View Detailed Task Information on the Modal](/public/images/dashboard-2.jpg "View Detailed Task Information on the Modal")

## Edit Tasks

![View All the Task Information on the Task Update Form](/public/images/task-update-form-1.jpg "View All the Task Information on the Task Update Form")
![Make Your Changes](/public/images/task-update-form-2.jpg "Make Your Changes")
![Successfuly Updated the Task!](/public/images/task-update-form-3.jpg "Successfuly Updated the Task!")
![See the Updated Dashboard](/public/images/dashboard-3.jpg "See the Updated Dashboard")

## Set up

1. Clone the project with `git clone https://github.com/victornguyen75/whoopsies.git` in the terminal
2. Install dependencies with `yarn install` or `npm install`
3. Start the server with `yarn start` or `npm start`
4. Open a browser tab with `http://localhost:3000/whoopsies/create-task` to see the application

## Notes for Running the Application

### Local Hosting

Since this GitHub repository does not have my AWS keys, this frontend application can not connect to the AWS DynamoDB. Therefore, hosting the application locally will not allow the user to create and save tasks. However, the user can still look at the pages of this application.

### GitHub Pages

The situation here is similar to the above. Another note is that the refreshing the application on the Dashboard page or the Task Creation Page will lead to a 404 file not found error.

## Future Goals and Functionalities

This is list of ideas that I can continue improve on this application.

1. Drag and drop functionality: the user can move task cards between the lists on the dashboard
2. Date picker component: the release date field is manually entered, which can be tedious. This functionality would give a better user experience if this were a date picker component.
3. Login feature: allow users to login and logout of this application
4. Support for multiple projects: allow the user to view different projects
5. Search for specific tasks: allow the user to quickly check if a task is currently on the dashboard. It might be a good idea to popup a modal to view the task's details.

## Bugs

These are bugs to fix when I have time.

1. GitHub Pages demo: refreshing the page in the demo crashes the application. I may consider netlify or other hosting platforms to resolve this issue.
2. GitHub Secrets don't work: the AWS keys in the GitHub Secrets are not transferring over to the React App custom environment variables. I'm not sure how to fix this yet.
