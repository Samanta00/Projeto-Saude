import express from 'express';

const router = express.Router()

import * as controller from '../controller/customersController'
// const controller = require("../controller/customersController")


const { verificarToken } = require("../middlewares/identificacao")


// Demanda: Criar uma autenticação de acesso de todas as rotas, porém, apenas para usuários inseridos no identificador.


// DEMANDA: visualizar todas as Pessoas cadastradas
router.get("/", controller.getAll)

router.post("/login", controller.login)

// DEMANDA: visualizar uma Pessoa cadastrada
router.get("/:id", controller.getPeople)

// DEMANDA: cadastrar uma Pessoa
router.post("/", controller.createRegistration)

// DEMANDA: atualizar dados de uma Pessoa
router.put("/:id", verificarToken, controller.updatePeopleById)

// DEMANDA: excluir uma Pessoa
router.delete("/:id", verificarToken,controller.deletePeopleById)

export default router;