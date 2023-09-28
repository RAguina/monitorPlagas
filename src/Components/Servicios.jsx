import ServiciosImage from '../assets/tierra.webp';

const Servicios = () => {
    return (
        <div id="serviciosID" className="flex mt-40 justify-center items-center">
            <div className="border-2 border-black p-12"> {/* Añade un borde y padding alrededor del contenido */}
                <div className="text-center mr-8"> {/* Añade margen a la derecha del texto */}
                    <p className="text-3xl">
                        <span className="font-bold block mb-8">Que servicios prestamos?</span>
                        *Monitoreamos la presencia de insectos como Bichos Bolitas, Babosas y otros.
                        <br />
                        *Aplicamos la solucion del producto necesario para exterminar cualquier amenaza.
                        <br />
                        *Hacemos Muestreos de Suelos para detectar insuficiencias de Macro y Micronutrientes mediante un análisis en laboratorio.
                        <br />
                        *Aplicamos un novedoso y revolucionador producto.
                    </p>
                </div>
                <img
                    src={ServiciosImage}
                    className="mt-10 transition duration-500 ease-in-out transform hover:brightness-75
                    w-120 shadow-md" // Añade margen a la derecha de la imagen
                    alt="ServiciosImage"
                />
            </div>
        </div>
    )
}

export default Servicios
