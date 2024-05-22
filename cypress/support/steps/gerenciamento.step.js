import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import LoginPage from '../pages/login.page';
import CadastroPage from '../pages/cadastro.page';
import GerenciamentoPage from '../pages/gerenciamento.page';

const paginaCadastro = new CadastroPage();
const paginaLogin = new LoginPage();
const paginaGerenciamento = new GerenciamentoPage();

var email = '';
var nome = '';
var senha = '';

Given('que realizei o cadastro de um usuário', function () {
    email = faker.internet.email();
    nome = faker.person.fullName();
    senha = faker.internet.password({ length: 11});

    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com');
    cy.get('[href="/register"]').click();
    paginaCadastro.typeNome(nome);
    paginaCadastro.typeEmail(email);
    paginaCadastro.typeSenha(senha);
    paginaCadastro.typeConfirmarSenha(senha);
    paginaCadastro.clickButtonCadastrar();
    cy.get('.modal-actions').click();
    cy.get('a[href="/profile"]').click();
    cy.get('a[href="/logout"]').click();
});

Given('realizei o login do usuário', function () {
    cy.get('a[href="/login"]').click();
    paginaLogin.typeEmail(email);
    paginaLogin.typeSenha(senha);
    paginaLogin.clickButtonLogin();
});

Given('acessei a página inicial', function () {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/');
});

When('acesso a página Perfil', function () {
    cy.get('a[href="/profile"]').click();
});

When('clico em Gerenciar Conta', function () {
    paginaGerenciamento.clickLinkGerenciarConta();
});

When('não realizo o login', function () {
    cy.url().should('equal', 'https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/');
});

When('altero meu nome para "Alteração"', function () {
    cy.get('input[placeholder="Nome"]').clear();
    paginaGerenciamento.typeNome('Alteração');
});

When('clico no botão Alterar Senha', function () {
    paginaGerenciamento.clickButtonAlterarSenha();
});

When('preencho os campos Senha e Confirmar Senha com dados válidos', function () {
    const senhaAlterada = faker.internet.password({ length: 10 });
    paginaGerenciamento.typeSenha(senhaAlterada);
    paginaGerenciamento.typeConfirmarSenha(senhaAlterada);
});

When('clico no botão Salvar', function () {
    paginaGerenciamento.clickButtonSalvar();
});

When('preencho apenas o campo de Senha', function () {
    paginaGerenciamento.typeSenha('123456789');
});

Then('tenho acesso aos dados da conta', function () {
    cy.get('input[placeholder="Nome"]').should('have.value', nome);
    cy.get('input[placeholder="E-mail"]').should('have.value', email);
});

Then('posso realizar a edição de informações', function () {
    cy.get('input[placeholder="Nome"]').clear();
    cy.get('input[placeholder="Nome"]').should('be.empty');
});

Then('não tenho acesso à página Perfil', function () {
    cy.get('.navbar-content').should('not.contain', 'Perfil');
});

Then('tenho acesso apenas ao meu perfil', function () {
    paginaGerenciamento.clickLinkGerenciarConta();
    cy.get('input[placeholder="Nome"]').should('have.value', nome);
    cy.get('input[placeholder="E-mail"]').should('have.value', email);
});

Then('as mensagens "Sucesso" e "Informações atualizadas!" são exibidas', function () {
    paginaGerenciamento.clickButtonSalvar();
    cy.get('.modal-body').should('contain', 'Sucesso');
    cy.get('.error-message').should('contain', 'Informações atualizadas!');
});

Then('a mensagem "As senhas devem ser iguais." é exibida', function () {
    cy.get('.input-error').should('contain', 'As senhas devem ser iguais.');
});

Then('visualizo as informações de Nome', function () {
    cy.get('input[placeholder="Nome"]').should('have.value', nome);
});

Then('visualizo as informações de E-mail', function () {
    cy.get('input[placeholder="E-mail"]').should('have.value', email);
});

Then('visualizo o Tipo de Usuário', function () {
    cy.get('.profile-input').should('contain', 'Comum');
});