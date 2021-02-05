# Whoopsies!

An Issue Tracker for your Oopsies! Here is a working [demo](http://victornguyen75.github.io/whoopsies/) hosted on GitHub Pages.

This project is a work in progress. Here is a link to the [Software Requirement Specification (SRS)](https://docs.google.com/document/d/1FgaHyxg0d-MKl4OlfG0u36fmp6jM5nZxvI3ZeXUq4vs/edit?usp=sharing).

## Set up

1. Clone the project with `git clone https://github.com/victornguyen75/whoopsies.git` in the terminal
2. Install dependencies with `yarn install` or `npm install`
3. Start the server with `yarn start` or `npm start`
4. Open a browser tab with `http://localhost:3000/whoopsies/#/create-task` to see the application

## Notes for Running the Application

- This frontend application is not connected to AWS DynamoDB, so none of the tasks created will appear on either the frontend or backend.
- Future development of this project will move the database querying logic to an AWS Lambda. Once that is complete, the GitHub Pages demo will be able to query the backend.
