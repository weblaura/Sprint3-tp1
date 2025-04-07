import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    insertSuperHeroController,
    updateSuperHeroController,
    deleteSuperHeroPorIdController,
    deleteSuperHeroPorNombreController
} from '../controllers/superheroesController.mjs';

const router = express.Router();
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

router.get('/heroes/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);

router.post('/heroes', insertSuperHeroController);
router.put('/heroes/id/:id', updateSuperHeroController);
router.delete('/heroes/id/:id', deleteSuperHeroPorIdController);
router.delete('/heroes/nombre/:nombre', deleteSuperHeroPorNombreController);



export default router;