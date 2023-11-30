import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

export enum USER_TYPE {
  DEFAULT = 'default',
  ADMIN = 'admin',
}

@Table({
  tableName: 'users',
  timestamps: true
})
export class User extends Model<User> {

  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @Column({
  type: DataType.STRING,
  allowNull: false
  })
  username: string;

  @Column({
  type: DataType.STRING,
  allowNull: false
  })
  email: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(USER_TYPE),
    defaultValue: USER_TYPE.DEFAULT,
    allowNull: false,
  })
  type: USER_TYPE;
}
