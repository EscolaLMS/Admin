# Escola LMS

[![End-to-end Tests](https://github.com/EscolaLMS/Admin/actions/workflows/e2e-playwright.js.yml/badge.svg)](https://github.com/EscolaLMS/Admin/actions/workflows/e2e-playwright.js.yml)

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

#### e2e tests

Locally

```bash
yarn playwright:headed
```

CI

```bash
yarn e2e:test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
