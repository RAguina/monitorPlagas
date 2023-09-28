import logoImage from '../assets/logov1.jpg'
import Nav from './Nav'

function Header(){
    return(
        <> 
        <form className="flex flex-col items-center">
            <div className="flex items-center justify-center"> {/* Añade justify-center para centrar el logo */}
                
                <div className="flex flex-col items-center align-items">
                    <img
                        src={logoImage}
                        className="transition duration-500 ease-in-out transform hover:brightness-75
                        w-148 shadow-md" // Cambia w-32 a w-48 para hacer el logo más grande
                        alt="Necogreens logo"
                    />
                
                <span className="text-indigo-700 mt-12 mb-10 font-bold text-4xl">Servicios al campo</span>
                </div>
            </div>
        </form>

        <Nav/>
        </>
    )
}



export default Header;