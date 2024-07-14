## Tricentis Vericode

Repositório de processo seletivo na Vericode.
Ferramentas utilizadas: Cypress, JS, PageObejcts.

---

## Configurações

1. git clone
2. bundle install ....

---

## Comandos de Execução
* bundle exec cucumber features -t "@tag" ou cucumber env= "ambiente" (dev ou hml).
* npm run cypress:run / Para rodar em endless e apagar os arquivos de Screenshot gerado nos testes anterios
.

 _Variáveis de ambiente

* env = dev/qa/prod
* nav = chrome/firefox/headless
* driver = local/docker/api

## install cypress-mochawesome-reporter
* npm i --save-dev cypress-mochawesome-reporter
or
* yarn add -D cypress-mochawesome-reporter