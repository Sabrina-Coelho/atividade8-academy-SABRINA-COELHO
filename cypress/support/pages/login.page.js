export default class LoginPage {
    inputEmail = 'input[placeholder="E-mail"]';
    inputSenha = 'input[placeholder="Password"]';
    buttonLogin = 'button[class="login-button"]';

    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).click(); 
    }
}