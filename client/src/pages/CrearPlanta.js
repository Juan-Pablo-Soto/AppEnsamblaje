import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CrearPlantas() {
    let navigate = useNavigate()

    const initialValues = {
        nombreEmpresa: "",
        provincia: "",
        canton: "",
        distrito: "",
        restoDireccion: "",
        nombreContacto: "",
        telContacto: "",
    };
    
    const validationSchema = Yup.object().shape({
        nombreEmpresa: Yup.string().required(),
        provincia: Yup.string().required(),
        canton: Yup.string().required(),
        distrito: Yup.string().required(),
        restoDireccion: Yup.string().required(),
        nombreContacto: Yup.string().required(),
        telContacto: Yup.string().required(),

    });
    const onSubmit = (values) => {
        console.log(values)
        axios.post("http://localhost:3001/planta", values)
        navigate()
        alert("Guardado con exito")
        navigate(`/plantas`)
    }


    return (

        <div>Llenar formulario para crear una nueva planta


        <Formik 
            initialValues={initialValues}
            onSubmit = {onSubmit}
            validationSchema={validationSchema}
            >

                <Form >


               
                    <div className="Info">
                     <label className="Tema">Nombre de la planta</label> <ErrorMessage className="error" name="nombreEmpresa" component="span" /><br/><br/>
                    <Field type="text" id="nombre" name="nombreEmpresa" autoComplete="off"/>
                    </div>
                    <div className="Info">
                     <label className="Tema">Provincia</label> <ErrorMessage className="error" name="provincia" component="span" /><br/><br/>
                    <Field type="text" id="provincia" name="provincia" autoComplete="off"/>
                    </div>
                    <div className="Info">
                     <label className="Tema">Canton</label> <ErrorMessage className="error" name="canton" component="span" /><br/><br/>
                    <Field type="text" id="canton" name="canton" autoComplete="off"/>
                    </div>
                    <div className="Info">
                     <label className="Tema">Distrito</label> <ErrorMessage className="error" name="distrito" component="span" /><br/><br/>
                    <Field type="text" id="distrito" name="distrito" autoComplete="off"/>
                    </div>
                    <div className="Info">
                     <label className="Tema">Señas exactas</label> <ErrorMessage className="error" name="restoDireccion" component="span" /><br/><br/>
                    <Field type="text" id="restoDireccion" name="restoDireccion" autoComplete="off"/>
                    </div>
                    <div className="Info">
                     <label className="Tema">Nombre del contacto</label> <ErrorMessage className="error" name="nombreContacto" component="span" /><br/><br/>
                    <Field type="text" id="nombreContacto" name="nombreContacto" autoComplete="off"/>
                    </div>
                    <div className="Info">
                     <label className="Tema">Telefono de la planta</label> <ErrorMessage className="error" name="telContacto" component="span" /><br/><br/>
                    <Field type="text" id="telContacto" name="telContacto" autoComplete="off"/>
                    </div>




                    <button type="submit">Guardar planta</button>

                </Form>
                
                
                </Formik>
                </div>
    );
}
export default CrearPlantas  
