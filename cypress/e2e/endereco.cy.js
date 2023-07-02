import EnderecoPage from '../support/page-objects/endereco.page'
const perfil = require("../fixtures/perfil.json")
const dadosEndereco = require("../fixtures/endereco.json")

describe("Funcionalidade de endereços - faturamento e entrega", () => {
  beforeEach(() => {
    cy.visit("/minha-conta")
    cy.login(perfil.usuario, perfil.senha)
  })

  it("Deve editar de faturamento com sucesso", () => {
    EnderecoPage.editarEnderecoFaturamento('Humberto','Gouveia','Apple Inc','Brasil','Rua Green','10','São Paulo','São Paulo','08225000')
    cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    
  })

  it.only("Deve editar de faturamento com sucesso - Usando arquivo de dados", () => {
    EnderecoPage.editarEnderecoFaturamento(
      dadosEndereco[1].nome,
      dadosEndereco[1].sobrenome,
      dadosEndereco[1].empresa,  
      dadosEndereco[1].pais,
      dadosEndereco[1].endereco,
      dadosEndereco[1].numero,
      dadosEndereco[1].cidade,
      dadosEndereco[1].estado,
      dadosEndereco[1].cep)
    cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    
  })
})
