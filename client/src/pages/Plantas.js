import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
function Plantas() {

    const [ListaPlantas, setPlantas] = useState([]);
    const [Listamodelos, setModelos] = useState([]);

    let navigate = useNavigate();
    useEffect(() => {
      axios.get("http://localhost:3001/planta").then((response) => {
        setPlantas(response.data);
      })

      axios.get("http://localhost:3001/automovil").then((response) => {
        setModelos(response.data);
      })
    }, [])

    const busqueda = (a) => {
      let x = document.getElementById("busqueda").value;
      if(x!==""){
        axios.get(`http://localhost:3001/planta/bus/${x}`).then((response) => {
          setPlantas(response.data);
        })
      }
      else{
        axios.get("http://localhost:3001/planta").then((response) => {
          setPlantas(response.data);
        })
      }
    }

    return (

        <div>Lista de plantas disponibles
            <br/><input type="text" placeholder="Busqueda" id="busqueda" onChange= {busqueda}></input>
            {ListaPlantas.map((value, key) => {
            return <div className='planta' onClick={() => navigate(`/planta/${value.id}`)}> 
      
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

            </div>;

      })}


        </div>
    )


}

export default Plantas