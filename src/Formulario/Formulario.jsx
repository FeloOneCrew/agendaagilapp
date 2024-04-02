import './Formulario.css'

import {useState} from 'react' //Para crear variables de estado dentro del componente
import { useNavigate } from 'react-router-dom'


export function Formulario(){

    const[verCedula, guardarCedula] = useState("")
    const[verPassword, guardarPassword] = useState("")

    //Para navegar entre componentes, debo declarar una variable
    //que almacene el hook
    let enrutador = useNavigate()
    
    function procesarFormulario(evento){
        evento.preventDefault()

        //Voy a enrutar otro componente(¿Como lanzo un componente desde cero?)
        enrutador("/home")
    }

    return(
        <>
            <section className="container">
                <div className="row justify-content-center text-center">
                    <div className="col12 col-md-4">
                        <img src="../../src/assets/logoSura.png" alt="logo de sura" className="img-fluid" />
                        <form 
                            action="" 
                            className="border rounded p-2"
                            onSubmit={procesarFormulario}
                        >
                            <h2>Gestiona tus citas</h2>
                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Número de cédula"
                                    id="identificacion"
                                    onChange={function(evento){
                                        guardarCedula(evento.target.value)
                                    }}
                                />
                            </div>

                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="contraseña"
                                    id="contraseña"
                                    onChange={function(evento){
                                        guardarPassword(evento.target.value)
                                    }}
                                />
                            </div>
                            <button type="submit" className="btn mt-3 colorbtn">Ingresar</button>
                        </form>
                        
                    </div>
                </div>
            </section>  
        </>
    )
}