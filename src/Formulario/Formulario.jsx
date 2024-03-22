import './Formulario.css'

import {useState} from 'react' //Para crear variables de estado dentro del componente


export function Formulario(){

    const[verCedula, modificarCedula] = useState("")
    const[verPassword, modificarPassword] = useState("")
    
    function procesarFormulario(){
        
    }

    return(
        <>
            <section className="container">
                <div className="row justify-content-center text-center">
                    <div className="col12 col-md-4">
                        <img src="../../src/assets/logoSura.png" alt="logo de sura" className="img-fluid" />
                        <form action="" className="border rounded p-2">
                            <h2>Gestiona tus citas</h2>
                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Número de cédula"
                                    id="identificacion"
                                />
                            </div>

                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Password"
                                    id="contraseña"
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