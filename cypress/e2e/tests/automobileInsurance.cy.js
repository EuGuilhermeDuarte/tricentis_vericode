// Importa funções de validação de campos e a classe da página de dados do veículo
import { validarCampoSelecao, validarCampoTexto } from '../../support/utils/automobileInsuranceUtils';
import VehicleDataPage from '../../support/pageObjects/automobileInsurance.page';

// Instancia a página de dados do veículo
const vehicleDataPage = new VehicleDataPage();
const elem = require('../../support/elements/automobileInsurance.elements').ELEMENTS;

// Importa os dados dos arquivos JSON
const dados = require('../../fixtures/automobileInsuranceData.json');
const { vehicleData, insurantData, productData, sendQuote } = dados;

// Importa mensagens de erro dos arquivos JSON
const msg_erro = require('../../fixtures/automobileInsuranceError.json');
const { msgVehicleData, msgInsurantData, msgProductData } = msg_erro;

// Primeiro conjunto de testes: Preencher todo o formulário
describe('Formulário de Seguros', () => {
  it('Enviar o formulário de seguros com sucesso', () => {
    vehicleDataPage.visitVehicle(); // Aqui estamos abrindo a página inicial do formulário de veículo
    vehicleDataPage.fillVehicleData(vehicleData); // Preenchemos os campos do veículo com os dados do JSON
    vehicleDataPage.nextVehicleData(); // Avançamos para a próxima parte do formulário
    vehicleDataPage.fillInsurantData(insurantData); // Aqui inserimos os dados do segurado
    vehicleDataPage.nextInsurantData(); // Avançamos novamente para a próxima seção do formulário
    vehicleDataPage.fillProductData(productData); // Preenchemos os dados do produto a ser segurado
    vehicleDataPage.nextProductData(); // Avançamos para a próxima seção do formulário
    vehicleDataPage.fillPriceOptionData(); // Aqui selecionamos opções de preço e enviamos a cotação
    vehicleDataPage.fillSendQuoteData(sendQuote); // Enviamos os dados para finalizar a cotação
  });

  it('Validar mensagens de erro em todos os campos obrigatórios de VehicleData', () => {
    vehicleDataPage.visitVehicle(); // Inicializamos a página do formulário de veículo
    vehicleDataPage.fillVehicleData(vehicleData); // Preenchemos os dados do veículo com informações válidas
    // Percorre os campos de vehicleData para validação
    for (const campo of Object.keys(vehicleData)) {
      if (['make', 'model', 'numberofseats', 'numberofseatsmotorcycle', 'fuel'].includes(campo)) {
        // Valida campos de seleção
        validarCampoSelecao(campo, msgVehicleData[campo], elem); // Verificamos se os campos de seleção estão corretos
      } else if (['cylindercapacity', 'engineperformance', 'payload', 'totalweight', 'listprice', 'annualmileage'].includes(campo)) {
        // Valida campos de texto
        validarCampoTexto(campo, '1231231231', msgVehicleData[campo], elem); // Verificamos se os campos de texto estão corretos
      }
      cy.screenshot(`Campo: ${campo} obrigatórios de Vehicle Data`)
    }
  });

  // Validação de dados do segurado
  it('Validar mensagens de erro em todos os campos obrigatórios de insurantData', () => {
    vehicleDataPage.visitVehicle(); // Inicializamos a página do formulário de veículo
    vehicleDataPage.nextVehicleData(); // Avançamos para a próxima seção do formulário
    // Percorre os campos de insurantData para validação
    for (const campo of Object.keys(insurantData)) {
      if (['country'].includes(campo)) {
        // Valida campos de seleção
        validarCampoSelecao(campo, msgInsurantData[campo], elem); // Verificamos se os campos de seleção estão corretos
      } else if (['firstname', 'lastname', 'zipcode', 'occupation'].includes(campo)) {
        // Valida campos de texto
        validarCampoTexto(campo, '1231231231', msgInsurantData[campo], elem); // Verificamos se os campos de texto estão corretos
      }
      cy.screenshot(`Campo: ${campo} obrigatórios de Insurant Data`)
    }
  });

  // Validação de dados do produto
  it('Validar mensagens de erro em todos os campos obrigatórios de productData', () => {
    vehicleDataPage.visitVehicle(); // Inicializamos a página do formulário de veículo
    vehicleDataPage.nextVehicleData(); // Avançamos para a próxima seção do formulário
    vehicleDataPage.fillInsurantData(insurantData); // Preenchemos os dados do segurado
    vehicleDataPage.nextInsurantData(); // Avançamos para a próxima seção do formulário
    vehicleDataPage.fillProductData(productData); // Preenchemos os dados do produto a ser segurado
    // Percorre os campos de msgProductData para validação
    for (const campo of Object.keys(msgProductData)) {
      if (['insurancesum', 'meritrating', 'damageinsurance', 'courtesycar'].includes(campo)) {
        // Valida campos de seleção
        validarCampoSelecao(campo, msgProductData[campo], elem); // Verificamos se os campos de seleção estão corretos
      } 
      cy.screenshot(`Campo: ${campo} obrigatórios de Product Data`)
    }
  });
});