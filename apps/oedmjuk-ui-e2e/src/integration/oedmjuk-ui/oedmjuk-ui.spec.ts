describe('oedmjuk-ui: OedmjukUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=oedmjukui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to OedmjukUi!');
    });
});
