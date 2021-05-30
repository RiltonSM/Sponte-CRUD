/* eslint-disable no-undef */
describe('Test CRUD Sponte', () => {
    it('Visits the CRUD Sponte', () => {
      cy.visit('localhost:3000/');
    });

    it('Close Tutorial', () => {
        cy.get('.reactour__close').click();
    });
    
    it('Test Interface', () => {
        cy.contains('Sponte');
        cy.get('#list_filter_input');
        cy.get('#table');
        cy.get('#add_button');

        cy.contains('Xbox Series X');

    });

    it('Typing in the Filter Input', () => {
        cy.get('#list_filter_input')
        .type('Xbox')
        .should('have.value', 'Xbox');
    });

    it('Clearing in the Filter Input', () => {
        cy.get('#list_filter_input')
        .clear()
        .should('have.value', '');
    });

    it('Click to open details modal', () => {
        cy.contains('Xbox Series X').click();
    });

    it('Click to close details modal', () => {
        cy.get('#close_modal').click();
    });

    it('Click to open add modal', () => {
        cy.get('#add_button').click();
    });

    it('Add Product', () => {
        cy.get('#name')
        .type('Xbox Live Gold')
        .should('have.value', 'Xbox Live Gold');

        cy.get('#description')
        .type('A assinatura que te permite jogar online no seu Xbox e ganhar jogos todo mês')
        .should('have.value', 'A assinatura que te permite jogar online no seu Xbox e ganhar jogos todo mês');
        
        cy.get('#amount')
        .type('199.90')
        .should('have.value', '199.90');

        cy.get('#quantity')
        .type('4')
        .should('have.value', '4');

        cy.get('#date_input')
        .click();

        cy.contains('19')
        .click({force: true});

        cy.get('#height')
        .type('12')
        .should('have.value', '12');
        
        cy.get('#width')
        .type('1')
        .should('have.value', '1');

        cy.get('#length')
        .type('8')
        .should('have.value', '8');

        cy.contains('Games').click();

        cy.contains('Serviços').click();

        cy.get('#add_button_submit').click();
    });

    it('Click to open edit modal', () => {
        cy.get('#edit_0').click();
    });

    it('Edit Product', () => {
        cy.get('#name')
        .clear()
        .type('Xbox Series X Edited')
        .should('have.value', 'Xbox Series X Edited');

        cy.get('#edit_button_submit').click();
    });

    it('Remove Product', () => {
        cy.get('#remove_0')
        .click();
    });
});