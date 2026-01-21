import { pool } from '../config/config_db.js'
import { validarNome } from '../utils/validar_nome.js'
import { validarNumero } from '../utils/validar_numero.js'

export async function listContacts(req, res) {
    try {
        const [contatos] = await pool.query('SELECT * FROM contatos')

        return res.status(200).json({ contatos })

    } catch (err) {
        res.status(500).json({
            message: 'Erro ao buscar contatos',
            error: err.message
        })
    }
}

export async function createContact(req, res) {
    const { nome, telefone } = req.body

    if (!validarNome(nome)) {
        return res.status(400).json({
            message: 'Não foi possivel cadastrar o contato! O nome deve ter no minimo 2 palavras com 3 letras cada, exemplo: Lucas Santos'
        })
    }

    if (!validarNumero(telefone)) {
        return res.status(400).json({
            message: 'Não foi possivel cadastrar o contato! Telefone invalido'
        })
    }

    try {
        const [result] = await pool.query('INSERT INTO contatos (nome, telefone) VALUES (?, ?)', [nome, telefone])

        return res.status(201).json({ id: result.insertId, nome, telefone })
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao cadastrar o contato',
            error: err.message
        })
    }
}

export async function updateContact(req, res) {
    const { nome, telefone } = req.body
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({
            message: 'Não foi possivel atualizar o contato! Digite um id de usuario valido'
        })
    }

    if (!validarNome(nome)) {
        return res.status(400).json({
            message: 'Não foi possivel atualizar o contato! O nome deve ter no minimo 2 palavras com 3 letras cada, exemplo: Lucas Santos'
        })
    }

    if (!validarNumero(telefone)) {
        return res.status(400).json({
            message: 'Não foi possivel atualizar o contato! Telefone invalido'
        })
    }

    try {
        const [update] = await pool.query(`UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?`, [nome, telefone, id])

        if (update.affectedRows == 0) {
            return res.status(404).json({ message: "Contato não encontrado" })
        }

        return res.status(200).json({ id, nome, telefone })
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao atualizar o contato',
            error: err.message
        })
    }

}

export async function deleteContact(req, res) {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({
            message: 'Não foi possivel deletar o contato! Digite um id de usuario valido'
        })
    }

    try {
        const [result] = await pool.query('DELETE FROM contatos WHERE id = ?', [id])

        if (result.affectedRows == 0) {
            return res.status(404).json({ message: "Contato não encontrado" })
        }

        return res.status(204).send()
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao deletar o contato',
            error: err.message
        })
    }
}