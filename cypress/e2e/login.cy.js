
const { faker } = require('@faker-js/faker')
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade de Login',()=>{ 

beforeEach(() => {
    cy.visit('/minha-conta')

})

afterEach(() => {
    cy.screenshot()
})

    it('Deve fazer login com sucesso',()=>{
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
        .should('contain','Olá, Aluno')

    })

    it('Deve realizar um login - utilizando Fixtures',()=>{
        cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(dados.usuario, {log:false})
            cy.get('#password').type(dados.senha,{log:false})
            cy.get('.woocommerce-form > .button').click()
            
            cy.get('.page-title').should('contain','Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain','Olá, Aluno')
        })
    })

    it('Deve exibir uma mensagem de erro ao realizar login com user errado',()=>{
        cy.get('#username').type(faker.internet.email())
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('Deve exibir uma mensagem de erro ao realizar login com senha errado',()=>{
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(faker.internet.password({length:10}))
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain',`Erro: a senha fornecida para o e-mail ${perfil.usuario} está incorreta. Perdeu a senha?`)
        })
})