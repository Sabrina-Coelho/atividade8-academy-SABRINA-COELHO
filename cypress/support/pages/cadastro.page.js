export default class CadastroPage {
    inputNome = 'input[placeholder="Nome"]';
    inputEmail = 'input[placeholder="E-mail"]';
    inputSenha = 'input[placeholder="Senha"]';
    inputConfirmarSenha = 'input[placeholder="Confirmar Senha"]';
    buttonCadastrar = 'button[type="submit"]';

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

    clickButtonCadastrar() {
        cy.get(this.buttonCadastrar).click(); 
    }
}