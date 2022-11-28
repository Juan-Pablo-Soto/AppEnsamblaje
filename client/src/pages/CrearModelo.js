import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CrearModelo() {
    let navigate = useNavigate()

    const initialValues = {
        nombre: "",
        nombreDesigner: "",
        apellidosDesigner: "",
        experienciaDesigner: "",

        tipo: "",
        trans4x4: "",
        trans: "",
        matAscientos: "",
        motor: "",
        tablero: "",
        tapisado: "",
        sonido: "",
        vidrios: "",
        espejos: "",
        sensoresF: "",
        sensoresT: "",
        sensoresL: "",
        cam: "",
    };
    
    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required(),
        nombreDesigner: Yup.string().required(),
        apellidosDesigner: Yup.string().required(),
        experienciaDesigner: Yup.string().required(),
        tipo: Yup.string().required(),
        trans4x4: Yup.string().required(),
        trans: Yup.string().required(),
        matAscientos: Yup.string().required(),
        motor: Yup.string().required(),
        tablero: Yup.string().required(),
        tapisado: Yup.string().required(),
        sonido: Yup.string().required(),
        vidrios: Yup.string().required(),
        espejos: Yup.string().required(),
        sensoresF: Yup.string().required(),
        sensoresT: Yup.string().required(),
        sensoresL: Yup.string().required(),
        cam: Yup.string().required(),
    });
    const onSubmit = (values) => {
        
        switch(values.tipo){
            case "sedan":
                values.nivelDesigner = "junior";
                break;
            case "camioneta":
                values.nivelDesigner = "senior 1";
                break;
            case "lujo":
                values.nivelDesigner = "senior 2";
                break;
            default:
                values.nivelDesigner = "";
                break;

        }

        console.log(values)
        axios.post("http://localhost:3001/automovil", values).then((response) => {
        alert("Guardado con exito")
        navigate("/")
      });
        

    }

    return (
        <div className="crearContainer">
            Diseñador llene esta formulario para crear un nuevo modelo
            <Formik 
            initialValues={initialValues}
            onSubmit = {onSubmit}
            validationSchema={validationSchema}
            >

                <Form >


               
                    <div className="Info">
                     <label className="Tema">Nombre del Diseño</label><br/>
                     <ErrorMessage className="error" name="nombre" component="span" /><br/>
                    <Field type="text" id="nombre" name="nombre" autoComplete="off"/>


                    </div>


                    
                    <div className="Info">
                    <label className="Tema">Nombre del Diseñador</label><br/>
                    <ErrorMessage className="error" name="nombreDesigner" component="span" /><br/>
                    <Field type="text" id="nombreDesigner" name="nombreDesigner" autoComplete="off"/><br/>

                    <label className="Tema">Apellidos del Diseñador</label><br/>
                    <ErrorMessage className="error" name="apellidosDesigner" component="span" /><br/>
                    <Field type="text" id="apellidosDesigner" name="apellidosDesigner" autoComplete="off"/><br/>

                    <label className="Tema">Años de Experiencia</label><br/>
                    <ErrorMessage className="error" name="experienciaDesigner" component="span" /><br/>
                    <Field type="text" id="experienciaDesigner" name="experienciaDesigner" autoComplete="off"/><br/>
                    </div>


                    
                    <div className="Info">
                        
                    <label className="Tema">Tipo</label> <ErrorMessage className="error" name="tipo" component="span" /><br/>
                        

                        <Field type="radio" id="sedan" name="tipo" value="sedan"/>
                        <label >sedán</label><br/>
                        
                        <Field type="radio" id="camioneta" name="tipo" value="camioneta"/>
                        <label >camioneta</label><br/>
                        
                        <Field type="radio" id="lujo" name="tipo" value="lujo"/>
                        <label >sedán de lujo</label><br/>
                    </div>

                    
                    <div className="Info">
                    <label className="Tema" >Detalles de Transmisión</label> <ErrorMessage className="error" name="trans4x4" component="span" /><br/> 
                        <Field type="radio" id="4x4" name="trans4x4" value="4x4"/>
                        <label >4x4</label><br/>
                        
                        <Field type="radio" id="simple" name="trans4x4" value="simple"/>
                        <label >simple</label><br/>
                    </div>

                    
                    <div className="Info">
                    <label  className="Tema">Detalles de Transmisión</label> <ErrorMessage className="error" name="trans" component="span" /><br/>
                        <Field type="radio" id="manual" name="trans" value="manual"/>
                        <label >manual</label><br/>
                        
                        <Field type="radio" id="automatico" name="trans" value="automatico"/>
                        <label >automatico</label><br/>
                        
                        <Field type="radio" id="dual" name="trans" value="dual"/>
                        <label >dual</label><br/>
                    </div>



                    
                    <div className="Info">
                    <label className="Tema">Material de los asientos</label> <ErrorMessage className="error" name="matAscientos" component="span" /><br/>
                        <Field type="radio" id="cuero" name="matAscientos" value="cuero"/>
                        <label >cuero</label><br/>
                        
                        <Field type="radio" id="tela" name="matAscientos" value="tela"/>
                        <label >tela</label><br/>

                    </div>


                    
                    <div className="Info">
                    <label className="Tema">Motor</label> <ErrorMessage className="error" name="motor" component="span" /><br/>
                        <Field type="radio" id="Gasolina" name="motor" value="Gasolina"/>
                        <label >Gasolina</label><br/>
                        <Field type="radio" id="Diesel" name="motor" value="Diesel"/>
                        <label >Diesel</label><br/>
                        <Field type="radio" id="Gas licuado" name="motor" value="Gas licuado"/>
                        <label >Gas licuado</label><br/>
                        <Field type="radio" id="Electrico" name="motor" value="Electrico"/>
                        <label >Eléctrico</label><br/>
                        <Field type="radio" id="Hibrido" name="motor" value="Hibrido"/>
                        <label >Híbrido</label><br/>                        
                    </div>


                    
                    <div className="Info">
                    <label className="Tema">Tablero</label> <ErrorMessage className="error" name="tablero" component="span" /><br/>
                        <Field type="radio" id="analogo" name="tablero" value="analogo"/>
                        <label >análogo</label><br/>
                        <Field type="radio" id="dual" name="tablero" value="dual"/>
                        <label >dual</label><br/>
                        <Field type="radio" id="tactil" name="tablero" value="tactil"/>
                        <label >táctil</label><br/>                      
                    </div>

                    
                    <div className="Info">
                    <label className="Tema">Tapisado</label> <ErrorMessage className="error" name="tapisado" component="span" /><br/>
                        <Field type="radio" id="cuero" name="tapisado" value="cuero"/>
                        <label >cuero</label><br/>
                        <Field type="radio" id="plastico" name="tapisado" value="plastico"/>
                        <label >plástico</label><br/>                   
                    </div>


                    
                    <div className="Info">
                    <label className="Tema">Sistema de sonido</label> <ErrorMessage className="error" name="sonido" component="span" /><br/>
                        <Field type="radio" id="estandar" name="sonido" value="estandar"/>
                        <label >estándar</label><br/>
                        <Field type="radio" id="estereo" name="sonido" value="estereo"/>
                        <label >estéreo 7.1</label><br/>                   
                    </div>

                    <div className="Info">
                        <label className="Tema" >Vidrios eléctricos</label> <ErrorMessage className="error" name="vidrios" component="span" /><br/>
                        <Field type="radio" id="vidrios" name="vidrios" value="si"/><span>si </span>
                        <Field type="radio" id="vidrios" name="vidrios" value="no"/><span>no </span>
                        <br/><label className="Tema" >Espejos eléctricos</label> <ErrorMessage className="error" name="espejos" component="span" /><br/>
                        <Field type="radio" id="espejos" name="espejos" value="si"/><span>si </span>
                        <Field type="radio" id="espejos" name="espejos" value="no"/><span>no </span>
                        <br/><label className="Tema">Sensores de proximidad delanteros</label> <ErrorMessage className="error" name="sensoresF" component="span" /><br/>
                        <Field type="radio" id="sensoresF" name="sensoresF" value="si"/><span>si </span>
                        <Field type="radio" id="sensoresF" name="sensoresF" value="no"/><span>no </span>
                        <br/><label className="Tema">Sensores de proximidad traseros</label> <ErrorMessage className="error" name="sensoresT" component="span" /><br/>
                        <Field type="radio" id="sensoresT" name="sensoresT" value="si"/><span>si </span>
                        <Field type="radio" id="sensoresT" name="sensoresT" value="no"/><span>no </span>
                        <br/><label className="Tema">Sensores de proximidad lateral</label> <ErrorMessage className="error" name="sensoresL" component="span" /><br/>
                        <Field type="radio" id="sensoresL" name="sensoresL" value="si"/><span>si </span>
                        <Field type="radio" id="sensoresL" name="sensoresL" value="no"/><span>no </span>
                        <br/><label className="Tema">Cámara de retroceso</label> <ErrorMessage className="error" name="cam" component="span" /><br/>
                        <Field type="radio" id="cam" name="cam" value="si"/><span>si </span>
                        <Field type="radio" id="cam" name="cam" value="no"/><span>no </span>

                        
                    </div>



                    <button type="submit">Guardar modelo</button>

                </Form>
                
                
                </Formik>
        
        </div>
    )


}

export default CrearModelo  