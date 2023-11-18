'use strict';

import { TodosService } from "../services/todo.service";
import { ControllerAction } from "../types/ControllerAction";

const getAll: ControllerAction = async(req, res) => {
  const products = await TodosService.getAll();

  res.send(products);
};

const createNewTodo: ControllerAction = async(req, res) => {
  const { title, priority } = req.body;

  if (!title || !priority) {
    res.sendStatus(422);

    return;
  }

  const todo = await TodosService.createNewTodo({ title, priority });

  res.status(201);
  res.send(todo);
};

const deleteTodo: ControllerAction = async(req, res) => {
  const { id } = req.params;

  const todo = await TodosService.getById(+id);

  if (!todo) {
    res.sendStatus(404);

    return;
  }

  await todo.destroy();

  res.sendStatus(204);
  res.send(todo);
};

const updateTodo: ControllerAction = async(req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const todo = await TodosService.getById(+id);

  if (!todo) {
    res.sendStatus(404);

    return;
  }

  if (typeof completed !== 'boolean') {
    res.sendStatus(422);

    return;
  }

  await todo.update({ completed });

  res.status(200);
  res.send(todo);
};

export const TodosController = {
  getAll,
  createNewTodo,
  deleteTodo,
  updateTodo,
};