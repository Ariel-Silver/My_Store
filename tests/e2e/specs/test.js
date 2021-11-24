// https://docs.cypress.io/api/introduction/api.html


describe('Test Gunpla Store', () => {
  it('entrar a la tienda con boton', () => {
    cy.visit('/');
    cy.wait(3000);
    cy.get('button[name="button01"]').click();
  })
  it('probar buscador', () => {
    cy.visit('/Products');
    cy.get('input').type('Batman');
    cy.wait(100);
    cy.get('input').clear();
    cy.wait(100);
    cy.get('input').type('Deathscythe');
    cy.get('button[name="carrito"]').click();
    cy.wait(100);
    cy.get('input').clear();
    cy.wait(100);
    cy.get('input').type('RG');
    cy.wait(100);
    cy.get('input').clear();
    cy.wait(100);
    cy.get('input').type('QAN');
    cy.get('button[name="carrito"]').click();
    cy.wait(100);
  })
  it('probar agregar producto', () => {
    cy.visit('/AddProducts');
    cy.get('input[name="name"]').type('1/144 HG RX-78-02 GUNDAM (GUNDAM THE ORIGIN VER.)');
    cy.get('input[name="serie"]').type('Mobile Suit Gundam The Origin');
    cy.get('select[name="categoria"]').select('HG').should('have.value', 'HG');
    cy.get('input[type="number"]').type('12990');
    cy.get('select[name="brand"]').select('Bandai (Japan)').should('have.value', 'BI');
    cy.get('select[name="discount"]').select('No').should('have.value', 'false');
    cy.get('input[name="zero"]').type('0');
    cy.get('input[name="url"]').type('https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bans58929_0.png');
    cy.get('button[name="button02"]').click();
    cy.wait(2000);
  })
})
