
import express from 'express';
const router = express.Router()
import { generateToken } from '../controller/authenticationController';


// Demanda: Criar uma autenticação de acesso de todas as rotas, porém, apenas para usuários inseridos no identificador.
router.post('/login', generateToken)



export default router 