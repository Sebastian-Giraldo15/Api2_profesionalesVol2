const {Schema, model} = require('mongoose')//Crear una coleccion o acceder a colecciones en mongo 

const profecionalesVol_Schema = ({

    tipo_documento: {
        type:String,
        required:[true, 'El Tipo de documento es requerido'],
        enum:['CC', 'PASAPORTE', 'REGISTRO CIVIL'],
    },

    numero_documento:{
        type:String,
        unique:true,
        required:[true, 'El numero de documento es requerido'],
    },

    nombre_profesional:{
        type: String,
        required:[true, 'El nombre es requerido'],
    },

    apellido_profesional:{
        type: String,
        required:[true, 'El nombre es requerido'],
    },

    fecha_nacimiento:{
        type: String,
        required:[true,'La fecha de registro es requerida'],
    },

    edad:{
        type: Number,
        required:[true, 'La edad es requerida'],
    },

    pais_nacimiento:{
        type: String,
        required:[true,'El pais de nacimiento es requerido'],
    },

    dep_nacimiento:{
        type: String,
        required:[true,'El departamento de nacimiento es requerido'],
    },

    mun_nacimiento:{
        type: String,
        required:[true,'El municipio de nacimiento es requerido'],
    },

    genero:{
        type: String,
        required:[true,'El genero es requerido'],
        enum:['Masculino', 'Femenino']
    }
})


module.exports = model('Profesional', profecionalesVol_Schema)
