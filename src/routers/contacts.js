import { Router } from 'express';
import {
  createContactsController,
  deleteContactsController,
  getContactByIdController,
  getContactsController,
  patchContactsController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(getContactByIdController));

contactsRouter.post('/', ctrlWrapper(createContactsController));

contactsRouter.patch('/:contactId', ctrlWrapper(patchContactsController));

contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactsController));

export default contactsRouter;
