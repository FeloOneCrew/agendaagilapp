import {Home} from "../Home/Home"
import {Formulario} from "../Formulario/Formulario"

import {Routes, Route} from "react-router-dom" //Siempre va igual

export function Rutas(){
    /*Siempre se pone                 
        <Route>
                        
        </Route>
    */
    return(
        <>
            <Routes>
                <Route path="/" element={<Formulario></Formulario>}> </Route>
                <Route path="/home" element={<Home></Home>}> </Route>
            </Routes>
        </>
    )

}