// Função para validar campo de seleção
export const validarCampoSelecao = (campo, msgErro, elem) => {
    cy.get(elem[campo]).select('default'); // Seleciona 'default' no dropdown
    cy.get(elem[campo]).should('be.visible').as(campo); // Verifica se está visível
    cy.get(elem[campo]).next('span.error').should('contain', msgErro); // Verifica a mensagem de erro
};
  
// Função para validar campo de texto
export const validarCampoTexto = (campo, valorInvalido, msgErro, elem) => {
    cy.get(elem[campo]).type('112121155484845'); // Digita um valor inválido
    cy.get(elem[campo]).should('be.visible').as(campo); // Verifica se está visível
    cy.get(elem[campo]).next('span.error').should('contain', msgErro); // Verifica a mensagem de erro
};