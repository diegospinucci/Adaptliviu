/// <reference types="cypress" />

import COMENT from "../pages/Contato";
import Home from "../pages/homepage/Home";

context('Verificar se a Home Page carrega corretamente', () => {
    beforeEach(() => {
        cy.visit('https://adaptliviu.com.br/');
    })
        it('Verificar HomePage', () => {
            Home.VerificarMensagemBanner();
            Home.VerificarLogo();
        })
})

context('Verificar pedido de contato', () => {
    beforeEach(() => {
        cy.visit('https://adaptliviu.com.br/');
    })
    it('Adicionar comentário', () => {
        COMENT.adicionarComentario();
    })
})
