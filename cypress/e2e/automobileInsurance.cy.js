// Importa funções de validação e a classe da página de dados do veículo
import { validarCampoSelecao, validarCampoTexto } from '../support/utils/automobileInsuranceUtils';
import VehicleDataPage from '../support/pageObjects/automobileInsurance.page';

// Instancia a página de dados do veículo
const vehicleDataPage = new VehicleDataPage();
const elem = require('../support/elements/automobileInsurance.elements').ELEMENTS;

// Importa os dados dos arquivos JSON
const dados = require('../fixtures/automobileInsuranceData.json');
const { vehicleData, insurantData, productData, sendQuote } = dados;

// Importa mensagens de erro dos arquivos JSON
const msg_erro = require('../fixtures/automobileInsuranceError.json');
const { msgVehicleData, msgInsurantData, msgProductData } = msg_erro;

// Descreve o conjunto de testes para o formulário de seguros
describe('Formulário de Seguros', () => {

  // Teste para enviar o formulário de seguros com sucesso
  it('Enviar o formulário de seguros com sucesso', () => {
    vehicleDataPage.visitVehicle(); // Visita a página inicial do formulário de veículo
    vehicleDataPage.fillVehicleData(vehicleData); // Preenche os campos do veículo com dados válidos
    vehicleDataPage.nextVehicleData(); // Avança para a próxima seção do formulário
    vehicleDataPage.fillInsurantData(insurantData); // Preenche os dados do segurado
    vehicleDataPage.nextInsurantData(); // Avança para a seção de produto
    vehicleDataPage.fillProductData(productData); // Preenche os dados do produto
    vehicleDataPage.nextProductData(); // Avança para a seção de opções de preço
    vehicleDataPage.fillPriceOptionData(); // Seleciona as opções de preço
    vehicleDataPage.fillSendQuoteData(sendQuote); // Preenche os dados de envio da cotação
  });

  // Teste para validar mensagens de erro em campos obrigatórios da seção VehicleData
  it('Validar mensagens de erro em todos os campos obrigatórios de VehicleData', () => {
    vehicleDataPage.visitVehicle(); // Visita a página inicial do formulário de veículo
    vehicleDataPage.fillVehicleData(vehicleData); // Preenche os campos do veículo com dados válidos
    // Percorre cada campo de vehicleData para validação
    for (const campo of Object.keys(vehicleData)) {
      if (['make', 'model', 'numberofseats', 'numberofseatsmotorcycle', 'fuel'].includes(campo)) {
        validarCampoSelecao(campo, msgVehicleData[campo], elem); // Valida campos de seleção
      } else if (['cylindercapacity', 'engineperformance', 'payload', 'totalweight', 'listprice', 'annualmileage'].includes(campo)) {
        validarCampoTexto(campo, '112121155484845', msgVehicleData[campo], elem); // Valida campos de texto
      }
    }
  });

  // Teste para validar mensagens de erro em campos obrigatórios da seção InsurantData
  it('Validar mensagens de erro em todos os campos obrigatórios de InsurantData', () => {
    vehicleDataPage.visitVehicle(); // Visita a página inicial do formulário de veículo
    vehicleDataPage.nextVehicleData(); // Avança para a seção de dados do segurado
    // Percorre cada campo de insurantData para validação
    for (const campo of Object.keys(insurantData)) {
      if (['country'].includes(campo)) {
        validarCampoSelecao(campo, msgInsurantData[campo], elem); // Valida campos de seleção
      } else if (['firstname', 'lastname', 'zipcode', 'occupation'].includes(campo)) {
        validarCampoTexto(campo, '1231231231', msgInsurantData[campo], elem); // Valida campos de texto
      }
    }
  });

  // Teste para validar mensagens de erro em campos obrigatórios da seção ProductData
  it('Validar mensagens de erro em todos os campos obrigatórios de ProductData', () => {
    vehicleDataPage.visitVehicle(); // Visita a página inicial do formulário de veículo
    vehicleDataPage.nextVehicleData(); // Avança para a seção de dados do segurado
    vehicleDataPage.fillInsurantData(insurantData); // Preenche os dados do segurado
    vehicleDataPage.nextInsurantData(); // Avança para a seção de dados do produto
    vehicleDataPage.fillProductData(productData); // Preenche os dados do produto
    // Percorre cada campo de msgProductData para validação
    for (const campo of Object.keys(msgProductData)) {
      if (['insurancesum', 'meritrating', 'damageinsurance', 'courtesycar'].includes(campo)) {
        validarCampoSelecao(campo, msgProductData[campo], elem); // Valida campos de seleção
      }
    }
  });
});
