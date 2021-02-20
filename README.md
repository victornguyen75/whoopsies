# Whoopsies!

An Issue Tracker for your Oopsies! Here is a working [demo](http://victornguyen75.github.io/whoopsies/) hosted on GitHub Pages.

This project is a work in progress. Here is a link to the [Software Requirement Specification (SRS)](https://docs.google.com/document/d/1FgaHyxg0d-MKl4OlfG0u36fmp6jM5nZxvI3ZeXUq4vs/edit?usp=sharing).

## Set up

1. Clone the project with `git clone https://github.com/victornguyen75/whoopsies.git` in the terminal
2. Install dependencies with `yarn install` or `npm install`
3. Start the server with `yarn start` or `npm start`
4. Open a browser tab with `http://localhost:3000/whoopsies/create-task` to see the application

## Notes for Running the Application

### Local Hosting

- Since this GitHub repository does not have my AWS keys, this frontend application can not connect to the AWS DynamoDB. Therefore, hosting the application locally will not allow the user to create and save tasks. However, the user can still look at the pages of this application.

### GitHub Pages

- The situation here is similar to the above. Another note is that the refreshing the application on the Dashboard page or the Task Creation Page will lead to a 404 file not found error.
