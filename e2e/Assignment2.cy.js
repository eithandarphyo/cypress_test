describe('Checking Response', () => {
  it('Response Status Check', () => {
    cy.request('https://reqres.in/api/users?page=2').then((response) => {
        expect(response.status).to.eq(200)
    })
  })

  it('Total pages equal 2', () => {
    cy.request('https://reqres.in/api/users?page=2').its('body.total_pages').should('eq',2)
  })

  it('Email checking', () => {
    cy.request('https://reqres.in/api/users?page=2').its('body.data').each(($ele, index) => {
        const result = $ele.email.includes('byron.fields@reqres.in')
        if(result == true ) {
          cy.log("Email check passed")
        }
    })
  })

})

