
class Home {

    VerificarMensagemBanner() {
        cy.get('[class="elementor-heading-title elementor-size-default"]')
            .should('be.visible')
    }

    VerificarLogo() {
        cy.get('#page > div.elementor.elementor-206.elementor-location-header > div.elementor-element.elementor-element-5d61e4e.e-flex.e-con-boxed.e-con.e-parent.elementor-sticky.elementor-sticky--effects.e-lazyloaded.elementor-sticky--active.elementor-section--handles-inside > div > div.elementor-element.elementor-element-a68b30d.elementor-widget.elementor-widget-theme-site-logo.elementor-widget-image > div > a > img')
            .should('be.visible')
            }
    }

export default new Home();