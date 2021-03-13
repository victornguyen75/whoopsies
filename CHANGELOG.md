# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2021-03-13

### Added

- Task Modal to show task details
- Task Update Form Page
- Task update
- Task deletion
- Collapsible list feature
- Images of the application to the README
- Future Goals and Functionalities to the README
- Bugs to the README

### Refactored

- Notifications component

### Updated

- README titles
- Unit tests
- File names and structure of the View Model and UI components

### Fixed

- Task ID Creation

## [1.2.0] - 2021-02-27

### Added

- Website icon
- Bold text for the Whoopses title in the NavBar
- TaskModal to view the task information

### Refactored

- TaskCard and TaskList
- Whoopsies Header

## [1.1.0] - 2021-02-19

### Added

- Status options and priority options for the Task Creation form
- Version field to the Task Creation form
- Checkbox to reset the Task Creation form fields
- Sidebar routing
- YAML file for GitHub Actions to run CI/CD
- Filter tasks based on the status of the task
- Automate the Task ID creation
- Font family
- Functionality to update the dashboard automatically upon creating a new task without the need to refresh the page
- "General Questions" and "Logout" tabs on the sidebar; no functionality for now
- In Development Page as a fallback, if users access a route that does not exist yet
- NavBar component with a search box

### Refactored

- DayJS to replace MomentJS
- Styling of Material-UI components with styled-components
- Notification component
- Behavior Driven Development (BDD) unit testing the View components, instead of the ViewModel components
- Whoopsies Header component

### Fixed

- Sidebar tab bug; clicking at the edge of the Sidebar options will now redirect the user to the page as expected

## [1.0.0] - 2021-02-04

### Added

- Task Creation Page
- Dashboard Page
- Hooks based functional components
- AWS DynamoDB with the AWS-SDK
- Styled-components
- Material-UI
- Moment.js for time and date objects
- Prop-types for property type validation and default values
- Eslint and Prettier configurations
- GitHub Pages build and deploy scripts
- Jest and Chai Unit Testing modules
- CHANGELOG.md

### Updated

- README.md

## [0.1.0] - 2021-01-17

### Added

- Initial commit
