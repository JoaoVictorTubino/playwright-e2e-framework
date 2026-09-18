# Playwright E2E Automation Framework

Framework de automação de testes End-to-End (E2E) para uma aplicação web de
e-commerce, desenvolvido utilizando **Playwright** e **TypeScript**.

O projeto foi criado com foco em boas práticas de automação de testes,
organização de código, reutilização de componentes, geração de dados de teste,
relatórios e integração contínua.

A aplicação utilizada nos testes é o [SauceDemo](https://www.saucedemo.com/).

---

## Objetivos do projeto

- Automatizar fluxos importantes de uma aplicação de e-commerce.
- Validar cenários positivos e negativos.
- Utilizar o padrão Page Object Model.
- Separar páginas, dados, fixtures, utilitários e testes.
- Utilizar dados dinâmicos nos cenários de checkout.
- Gerar relatórios de execução.
- Executar os testes automaticamente por meio do GitHub Actions.
- Demonstrar boas práticas de desenvolvimento de um framework de automação E2E.

---

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- [Faker](https://fakerjs.dev/)
- [Allure Report](https://allurereport.org/)
- [Git](https://git-scm.com/)
- [GitHub Actions](https://github.com/features/actions)

---

## Arquitetura do projeto

O projeto utiliza uma organização baseada em responsabilidades, separando os
elementos de automação em diferentes diretórios.

```text
playwright-e2e-framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── src/
│   ├── data/
│   │   └── testData.ts
│   │
│   ├── fixtures/
│   │   └── pages.fixture.ts
│   │
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── ProductsPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   │
│   └── utils/
│       └── dataGenerator.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
