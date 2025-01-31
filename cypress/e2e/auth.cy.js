context('Pruebas de Autenticación', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
    });
  
    it('Prueba de Navegación Antes de Iniciar Sesión', () => {
      cy.visit('http://localhost:5173/bookings');
      cy.get('[data-cy=emailInput]').should('be.visible');
    });
  
    it('Prueba de Navegación Después de Iniciar Sesión', () => {
      cy.get('[data-cy=emailInput]').type('alberto@gmail.com');
      cy.get('[data-cy=passwordInput]').type('alberto1234');
      cy.get('[data-cy=submitButton]').click();
      cy.get('[data-cy=dashboard]').should('be.visible');
  
      
    });

    it('Prueba de Navegación a ruta privada Después de Iniciar Sesión', () => {
      cy.get('[data-cy=emailInput]').type('alberto@gmail.com');
      cy.get('[data-cy=passwordInput]').type('alberto1234');
      cy.get('[data-cy=submitButton]').click();
      cy.get('[data-cy=dashboard]').should('be.visible');
      cy.visit('http://localhost:5173/bookings');
      cy.get('[data-cy=bookings]').should('be.visible');
    });

  
    it('Prueba de Inicio de Sesión Fallido', () => {
      cy.get('[data-cy=emailInput]').type('incorrecto@gmail.com');
      cy.get('[data-cy=passwordInput]').type('incorrecto');
      cy.get('[data-cy=submitButton]').click();
      cy.get('[data-cy=emailInput]').should('be.visible');
    });
  
    it('Prueba de Inicio de Sesión Exitoso', () => {
      cy.get('[data-cy=emailInput]').type('alberto@gmail.com');
      cy.get('[data-cy=passwordInput]').type('alberto1234');
      cy.get('[data-cy=submitButton]').click();
      cy.get('[data-cy=dashboard]').should('be.visible');
    });
});