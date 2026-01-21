import { Router } from "express";
import { createContact, deleteContact, listContacts, updateContact } from "../controllers/contactcontroller.js";

const contact = Router()

contact.get('/contatos', listContacts)
contact.post('/contatos', createContact)
contact.patch('/contatos/:id', updateContact)
contact.delete('/contatos/:id', deleteContact)

export default contact