# Cypress Test Automation Project with Cucumber BDD Framework and Page Object Model Architecture

This repository contains a test automation project built using [Cypress](https://www.cypress.io/) as the testing framework, [Cucumber](https://cucumber.io/) for Behavior-Driven Development (BDD) test scenarios, and the Page Object Model (POM) architectural pattern for maintainability and scalability.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Generating Reports](#generating-reports)
- [Contributing](#contributing)

## Project Overview

This project is designed to showcase a test automation framework using Cypress, Cucumber, and the Page Object Model architecture. The goal is to provide a structured framework that makes it easy to write and maintain automated tests for web applications.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Node Package Manager
- [VS Code](https://code.visualstudio.com/) - Visual Studio Code is code editor (IDE)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/gurpreetskairon/cypress-bdd-framework.git
```

2. Navigate to the project directory:

```bash
cd cypress-cucumber-pom
```

3. Install project dependencies:

```bash
npm install
```

## Project Structure

The project follows a structured layout to maintain clarity and scalability. Here's an overview of the key directories and files:

- `cypress/` - Contains Cypress-specific configurations and test files.
  - `e2e/` - Test scenarios written in Gherkin syntax using Cucumber.
  - `support/` - Custom Cypress commands and utility functions.
  - `plugins/` - Cypress plugins and additional configurations.
- `cypress-cucumber-json` - Configuration for JSON reports generation.
- `cypress-cucumber-html` - Configuration for HTML reports generation.
- `cypress.json` - Cypress configuration file.
- `package.json` - Project dependencies and scripts.
- `README.md` - This documentation.

## Writing Tests

1. Create new feature files in the `cypress/integration` directory. Feature files should have a `.feature` extension and follow Gherkin syntax.

2. Write scenarios in feature files using Given-When-Then steps.

3. Create corresponding step definitions in the `cypress/integration/common` directory using JavaScript. These step definitions should implement the test actions and assertions.

4. Utilize the Page Object Model (POM) design pattern by creating page objects in the `cypress/integration/pages` directory. These page objects encapsulate the page's structure and functionality.

5. Organize reusable utility functions in the `cypress/support` directory.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This command will execute the Cypress tests using the Cucumber plugin, which will read the feature files and execute the associated step definitions.

## Generating Reports

This project is configured to generate both JSON and HTML reports for test execution. Reports are generated in the `cypress/reports` directory. To generate the reports, run:

```bash
npm run generate:reports
```
