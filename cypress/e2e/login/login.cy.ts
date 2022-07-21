describe('Login', () => {
  beforeEach(() => {
    cy.fixture('url').then((url) => {
      cy.visit(url.loginPage);
    });
  })

  it('login successfully', () => {
    cy.fixture('user').then((userFixture) => {
      cy.login(userFixture.existingUser.email, userFixture.existingUser.password)
      cy.contains('Example Domain');
    })

  })
})
