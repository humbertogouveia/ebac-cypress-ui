/// <reference types="cypress" />

describe("Funcionalidade Página de produtos", () => {
  beforeEach(() => {
    cy.visit('/produtos/')
  })
  it("Deve selecionar o primeiro produto da lista", () => {
    cy.get('[class="product-block grid"]').first().click()
  })

  it("Deve selecionar o último produto da lista", () => {
    cy.get('[class="product-block grid"]').last().click()
  })

  it("Deve selecionar o terceiro produto da lista", () => {
    cy.get('[class="product-block grid"]').eq("3").click()
  })

  it("Deve clicar em um item dentro da lista chamado Ariel Roll Sleeve Sweatshirt", () => {
    cy.get('[class="product-block grid"]')
      .contains("Ariel Roll Sleeve Sweatshirt")
      .click()
  })

  it("Deve adicionar um produto ao carrinho utilizando comando customizado", () => {
    cy.addProdutos("Atlas Fitness Tank", "S", "Blue", 1)
  })
})
