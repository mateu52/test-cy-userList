describe('list test', () => {
    it('should show sum users',()=> {
        cy.visit('http://localhost:3000');
        cy.wrap('user.leghth')
        cy.get('.data')
    })
})