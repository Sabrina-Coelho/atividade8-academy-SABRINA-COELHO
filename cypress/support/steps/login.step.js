import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import LoginPage from '../pages/login.page';
import CadastroPage from '../pages/cadastro.page';

const paginaCadastro = new CadastroPage();
const paginaLogin = new LoginPage();

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

Given('que acessei a funcionalidade de Login', function () {
    cy.get('a[href="/login"]').click();
});

When('informo o e-mail cadastrado', function () {
    paginaLogin.typeEmail(email);
});

When('informo a senha cadastrada', function () {
    paginaLogin.typeSenha(senha);
});

When('clico no botão Login', function () {
    paginaLogin.clickButtonLogin();
});

When('informo um e-mail não cadastrado', function () {
    const emailNaoCadastrado = faker.internet.email();
    paginaLogin.typeEmail(emailNaoCadastrado);
});

When('não preencho o campo E-mail', function () {
    cy.get('input[placeholder="E-mail"]').click();
});

When('não preencho o campo Senha', function () {
    cy.get('input[placeholder="Password"]').click();
});

When('informo uma senha não cadastrada', function () {
    const senhaNaoCadastrada = faker.internet.password({ length: 11 });
    paginaLogin.typeSenha(senhaNaoCadastrada);
});

Then('sou redirecionado para a página inicial', function () {
    cy.url().should('equal', 'https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/');
});

Then('tenho acesso às informações do meu perfil', function () {
    cy.get('a[href="/profile"]').click();
    cy.get('a[href="/account"]').click();
    cy.get('input[placeholder="Nome"]').should('have.value', nome);
    cy.get('input[placeholder="E-mail"]').should('have.value', email);
});

Then('as mensagens "Falha ao autenticar" e "Usuário ou senha inválidos." são exibidas', function () {
    cy.get('.modal-body').should('contain', 'Falha ao autenticar');
    cy.get('.error-message').should('contain', "Usuário ou senha inválidos.");
});

Then('a mensagem "Informe o e-mail" é exibida', function () {
    cy.get('.input-error').should('contain', "Informe o e-mail");
});

Then('a mensagem "Informe a senha" é exibida', function () {
    cy.get('.input-error').should('contain', "Informe a senha");
});