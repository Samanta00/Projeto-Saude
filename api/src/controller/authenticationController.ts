import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
const userSchema= require("../models/customersSchema")

const SECRET = process.env.SECRET || 'sua-chave-secreta-padrão';

export const generateToken = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await userSchema.findOne({ email });

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: '30d' });
                user.token = token;
                await user.save();
                console.log('Usuário autenticado com sucesso.');
                return res.json({ tipo: 'Bearer', token });
            }
        }

        console.log('Credenciais inválidas.');
        res.status(401).end();
    } catch (error) {
        console.error('Erro ao gerar o token:', error);
        res.status(500).json({ message: 'Erro ao gerar o token.' });
    }
};
