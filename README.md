# Cypress Cucumber Project

Este repositório contém um projeto de testes automatizados utilizando **Cypress** com **Cucumber** criado para pratica e estudos.

## Estrutura do Projeto

```
Cypress/
│── app/               # Contém os arquivos de Steps do Cucumber
│── PageObjects/       # Contém os arquivos de Page Objects (locators das páginas)
│── Support/           # Contém comandos customizados e configurações
│   ├── commands.js    # Arquivo para comandos personalizados
│   ├── e2e.js         # Arquivo de configuração global do Cypress
│── features/          # Contém os arquivos .feature do Cucumber
.github/
│── workflows/
│   ├── cypressproject.yml  # Configuração para execução na pipeline do GitHub Actions
```

## Requisitos

- **Node.js** v22.14.0
- **Cypress** instalado globalmente ou via projeto
- **Cucumber Preprocessor** para Cypress

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes

- Para executar os testes localmente via interface gráfica:
  ```sh
  npx cypress open
  ```

- Para executar os testes em modo headless:
  ```sh
  npx cypress run
  ```

## Integração com GitHub Actions

O projeto está configurado para execução automática na pipeline do **GitHub Actions**. O workflow definido no arquivo `.github/workflows/cypressproject.yml` executa os testes sempre que um push é feito no repositório.

## Estrutura dos Testes

- **Features**: Arquivos `.feature` escritos em Gherkin
- **Steps**: Implementação dos passos dentro da pasta `Cypress/app/`
- **Page Objects**: Definição de locators e interações com as páginas na pasta `Cypress/PageObjects/`
- **Comandos customizados**: Definição de comandos personalizados em `Cypress/Support/commands.js`

## Contribuição

1. Faça um fork do projeto
2. Crie um branch para sua funcionalidade (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça o push do branch (`git push origin minha-feature`)
5. Abra um Pull Request


