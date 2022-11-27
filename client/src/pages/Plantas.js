import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";


function Plantas() {

    const [ListaPlantas, setPlantas] = useState([]);
    const [Listamodelos, setModelos] = useState([]);


    useEffect(() => {
      axios.get("http://localhost:3001/planta").then((response) => {
        setPlantas(response.data);
      })

      axios.get("http://localhost:3001/automovil").then((response) => {
        setModelos(response.data);
      })
    }, [])
    

    return (

        <div>Lista de plantas disponibles
            {ListaPlantas.map((value, key) => {
            return <div className='planta'> 
      
              <div >
                <div > Nombre de la empresa: {value.nombreEmpresa} {value.apellidosDesigner} </div> 
                <div > Provincia: {value.provincia} </div> 
                <div > Canton: {value.canton} </div> 
                <div > Distrito: {value.distrito} </div>

              </div>



                <button> Agregar Modelo a bloque A </button>
                <select name="modeloA" id="modeloA">
                    {Listamodelos.map((cvalue, key) => {

                        return <option value = {cvalue.nombre }>{cvalue.nombre}</option>
                    })}   
                </select><br/>

                <button> Agregar Modelo a bloque B </button>
                <select name="modeloA" id="modeloA">
                    {Listamodelos.map((cvalue, key) => {

                        return <option value = {cvalue.nombre }>{cvalue.nombre}</option>
                    })}   
                </select><br/>

                <button> Agregar Modelo a bloque C </button>
                <select name="modeloC" id="modeloC">
                    {Listamodelos.map((cvalue, key) => {

                        return <option value = {cvalue.nombre }>{cvalue.nombre}</option>
                    })}
                </select><br/>
                <button> Ver detalles de planta </button>
                <button> Borrar </button>

            </div>;

      })}


        </div>
    )


}

export default Plantas