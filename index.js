import Express from "express";
import Cors from "cors";
import Morgan from "morgan";
import { sequelize } from "./database/dbconexion.js";
import {routeCategoria} from "./routes/categoriaRoute.js"
import "./models/categorias.js"

const app = Express();
const port = 4000;

app.use(Cors());
app.use(Morgan("dev"));
app.use(Express.json())
app.use(routeCategoria)


app.set("port", process.env.PORT || port);
const main = async () => {
  try {
    await sequelize.sync()
    app.listen(port, () => {
      console.log("server abierto desde  ", port);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
