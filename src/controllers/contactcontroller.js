import { pool } from '../config/config_db.js'

export async function listContacts(req, res) {
    const [contatos] = await pool.query('SELECT * FROM contatos')

    return res.json({contatos})
}

export async function createContact(req, res) {
    
}