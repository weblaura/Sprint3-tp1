class IRepository {
    obtenerPorId(id) {
        throw new Error("Método 'obtenerPorId()' no implementado");
    }
    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }
    buscarPorAtributo(atributo, valor){
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }
    obtenerMayorDe30(){
        throw new Error("Método 'obtenerMayorDe30()' no implementado");
    }
    insertSuperHero(newsuperheroe){
        throw new Error("Método 'insertSuperHero()' no implementado");
    }
    updateSuperHero(id, superheroeActualizado){
        throw new Error("Método 'updateSuperHero()' no implementado");
    }
    deleteSuperHeroPorId(id){
        throw new Error("Método 'deleteSuperHeroPorId()' no implementado");
    }
    deleteSuperHeroPorNombre(nombre){
        throw new Error("Método 'deleteSuperHeroPorNombre()' no implementado");
    }
}
export default IRepository;