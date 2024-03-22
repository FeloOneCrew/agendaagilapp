import "./Home.css"

import basedatos from "../utils/basedatos.json"

export function Home(){

    console.log(basedatos[0])

    return(//Zona de renderizado
        <>
            <section  className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="fuente2">
                            Servicios a un clic
                        </h3>
                        <h2 className="text-muted">
                            Hola, {basedatos[0].nombreUsuario} <span className="fuente"></span>
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
                                <p className="fuente">{basedatos[0].medicoDeFamilia}</p>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-2 mt-3">
                            <i class="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-3">
                                <br />
                                <p>TIPO AFILIADO</p>
                                <p>{basedatos[0].grupoDeIngreso}</p>
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
                                <p>{basedatos[0].ips}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="container my-5">
                <div className="row">
                    <div className="col12 col-md-5">
                        <h2>Citas Médicas</h2>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    {basedatos[0].citasMedicas.map(function(citas){
                        return(
                            <div className="col">
                                <div className="card h-100 shadow px-2">
                                    <h3>{citas.especialidad}</h3>
                                    <h4><i className="bi bi-calendar-check"></i> {citas.fecha}</h4>
                                    <h4>Dirección: {citas.direccion}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}