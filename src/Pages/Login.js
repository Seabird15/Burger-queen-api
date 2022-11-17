import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
//
import axios from 'axios'
//
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../Pages/Login.module.css'


export function Login () {
    const apiURL = "http://localhost:8080/login"
    //const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const [state, setState] = useState({
        form:{
            "email":'',
            "password":''
        }, 
        //DEFINIR ERROR AL LOGIN
        error:false,
        errorMsg:"asd"
    })

    const handleChange=async e=>{
        await setState({
            ...state,
            form:{
                ...state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(state.form) //MOSTRAR EN CONSOLA LO QUE SE INGRESA EN LOS INPUT
    }
    //MANEJADOR DEL BOTON/INICIAR SESION
    const iniciarSesion=async()=>{
        let url = apiURL + "login";
        axios.post(url, state.form)
        .then( response =>{
            console.log(response)
            if(response.statusText === 'OK'){
                localStorage.setItem("token",response.data.accessToken)
                navigate("/Home")
                
            }else{
                console.log("error")
            }
        }).catch( error =>{
            console.log(error);
            setState({
                ...state,
                error : true,
                errorMsg : "Usuario y/o contraseña incorrecta"
            })
        })
    }

    return (
        <div className={styles.containerPrincipal}>
          <div className={styles.containerSecundario}>
                <h3>BIENVENIDX, POR FAVOR INGRESA TU USUARIO</h3>
              <div className={styles.formGroup}>
                  <label>Correo: </label>
                  <br />
                  <input
                      type='text'
                      className={styles.formControl}
                      name="email"
                      onChange={handleChange}
                  />
                  <br />
                  <label>Contraseña: </label>
                  <br />
                  <input
                      type='password'
                      className={styles.formControl}
                      name="password"
                      onChange={handleChange}
                  />
                  <br />
                  <button className={styles.btnPrimary} onClick={()=> iniciarSesion()}> Iniciar Sesión</button>
              </div>
          {state.error === true && 
              <div className="alert alert-danger" role="alert">
                  {state.errorMsg}
              </div>
          }        
          </div>
        </div>
      );
}

