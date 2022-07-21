[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

# Introduction

This project brings you some fun with E2E and API tests using Cypress.

### Tech

This test uses a number of open source projects to work properly:

* [https://nodejs.org/en/](https://nodejs.org/en/) - evented I/O for the backend
* [https://cypress.io/](https://cypress.io/) - Cypress
* [https://reqres.in/](https://reqres.in/) - Endpoints that are used in this project

### Installation

This requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies.

```sh
cd cypress-fun
npm i
```

### How to trigger API tests

To run all api tests just simply type

```sh
npm run api-tests
```

Example output

```sh
thanh@Thanh-MBP14 cypress-fun % npm run api-tests

> cypress-fun@1.0.0 api-tests /Users/thanh/Desktop/cypress-fun
> cypress run --spec cypress/integration/**

Couldn't find tsconfig.json. tsconfig-paths will be skipped

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        10.3.1                                                                         │
  │ Browser:        Electron 100 (headless)                                                        │
  │ Node Version:   v14.18.2 (/Users/thanh/.nvm/versions/node/v14.18.2/bin/node)            │
  │ Specs:          1 found (getUser.cy.ts)                                                        │
  │ Searched:       cypress/integration/User                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                  
  Running:  getUser.cy.ts                                                                   (1 of 1)


  Get User
    ✓ should return the second page (139ms)
    ✓ should return 404 not found (57ms)
    ✓ should return data of given user id (41ms)


  3 passing (267ms)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     0 seconds                                                                        │
  │ Spec Ran:     getUser.cy.ts                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                   
  -  Finished processing: /Users/thanh/Desktop/cypress-fun/cypress/videos/getU    (0 seconds)
                          ser.cy.ts.mp4                                                           


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  getUser.cy.ts                            264ms        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        264ms        3        3        -        -        -  
```

### How to trigger E2E tests

To run all api tests just simply type

```sh
npm run e2e-tests
```

Example output

```sh
====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        10.3.1                                                                         │
  │ Browser:        Electron 100 (headless)                                                        │
  │ Node Version:   v14.18.2 (/Users/thanh/.nvm/versions/node/v14.18.2/bin/node)            │
  │ Specs:          1 found (login.cy.ts)                                                          │
  │ Searched:       cypress/e2e, cypress/e2e/login                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                  
  Running:  login.cy.ts                                                                     (1 of 1)


  Login
    ✓ login successfully (5055ms)


  1 passing (8s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     7 seconds                                                                        │
  │ Spec Ran:     login.cy.ts                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                   
  -  Finished processing: /Users/thanh/Desktop/cypress-fun/cypress/videos/logi    (0 seconds)
                          n.cy.ts.mp4                                                             


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  login.cy.ts                              00:07        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:07        1        1        -        -        -  
```
