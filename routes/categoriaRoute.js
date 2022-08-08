import { Router } from "express";
import {CrearCategorias,ObtenerCategorias,ActualizarCategoria} from "../controllers/categoriacontroller.js"

export const routeCategoria=Router()


routeCategoria.get("/categoria",ObtenerCategorias)
routeCategoria.post("/categoria/crear",CrearCategorias)
routeCategoria.put("/categoria/editar/:id",ActualizarCategoria)
routeCategoria.put("/categoria/estado/:id",ActualizarCategoria)




