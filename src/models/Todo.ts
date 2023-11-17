import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'todos',
  modelName: 'Todo',
  timestamps: false,
})
export class Todo extends Model {
  @Column(DataType.INTEGER)
  priority: number;

  @Column(DataType.BOOLEAN)
  completed: boolean;

  @Column(DataType.TEXT)
  title: string;
}
