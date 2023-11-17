import { Todo } from "../models/Todo";
import { TodoParams } from "../types/TodoParams";

const getAll = async () => {
  const todos = await Todo.findAll();

  return todos;
};

const createNewTodo = async({ 
  title, 
  priority, 
}: TodoParams) => {
  const todo = await Todo.create({ title, priority, completed: false });

  return todo;
};

const getById = async (id: number) => {
  const todo = await Todo.findByPk(id);

  return todo;
};

export const TodosService = {
  getAll,
  createNewTodo,
  getById,
};
