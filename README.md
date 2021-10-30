# Escola LMS

![end-to-end tests](https://github.com/EscolaLMS/Admin/actions/workflows/e2e.js.yml/badge.svg) ![unit tests](https://github.com/EscolaLMS/Admin/actions/workflows/unit.yml/badge.svg) [![Admin Panel](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/diinyp&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/diinyp/runs) [![codecov](https://codecov.io/gh/EscolaLMS/Admin/branch/master/graph/badge.svg?token=Y70KNN8H7W)](https://codecov.io/gh/EscolaLMS/Admin)
[![Maintainability](https://api.codeclimate.com/v1/badges/4391383cac54bdb7727d/maintainability)](https://codeclimate.com/github/EscolaLMS/Admin/maintainability)

This project is initialized with [Ant.design PRO](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
yarn
```

## Provided Scripts

Escola LMS provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
yarn start
```

### Build project

```bash
yarn build
```

### Check code style

```bash
yarn lint
```

You can also use script to auto fix some lint error:

```bash
yarn lint:fix
```

### Test code

There are tests in this repo. See badges above.

#### Jest code covarage

```bash
yarn test
```

#### Cypress e2e tests

```bash
yarn cypress-test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
