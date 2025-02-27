import ContatoUsuario from '../../fixtures/contato.json'

class CONTATO {

    adicionarComentario() {


        cy.get('#form-field-name')
            .type(ContatoUsuario.nickname, { delay: 100 });

        cy.get('#form-field-email')
            .type(ContatoUsuario.email, { delay: 100 });

        cy.get('#form-field-message')
            .type(ContatoUsuario.empresa, { delay: 100 });

        cy.get('#form-field-field_195975d')
            .type(ContatoUsuario.telefone, { delay: 100 });

        cy.get('#form-field-field_98bbe7d')
            .type(ContatoUsuario.mensagem);

        cy.get('.elementor-field-type-submit > .elementor-button')
            .click();

        cy.get('.elementor-message')
            .should('be.visible')
    }
}

export default new CONTATO();