// Import page elements
const elem = require('../elements/automobileInsurance.elements').ELEMENTS;

class VehicleDataPage {
    
    // Visita a página do formulário de veículo
    visitVehicle() {
        cy.visit('/101/app.php');
    }

    // Preenche os dados do veículo
    fillVehicleData(data) {
        cy.get(elem.make).select(data.make); // Campo: make
        cy.get(elem.model).select(data.model); // Campo: model
        cy.get(elem.cylindercapacity).type(data.cylindercapacity); // Campo: cylindercapacity
        cy.get(elem.engineperformance).type(data.engineperformance); // Campo: engineperformance
        cy.get(elem.dateofmanufacture).type(data.dateofmanufacture); // Campo: dateofmanufacture
        cy.get(elem.numberofseats).select(data.numberofseats); // Campo: numberofseats
        cy.get(elem.numberofseatsmotorcycle).select(data.numberofseatsmotorcycle); // Campo: numberofseatsmotorcycle
        cy.get(elem.fuel).select(data.fuel); // Campo: fuel
        cy.get(elem.payload).type(data.payload); // Campo: payload
        cy.get(elem.totalweight).type(data.totalweight); // Campo: totalweight
        cy.get(elem.listprice).type(data.listprice); // Campo: listprice
        cy.get(elem.annualmileage).type(data.annualmileage); // Campo: annualmileage
        //cy.get(elem.nextButton).click(); // Comentado para evitar navegação automática
    }

    // Avança para a próxima seção (Dados do Segurado)
    nextVehicleData() {
        cy.get(elem.nextButton).click();
    }

    // Preenche os dados do segurado
    fillInsurantData(data) {
        cy.get(elem.firstname).type(data.firstname); // Campo: firstname
        cy.get(elem.lastname).type(data.lastname); // Campo: lastname
        cy.get(elem.birthdate).type(data.birthdate); // Campo: birthdate
        cy.get(elem.country).select(data.country); // Campo: country
        cy.get(elem.zipcode).type(data.zipcode); // Campo: zipcode
        cy.get(elem.occupation).select(data.occupation); // Campo: occupation
        cy.get(elem.speeding).click(); // Marca o checkbox de velocidade
    }

    // Avança para a próxima seção (Dados do Produto)
    nextInsurantData() {
        cy.get(elem.nextButtonInsurant).click();
    }

    // Preenche os dados do produto
    fillProductData(data) {
        cy.get(elem.startdate).type(data.startdate); // Campo: startdate
        cy.get(elem.insurancesum).select(data.insurancesum); // Campo: insurancesum
        cy.get(elem.meritrating).select(data.meritrating); // Campo: meritrating
        cy.get(elem.damageinsurance).select(data.damageinsurance); // Campo: damageinsurance
        cy.contains('label.ideal-radiocheck-label', data.optionalproducts).click(); // Seleciona os produtos opcionais
        cy.get(elem.courtesycar).select(data.courtesycar); // Campo: courtesycar
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
        cy.get(elem.email).type(data.email); // Campo: email
        cy.get(elem.username).type(data.username); // Campo: username
        cy.get(elem.password).type(data.password); // Campo: password
        cy.get(elem.confirmpassword).type(data.confirmpassword); // Confirma a senha
        cy.get(elem.sendemailButton).click(); // Clica no botão de enviar email
        cy.get(elem.successAlert).should('be.visible'); // Verifica se o alerta de sucesso está visível
        cy.contains(elem.successMessage, 'Sending e-mail success!', { timeout: 1000 }).should('be.visible'); // Verifica a mensagem de sucesso
    }
    
}

export default VehicleDataPage;
