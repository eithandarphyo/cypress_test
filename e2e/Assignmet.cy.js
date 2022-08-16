describe('Flow Testing', () => {
  it('Verify Page', () => {
    cy.visit('http://automationpractice.com/index.php')
    
  })
  it('Move to Women link', () => {
    cy.get('.sf-menu').trigger('mouseover')
  })

  it('Click sub_menu Tshirt', () => {
    cy.get('.sf-menu > li').contains('T-shirts').click({force: true})
  })

  it('Search item', () => {
    cy.get('input[name="search_query"]').type('Faded Short Sleeve T-shirts')
    cy.get('.button-search').click()
  })

})




