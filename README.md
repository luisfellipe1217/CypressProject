# Cypress Cucumber Project

This repository contains an automated testing project using **Cypress** with **Cucumber**.

## Project Structure

```
Cypress/
│── app/               # Contains Cucumber Step Definitions
│── PageObjects/       # Contains Page Object files (page locators)
│── Support/           # Contains custom commands and configurations
│   ├── commands.js    # File for custom commands
│   ├── e2e.js         # Global Cypress configuration file
│── features/          # Contains .feature files for Cucumber
.github/
│── workflows/
│   ├── cypressproject.yml  # Configuration for running tests in GitHub Actions pipeline
```

## Requirements

- **Node.js** v22.14.0
- **Cypress** installed globally or via project
- **Cucumber Preprocessor** for Cypress

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/luisfellipe1217/CypressProject.git
   cd CypressProject
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests

- To run tests locally using the graphical interface:
  ```sh
  npx cypress open
  ```

- To run tests in headless mode:
  ```sh
  npx cypress run
  ```

## GitHub Actions Integration

The project is configured to run automatically in the **GitHub Actions** pipeline. The workflow defined in `.github/workflows/cypressproject.yml` executes tests whenever a push is made to the repository.

## Test Structure

- **Features**: `.feature` files written in Gherkin
- **Steps**: Step definitions implemented inside `Cypress/app/`
- **Page Objects**: Definition of locators and interactions with pages in `Cypress/PageObjects/`
- **Custom Commands**: Defined in `Cypress/Support/commands.js`

## Contribution

1. Fork the project
2. Create a branch for your feature (`git checkout -b my-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push the branch (`git push origin my-feature`)
5. Open a Pull Request


