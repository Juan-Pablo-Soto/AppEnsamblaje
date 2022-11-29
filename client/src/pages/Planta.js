import React from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Planta() {

    const [plantaObjecto, setPlanta] = useState({});
    const [Listamodelos, setModelos] = useState([]);
    const [ListaReplicasA, setReplicasA] = useState([]);
    const [ListaReplicasB, setReplicasB] = useState([]);
    const [ListaReplicasC, setReplicasC] = useState([]);
    let {id} = useParams(); 
    let navigate = useNavigate();
    useEffect(() => {
      axios.get(`http://localhost:3001/planta/${id}`).then((response) => {
        setPlanta(response.data);
      })

      axios.get("http://localhost:3001/automovil").then((response) => {
        setModelos(response.data);
      })


      axios.get(`http://localhost:3001/replica/A/${id}`).then((response) => {
        setReplicasA(response.data);

      })

      axios.get(`http://localhost:3001/replica/B/${id}`).then((response) => {
        setReplicasB(response.data);

      })


      axios.get(`http://localhost:3001/replica/C/${id}`).then((response) => {
        setReplicasC(response.data);
      })


    }, [])

    const deletePlanta = (id) => {
        axios
          .delete(`http://localhost:3001/planta/${id}`).then(() => {  navigate("/plantas")})
    };


    const deleteReplica = (id) => {
      axios
        .delete(`http://localhost:3001/replica/${id}`).then(() => {  navigate("/plantas")})
  };
    const agregarReplica = (bloque) => {
      let values = {};
      values.bloque = bloque;
      values.PlantumId = id;

      let eleID = "modelo"
      

      let s = document.getElementById(eleID + bloque).value
      values.AutomovilId = Listamodelos[s].id
      values.nombreDis = Listamodelos[s].nombre;
      values.owner = document.getElementById("newOwner").value

      console.log(values);

      axios.post("http://localhost:3001/replica", values).then((response) => { 
        navigate("/plantas")
      })  
      

    }


    const checkNumber = (bloque) => {
      switch (bloque) {
        case "A":
          if(ListaReplicasA.length > 9){
            document.getElementById("btnA").disabled = true;
          }else{agregarReplica("A")}
          break;
          case "B":
            if(ListaReplicasB.length > 9){
              document.getElementById("btnB").disabled = true;
            }else{agregarReplica("B")}
            break;
          case "C":
            if(ListaReplicasC.length > 9){
              document.getElementById("btnC").disabled = true;
            }else{agregarReplica("C")}
            break;
      }}



    return (
       
            <div className='planta'> 

              <div >
                <div > Nombre de la empresa: {plantaObjecto.nombreEmpresa}</div>
                <div > Provincia: {plantaObjecto.provincia} </div> 
                <div > Canton: {plantaObjecto.canton} </div> 
                <div > Distrito: {plantaObjecto.distrito} </div>
              </div>
              <label>Agregar a nombre de: </label>
              <input type="text" id="newOwner"></input><br/>

              <div className="bloque" id="A">
                  {ListaReplicasA.map((cvalue, key) => {
                    return (
                    
                    <div className="replica">  
                    <label >Placa: {cvalue.id}   </label><br/>
                    <label >Nombre del Diseño: {cvalue.nombreDis}   </label><br/>
                    <label >Nombre del Dueño: {cvalue.owner}   </label><br/>
                    <button onClick={()=>{

                      console.log(cvalue.id)
                      deleteReplica(cvalue.id)
                      
                      }}>-</button>
                    </div>
                    )})}

                  <button id="btnA" onClick={()=> {
                    checkNumber("A")
                    }}> 
                  Agregar Modelo a bloque A </button>
                  
                  
                  <select name="modeloA" id="modeloA">
                  {Listamodelos.map((cvalue, key) => {
                    return <option value = {key}>{cvalue.nombre}</option>
                  })
                  }   
                  </select><br/>

              </div>
              <div className="bloque" id="B">
                  {ListaReplicasB.map((cvalue, key) => {
                    return (
                    
                    <div className="replica">  
                    <label >Placa: {cvalue.id}   </label><br/>
                    <label >Nombre del Diseño: {cvalue.nombreDis}   </label><br/>
                    <label >Nombre del Dueño: {cvalue.owner}   </label><br/>
                    <button onClick={()=>{

                      console.log(cvalue.id)
                      deleteReplica(cvalue.id)
                      
                      }}>-</button>
                    </div>
                    )})}

                  <button id="btnB" onClick={()=> {
                    checkNumber("B")
                    }}> 
                  Agregar Modelo a bloque B </button>
                  
                  
                  <select name="modeloB" id="modeloB">
                  {Listamodelos.map((cvalue, key) => {
                    return <option value = {key}>{cvalue.nombre}</option>
                  })
                  }   
                  </select><br/>

              </div>
              <div className="bloque" id="C">
                  {ListaReplicasC.map((cvalue, key) => {
                    return (
                    
                    <div className="replica">  
                    <label >Placa: {cvalue.id}   </label><br/>
                    <label >Nombre del Diseño: {cvalue.nombreDis}   </label><br/>
                    <label >Nombre del Dueño: {cvalue.owner}   </label><br/>
                    <button onClick={()=>{

                      console.log(cvalue.id)
                      deleteReplica(cvalue.id)
                      
                      }}>-</button>
                    </div>
                    )})}

                  <button id="btnC" onClick={()=> {
                    checkNumber("C")
                    }}> 
                  Agregar Modelo a bloque C </button>
                  
                  
                  <select name="modeloC" id="modeloC">
                  {Listamodelos.map((cvalue, key) => {
                    return <option value = {key}>{cvalue.nombre}</option>
                  })
                  }   
                  </select><br/>

              </div>
              


              </div>
  

    )}

export default Planta