
const Nav = () => {
    return (
        <nav className="flex justify-start mt-10">
        <a href="#" className="mx-4 text-xl font-black bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded">
          Inicio
        </a>
        <a href="#quienesSomosID" className="mx-4 text-xl font-black bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded">
          Quienes Somos
        </a>
        <a href="#serviciosID" className="mx-4 text-xl font-black bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded">
          Servicios
        </a>
        <a href="#" className="mx-4 text-xl font-black bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded">
          Videos
        </a>
        <a href="#contactoID" className="mx-4 text-xl font-black bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded">
          Contacto
        </a>
        <a href="/generar-reporte" className="mx-4 text-xl font-black bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded">
          Generar Reporte
        </a>
        </nav>

    )
}

export default Nav