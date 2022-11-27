import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import axios from "axios";

function Modelo() {
    let {id} = useParams(); 
    const [modeloObjecto, setModeloObject] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:3001/automovil/${id}`).then((response) => {
            setModeloObject(response.data)
        })
    }, [])
    return (
        
        <div className='carro'> 
              <div className="designer">
                <div className='nombreD'> Nombre Diseñador: {modeloObjecto.nombreDesigner} {modeloObjecto.apellidosDesigner} </div> 
                <div className='expD'> Exp Diseñador: {modeloObjecto.experienciaDesigner} </div> 
                <div className='lvlD'> Nivel Diseñador: {modeloObjecto.nivelDesigner} </div> 


              </div>

              <div className='nombre'> Nombre Diseño: {modeloObjecto.nombre} </div>  
              <div className='tipo'>  Tipo del Diseño:  {modeloObjecto.tipo} </div>
              <div className='trans4x4'> Tipo del Transmisión: {modeloObjecto.trans4x4} </div>
              <div className='trans'> Transmisión: {modeloObjecto.trans} </div>
              <div className='motor'> Tipo del motor: {modeloObjecto.motor} </div>

              <button> Borrar </button>

            </div>

    );

}

export default Modelo;