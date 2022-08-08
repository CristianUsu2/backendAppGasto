import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('Gasto', 'cristianU', '12345', {
    host: 'localhost',
    dialect: 'mssql'
    
  });

