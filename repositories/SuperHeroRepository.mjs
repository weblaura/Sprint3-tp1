
import superHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await superHero.findById(id);
    }
    async obtenerTodos() {
        return await superHero.find({});
    }
    async buscarPorAtributo(atributo, valor){
        const superheroes = await superHero.find();
        return superheroes.filter(hero =>
            String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()));
    }
    async obtenerMayorDe30(){
        const superheroes = await superHero.find();
        return superheroes.filter(hero =>
            hero.edad > 30  && hero.planetaOrigen === "Tierra" && hero.poderes.length >=2);
    }
    async insertSuperHero(newsuperheroe) {
        const { nombreSuperHeroe,
            nombreReal,
            edad,
            planetaOrigen,
            debilidad,
            poderes,
            aliados,
            enemigos,
            creador
          } = newsuperheroe;
        
          const nuevoSuperheroe = new superHero({
            nombreSuperHeroe,
            nombreReal,
            edad,
            planetaOrigen,
            debilidad,
            poderes,
            aliados,
            enemigos,
            creador
          });
          await nuevoSuperheroe.save();
        console.log( 'El nuevo superheroe es:', nuevoSuperheroe );
        return nuevoSuperheroe;
    }
    async updateSuperHero(id, superheroeActualizado) {
        const datosActualizados = await superHero.findByIdAndUpdate(id, superheroeActualizado,
            { new: true,});
        console.log( 'El superheroe actualizado quedo de la siguiente manera:', datosActualizados);
        return datosActualizados;
    }
    async deleteSuperHeroPorId(id) {
        const superheroBorrado = await superHero.findByIdAndDelete(id);
        console.log( 'El superheroe eliminado fue:', superheroBorrado);
        return superheroBorrado;
    }
    async deleteSuperHeroPorNombre(nombre) {
        const superheroBorrado = await superHero.findOneAndDelete(
            { nombreSuperHeroe: nombre});
        console.log( 'El superheroe eliminado fue:', superheroBorrado);
        return superheroBorrado;
    }

}
export default new SuperHeroRepository();