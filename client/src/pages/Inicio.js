import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Inicio() {

    const [Automoviles, setAutomoviles] = useState([]);

    let navigate = useNavigate()

    useEffect(() => {
      axios.get("http://localhost:3001/automovil").then((response) => {
        setAutomoviles(response.data);
      })  
    }, [])
  
    return (

        <div> Lista de modelos creados
            {Automoviles.map((value, key) => {
            return <div className='carro' onClick={() => navigate(`/modelo/${value.id}`)}> 
              <div className="designer">
                <div className='nombreD'> Nombre Diseñador: {value.nombreDesigner} {value.apellidosDesigner} </div> 
                <div className='expD'> Exp Diseñador: {value.experienciaDesigner} </div> 
                <div className='lvlD'> Nivel Diseñador: {value.nivelDesigner} </div> 


              </div>

              <div className='nombre'> Nombre Diseño: {value.nombre} </div>  
              <div className='tipo'>  Tipo del Diseño:  {value.tipo} </div>
              <div className='trans4x4'> Tipo del Transmisión: {value.trans4x4} </div>
              <div className='trans'> Transmisión: {value.trans} </div>
              <div className='motor'> Tipo del motor: {value.motor} </div>

              <button> Borrar </button>

            </div>;

      })}


        </div>
    )


}

export default Inicio