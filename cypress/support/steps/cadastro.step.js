import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import CadastroPage from '../pages/cadastro.page';

const paginaCadastro = new CadastroPage();

var email = '';
var nome = '';
var senha = '';
var emailExistente = faker.internet.email();

Given('que acessei a funcionalidade de cadastro', function () {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com');
    cy.get('[href="/register"]').click();
});

Given('que realizei o cadastro de um usuário', function () {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com');
    cy.get('[href="/register"]').click();
    paginaCadastro.typeNome('Teste Testando');
    paginaCadastro.typeEmail(emailExistente);
    paginaCadastro.typeSenha('123456');
    paginaCadastro.typeConfirmarSenha('123456');
    paginaCadastro.clickButtonCadastrar();
});

Given('que realizei o cadastro de um novo usuário', function () {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com');
    cy.get('[href="/register"]').click();
    paginaCadastro.typeNome(nome);
    paginaCadastro.typeEmail(email);
    paginaCadastro.typeSenha('123456');
    paginaCadastro.typeConfirmarSenha('123456');
    paginaCadastro.clickButtonCadastrar();
});

When('informo um nome válido', function () {
    nome = faker.person.fullName();
    paginaCadastro.typeNome(nome);
});

When('informo um e-mail válido', function () {
    email = faker.internet.email();
    paginaCadastro.typeEmail(email);
});

When('informo uma senha válida e confirmo a senha', function () {
    senha = faker.internet.password({ length: 11 });
    paginaCadastro.typeSenha(senha);
    paginaCadastro.typeConfirmarSenha(senha);
});

When('clico no botão Cadastrar', function () {
    paginaCadastro.clickButtonCadastrar();
});

When('não preencho o campo Nome', function () {
    cy.get('input[placeholder="Nome"]').click();
});

When('não preencho o campo E-mail', function () {
    cy.get('input[placeholder="E-mail"]').click();
});

When('não preencho o campo Senha', function () {
    cy.get('input[placeholder="Senha"]').click();
});

When('informo a senha "12345" e confirmo', function ()  {
    paginaCadastro.typeSenha('12345');
    paginaCadastro.typeConfirmarSenha('12345');
});

When('informo a senha "1234567891234" e confirmo', function () {
    paginaCadastro.typeSenha('1234567891234');
});

When('informo uma senha válida', function () {
    senha = faker.internet.password({ length: 11 });
    paginaCadastro.typeSenha(senha);
});

When('não preencho o campo Confirmar Senha', function () {
    cy.get('input[placeholder="Confirmar senha"]').click();
});

When('informo uma senha diferente para o campo Confirmar Senha', function () {
    senha = faker.internet.password({ length: 10 });
    paginaCadastro.typeConfirmarSenha(senha);
});

When('informo o e-mail "teste.com"', function () {
    paginaCadastro.typeEmail('teste.com');
});

When('informo o e-mail "teste@teste"', function () {
    paginaCadastro.typeEmail('teste@teste');
});

When('informo um e-mail já existente', function () {
    paginaCadastro.typeEmail(emailExistente);
});

When('acesso a página Perfil', function () {
    cy.get('.modal-actions').click();
    cy.get('a[href="/profile"]').click();
});

When('clico em Gerenciar Conta', function () {
    cy.get('a[href="/account"]').click();
});

Then('as mensagens "Sucesso" e "Cadastro realizado!" são exibidas', function () {
    cy.contains('.modal-body', 'Sucesso');
    cy.contains('.error-message', 'Cadastro realizado!');
});

Then('a mensagem "Informe o nome" é exibida', function () {
    cy.contains('.input-error', 'Informe o nome');
});

Then('a mensagem "Informe o e-mail" é exibida', function () {
    cy.contains('.input-error', 'Informe o e-mail');
});

Then('a mensagem "Informe a senha" é exibida', function () {
    cy.contains('.input-error', "Informe a senha");
});

Then('a mensagem "A senha deve ter pelo menos 6 dígitos." é exibida', function () {
     cy.contains('.input-error', 'A senha deve ter pelo menos 6 dígitos.');
});

Then('a mensagem "A senha deve ter no máximo 12 dígitos." é exibida', function () {
    cy.contains('.input-error', "A senha deve ter no máximo 12 dígitos.");
});

Then('a mensagem "As senhas devem ser iguais" é exibida', function () {
    cy.contains('.input-error', 'As senhas devem ser iguais');
});

Then('as mensagens "Falha no cadastro." e "Não foi possível cadastrar o usuário." são exibidas', function () {
    cy.contains('.modal-body', 'Falha no cadastro.');
    cy.contains('.error-message', 'Não foi possível cadastrar o usuário.');
});

Then('as mensagens "Falha no cadastro." e "E-mail já cadastrado. Utilize outro e-mail" são exibidas', function () {
    cy.contains('.modal-body', 'Falha no cadastro.');
    cy.contains('.error-message', 'E-mail já cadastrado. Utilize outro e-mail');
});

Then('o tipo de usuário é Comum', function () {
    cy.contains('.profile-input', 'Comum');
});