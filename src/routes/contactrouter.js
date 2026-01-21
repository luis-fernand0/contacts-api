import { Router } from "express";
import { createContact, listContacts } from "../controllers/contactcontroller.js";

const contact = Router()

contact.get('/contatos', listContacts)
contact.post('/contatos', createContact)

export default contact