import { categorias } from "../models/categorias.js";

export const ObtenerCategorias = (req, res) => {
  try {
    const categorias = categorias.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const CrearCategorias = async (req, res) => {
  try {
    const { nombre } = req.body;
    const estado = 1;
    const categoriaNueva = await categorias.create({
      nombre,
      estado,
    });
    res.json(categoriaNueva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const ActualizarCategoria = async (req, res) => {
  try {
    const {id} = req.params;
    const { nombre } = req.body;
    const busqueda = await categorias.findByPk(id);
    if (busqueda != null) {
      busqueda.nombre = nombre;
      busqueda.save();
      res.json(busqueda);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const ActualizarEstado=async(req,res)=>{
   try{
     const {id}=req.params;
     const busqueda=await categorias.findByPk(id)
     if(busqueda != null){
        if(busqueda.estado == 1){
          busqueda.estado=0
        }else{
         busqueda.estado=1
        }
        busqueda.save()
        res.json(busqueda)
     }
   }catch(error){
    res.status(500).json({message:error.message})
   }
}