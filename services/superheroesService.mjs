import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs"; 
export async function obtenerSuperheroePorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}
export async function obtenerTodosLosSuperheroes(){
    return await SuperHeroRepository.obtenerTodos();
}
export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}
export async function obtenerSuperheroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayorDe30();
}
export async function insertSuperHero(newsuperheroe) {
    return await SuperHeroRepository.insertSuperHero(newsuperheroe);
}
export async function updateSuperHero(id, superheroeActualizado) {
    return await SuperHeroRepository.updateSuperHero(nombreSuperHeroe, superheroeActualizado);
}   
export async function deleteSuperHeroPorId(id) {
    return await SuperHeroRepository.deleteSuperHeroPorId(id);
}
export async function deleteSuperHeroPorNombre(nombre) {
    return await SuperHeroRepository.deleteSuperHeroPorNombre(nombre);
}
