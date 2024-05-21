export default class GerenciamentoPage {
    inputNome = 'input[placeholder="Nome"]';
    inputEmail = 'input[placeholder="E-mail"]';
    inputSenha = 'input[placeholder="Senha"]';
    inputConfirmarSenha = 'input[placeholder="Confirmar senha"]';
    buttonSalvar = 'button[type="submit"]';
    buttonGerenciarConta = 'button[href="account"]';

    typeNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    typeConfirmarSenha(senha) {
        cy.get(this.inputConfirmarSenha).type(senha);
    }
    
    clickButtonSalvar() {
        cy.get(this.buttonSalvar).click(); 
    }

    clickButtonGerenciarConta() {
        cy.get(this.buttonGerenciarConta).click(); 
    }
}