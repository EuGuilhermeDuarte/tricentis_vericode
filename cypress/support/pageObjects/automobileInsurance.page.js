// Importa os elementos da página
const elem = require('../elements/automobileInsurance.elements').ELEMENTS;

class VehicleDataPage {
    
    // Visita a página do formulário de veículo
    visitVehicle() {
        cy.visit('/101/app.php');
    }

    // Preenche os dados do veículo
    fillVehicleData(data) {
        cy.get(elem.make).select(data.make); // Seleciona a marca do veículo
        cy.get(elem.model).select(data.model); // Seleciona o modelo do veículo
        cy.get(elem.cylindercapacity).type(data.cylindercapacity); // Preenche a capacidade do cilindro
        cy.get(elem.engineperformance).type(data.engineperformance); // Preenche o desempenho do motor
        cy.get(elem.dateofmanufacture).type(data.dateofmanufacture); // Preenche a data de fabricação
        cy.get(elem.numberofseats).select(data.numberofseats); // Seleciona o número de assentos
        cy.get(elem.numberofseatsmotorcycle).select(data.numberofseatsmotorcycle); // Seleciona o número de assentos para moto
        cy.get(elem.fuel).select(data.fuel); // Seleciona o tipo de combustível
        cy.get(elem.payload).type(data.payload); // Preenche a carga útil
        cy.get(elem.totalweight).type(data.totalweight); // Preenche o peso total
        cy.get(elem.listprice).type(data.listprice); // Preenche o preço de lista
        cy.get(elem.annualmileage).type(data.annualmileage); // Preenche a quilometragem anual
        //cy.get(elem.nextButton).click(); // Comentado para evitar navegação automática
    }

    // Avança para a próxima seção (Dados do Segurado)
    nextVehicleData() {
        cy.get(elem.nextButton).click();
    }

    // Preenche os dados do segurado
    fillInsurantData(data) {
        cy.get(elem.firstname).type(data.firstname); // Preenche o primeiro nome
        cy.get(elem.lastname).type(data.lastname); // Preenche o sobrenome
        cy.get(elem.birthdate).type(data.birthdate); // Preenche a data de nascimento
        cy.get(elem.country).select(data.country); // Seleciona o país
        cy.get(elem.zipcode).type(data.zipcode); // Preenche o CEP
        cy.get(elem.occupation).select(data.occupation); // Seleciona a ocupação
        cy.get(elem.speeding).click(); // Marca o checkbox de velocidade
    }

    // Avança para a próxima seção (Dados do Produto)
    nextInsurantData() {
        cy.get(elem.nextButtonInsurant).click();
    }

    // Preenche os dados do produto
    fillProductData(data) {
        cy.get(elem.startdate).type(data.startdate); // Preenche a data de início
        cy.get(elem.insurancesum).select(data.insurancesum); // Seleciona o valor do seguro
        cy.get(elem.meritrating).select(data.meritrating); // Seleciona a classificação de mérito
        cy.get(elem.damageinsurance).select(data.damageinsurance); // Seleciona o seguro contra danos
        cy.contains('label.ideal-radiocheck-label', data.optionalproducts).click(); // Seleciona os produtos opcionais
        cy.get(elem.courtesycar).select(data.courtesycar); // Seleciona o carro de cortesia
    }

    // Avança para a próxima seção (Opção de Preço)
    nextProductData() {
        cy.get(elem.nextSelectPriceOption).click();
    }

    // Preenche a opção de preço
    fillPriceOptionData() {
        cy.get(elem.selectSilver).check({ force: true }); // Seleciona a opção "Silver"
        cy.get(elem.nextSendQuote).click(); // Avança para a seção de envio de cotação
    }
    
    // Preenche os dados de envio da cotação
    fillSendQuoteData(data) {
        cy.get(elem.email).type(data.email); // Preenche o email
        cy.get(elem.username).type(data.username); // Preenche o nome de usuário
        cy.get(elem.password).type(data.password); // Preenche a senha
        cy.get(elem.confirmpassword).type(data.confirmpassword); // Confirma a senha
        cy.get(elem.sendemailButton).click(); // Clica no botão de enviar email
        cy.get(elem.successAlert).should('be.visible'); // Verifica se o alerta de sucesso está visível
        cy.contains(elem.successMessage, 'Sending e-mail success!', { timeout: 1000 }).should('be.visible'); // Verifica a mensagem de sucesso
    }
    
}

export default VehicleDataPage;
