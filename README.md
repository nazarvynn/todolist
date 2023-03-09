# TodoList

## Details

Application for end-2-end automation purpose.
Contains typical pages like

- Welcome
- Todo list
- Posts list
- Post details
- Gallery
- About Us

---

## Technology stack

- Programming language: [Typescript](https://www.typescriptlang.org/)
- Web platform: [Angular](https://angular.io/) (15)
- Unit test framework: [Karma](https://karma-runner.github.io/latest/index.html) ([config](https://angular.io/guide/testing))
- CSS preprocessor: [SCSS](https://sass-lang.com/)
- End-to-end automation frameworks
  - [Cypress](https://www.cypress.io/)
  - [Playwright](https://playwright.dev/)

---

## Setup Environment

### Install brew

Info: https://www.datacamp.com/community/tutorials/homebrew-install-use

```
$ xcode-select -p
$ xcode-select --install
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install Node (LTS)

Use node version manager `n` or `nvm`

```
$ brew install node
$ brew install n
$ sudo n lts
```

### Install Yarn (package manager)

```
$ npm i -g yarn
```

### Install Playwright

```
$ npx playwright install
```

---

## Application

- Clone Repo

```
$ git clone https://github.com/nazarvynn/todolist.git
```

- Install dependencies

```
$ cd todolist
$ yarn
```

- Start application

```
$ yarn start
```

---

## Automation

- `$ yarn cy:open` - Open Cypress Launchpad
- `$ yarn pw:run` - Run all Playwright tests
- `$ yarn pw:run --debug` - Run all Playwright tests on debug mode `await page.pause();`
- `$ yarn pw:html` - Up and running Playwright HTML report with the latest results

---

## Useful links

### Cypress

- [Cypress App](https://docs.cypress.io/guides/core-concepts/cypress-app)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Writing and Organizing Tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)
- [Variables and Aliases](https://docs.cypress.io/guides/core-concepts/variables-and-aliases)
- [Assertions](https://docs.cypress.io/guides/references/assertions)
- [Network Requests](https://docs.cypress.io/guides/guides/network-requests)

### Playwright

- [Best Practices](https://playwright.dev/docs/best-practices)
- [Configuration](https://playwright.dev/docs/test-configuration)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Pages](https://playwright.dev/docs/pages)
- [Assertions](https://playwright.dev/docs/test-assertions)
- [API testing](https://playwright.dev/docs/test-api-testing)
- [Network](https://playwright.dev/docs/network)
- [Page Object Models](https://playwright.dev/docs/pom)
- [Debugging Tests](https://playwright.dev/docs/debug)

### Tools and other useful information

- [Cypress Real World App Overview](https://learn.cypress.io/real-world-examples/cypress-real-world-app-overview) requires node `14.16.0` version. Command `$ sudo n 14.16.0`.
- [cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app)
- [FakerJS](https://fakerjs.dev)
- [JavaScript](https://javascript.info/)
