'use strict';

import express from "express";
import { TodosController } from "../controllers/todos.controller";

export const todosRouter = express.Router();

todosRouter.get('/', TodosController.getAll);
todosRouter.post('/', TodosController.createNewTodo);
todosRouter.delete('/:id', TodosController.deleteTodo);
todosRouter.patch('/:id', TodosController.updateTodo);
