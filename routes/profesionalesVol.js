const {Router} = require('express')

const route = Router()


//Listar todos los datos
const {getProfesionales,postProfesionales,putProfesionales,deleteProfesionales} = require('../controllers/profesionalesVol')//Importando el controlador

route.get('/', getProfesionales)

route.post('/', postProfesionales)

route.put('/', putProfesionales)

route.delete('/', deleteProfesionales)



module.exports = route 