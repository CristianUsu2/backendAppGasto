import DataType from "sequelize"
import { sequelize } from "../database/dbconexion.js"

export const categorias=sequelize.define("categoria",{
    "id_categoria":{
         type: DataType.INTEGER,
         primaryKey:true,
         autoIncrement:true
    },
    "nombre":{
      type:DataType.STRING(32),
      allowNull: false   
    },
    "estado":{
       type:DataType.INTEGER,
       allowNull:false
     }

})

