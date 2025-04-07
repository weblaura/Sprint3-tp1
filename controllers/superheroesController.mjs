import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, obtenerSuperheroesMayoresDe30, buscarSuperheroesPorAtributo, insertSuperHero, updateSuperHero, deleteSuperHeroPorId, deleteSuperHeroPorNombre } from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs';

export async function obtenerSuperheroePorIdController(req, res) {
    try{
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({mensaje: 'Superheroe no encontrado'});
        }
        const superheroesFormateados = renderizarSuperheroe(superheroe);
        res.status(202).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superheroe', error:error.message});
    }
}
export async function obtenerTodosLosSuperheroesController(req, res) {
    try{
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje:'Error al obtener los superheroes', error: error.message});
    }
}
export async function buscarSuperheroesPorAtributoController(req, res) {
    try{
        const { atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo( atributo, valor);
        if (superheroes.length === 0){
            return res.status(404).send({ mensaje: 'No se encontraron superheroes con ese atributo'});
        } 
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error){
        res.status(500).send({ mensaje: 'Error al buscar los superheroes', error: error.message});
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res){
    try{
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superheroes mayores de 30 años'});
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error){
        res.status(500).send({mensaje: 'Error al obtener superheroes mayores de 30', error: error.message});
    }
}
export async function insertSuperHeroController(req, res){
    try{
        const newsuperheroe = req.body;
        if (!newsuperheroe.length=== 0)
            {
            return res.status(404).json({ mensaje: 'Faltan datos requeridos'});
        }
        const nuevoSuperheroe = await insertSuperHero(newsuperheroe);
        if (!nuevoSuperheroe) {
      return res.status(500).send({
        mensaje: "No se pudo guardar el nuevo superhéroe",
        });
        }  
            return res.status(200).json(renderizarSuperheroe(nuevoSuperheroe));
        } catch (error){
            res.status(500).send({mensaje: 'Error al insertar superheroe', error: error.message});
        }
}

export async function updateSuperHeroController(req, res){
    try{
        const { id } = req.params;
        const superheroeActualizado = req.body;
        if (!superheroeActualizado || Object.keys(superheroeActualizado).length === 0   ) {
            return res.status(400).send({ mensaje: 'No se encontraron datos para actualizar'});
        }
        
        if (!superheroeActualizado ) {
            return res.status(404).send({ mensaje: 'No se encontro superheroe actualizado'});
        }
        const superheroeModificado = await updateSuperHero(id, superheroeActualizado);
        res.status(200).json(superheroesFormateados(superheroeModificado));
    } catch (error){
        res.status(500).send({mensaje: 'Error al obtener lista de superheroe actualizado', error: error.message});
    }
}
export async function deleteSuperHeroPorIdController(req, res){
    try{
        const { id } = req.params;
        const result = await deleteSuperHeroPorId(id);
        if (result.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superheroes borrado'});
        }
        const superheroeFormateado = renderizarSuperheroe(result);
    res.status(200).json(superheroeFormateado);
    } catch (error){
        res.status(500).send({mensaje: 'Error al borrar superheroe ', error: error.message});
    }
}
export async function deleteSuperHeroPorNombreController(req, res){
    try{
        const { nombre } = req.params;
        const superheroBorrado = await deleteSuperHeroPorNombre(nombre);
        if (!superheroBorrado) {
            return res.status(404).send({ mensaje: 'No se encontraro superheroe borrado con ese nombre'});
        }
        const superheroeFormateado = renderizarSuperheroe(superheroBorrado);
    res.status(200).json(superheroeFormateado);
    } catch (error){
        res.status(500).send({mensaje: 'Error al borar superheroe ', error: error.message});
    }
}