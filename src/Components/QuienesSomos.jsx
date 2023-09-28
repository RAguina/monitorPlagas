import QuienesSomosImage from '../assets/4.jpg';

const QuienesSomos = () => {
    return (
        <div id="quienesSomosID" className="flex mt-40 justify-center items-center">
            <div className="border-2 border-black p-12 mr-8"> {/* Añade un borde y padding alrededor del contenido */}
                <img
                    src={QuienesSomosImage}
                    className="transition duration-500 ease-in-out transform hover:brightness-75
                    w-100 shadow-md" // Añade margen a la derecha de la imagen
                    alt="QuienesSomosImage"
                />
                <div className="text-center mt-5"> {/* Añade margen arriba del texto */}
                    <p className="text-3xl">
                        <span className="font-bold block mb-8">Quienes Somos?</span>
                        Somos una empresa con mas de 10 años de experiencia dedicada al Monitoreo de plagas y Muestreo de Suelos.
                        Contamos con las herramientas y conocimientos para llevar a cabo mejoras en los rindes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos
