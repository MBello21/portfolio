
export const App = () => {
    return (
        <div className="d-flex flex-column justify-content-center alig-items-center ">
            <h1 className="text-light-emphasis">Próximamente...</h1>
            <p className="text-light text-center">
                Algo increíble está por llegar. Deja tu correo y sé el primero en enterarte del gran estreno.
            </p>
            <div className="d-flex justify-content-center ">
                <a className="btn btn-outline-light w-25"
                    href="mailto:info@mgbdevops.es?subject=Consulta desde la web en construcción">
                    Quiero saber más
                </a>
            </div>
        </div>
    )
}
