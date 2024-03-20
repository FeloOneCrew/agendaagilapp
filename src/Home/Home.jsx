import "./Home.css"
import {inventario} from "../utils/medicamentos"

export function Home(){
    //Zona de manipulacion de Datos
    let nombrePaciente = "Felipe Gómez"
    let sedePaciente = "Suramericana"
    let nombreMedico = "Pablo Perez"
    console.log(inventario)

    //A los arreglos los puedo manipular para controlar que informacion voy a presentar

    //1. Funcion de filtrado de datos
    //condicion de filtrado(pregunta(si/no))
    let resultado = inventario.filter(function(auxiliar){
        return(auxiliar.nombre=="Acetaminofen")
    })

    console.log(resultado)

    return(//Zona de renderizado
        <>
            <section  className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="fuente2">
                            Servicios a un clic
                        </h3>
                        <h2 className="text-muted">
                            Hola, <span className="fuente">{nombrePaciente}</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus saepe obcaecati possimus laudantium laborum soluta dicta quasi corrupti sunt libero aliquid magnam, molestiae voluptates repellat minus nemo mollitia nostrum. Odit iusto minima sunt vel? Blanditiis laudantium illum illo, veniam optio rerum enim reiciendis soluta, minus vitae quam ducimus exercitationem.
                        </p>

                    </div>
                    <div className="col-12 col-md-6">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Tu grupo familiar</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div className="row">
                            <div className="col-12 col-md-2 mt-3">
                                <i class="bi bi-person-workspace fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-3">
                                <br />
                                <p>MÉDICO FAMILIAR</p>
                                <p className="fuente">{nombreMedico}</p>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-2 mt-3">
                            <i class="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-3">
                                <br />
                                <p>TIPO AFILIADO</p>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-2 mt-3">
                                <i class="bi bi-suitcase-lg fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-3">
                                <br />
                                <p>TIPO DE AFILIACIÓN</p>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-2 mt-3">
                                <i class="bi bi-hospital fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-3">
                                <br />
                                <p>IPS ACTUAL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}