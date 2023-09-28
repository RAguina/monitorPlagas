import React, {useState} from 'react'
import Papa from 'papaparse';
import ReactToPrint from 'react-to-print';
import logoAuravant from '../Img/logoAuravant.svg'
import logoSoja from '../Img/soja.png'
import logoJM from '../Img/10.png'
import logoSunflower from '../Img/sunflower.png'
import logoEmail from '../Img/Email.svg'
import { obtenerFechaActual, renderTableRow }from '../Utils.jsx'
  
  function GenerarReporte() {
    const [data, setData] = useState([]);
    const [superficie, setSuperficie] = useState('');
    const [cultivo, setCultivo] = useState('');
    const [estadoFenologico, setEstadoFenologico] = useState('');
    const [nombreLote, setNombreLote] = useState('');
    const [loteImage, setLoteImage] = useState(null);
    const [inputValues, setInputValues] = useState(Array(25).fill(0));



    const [showDetails, setShowDetails] = useState({ bichoBolita: false, babosa: false, huevos: false, gusano:false, babosaChata:false });

    const handleToggleDetails = (event, type) => {
      event.preventDefault();
      setShowDetails({ ...showDetails, [type]: !showDetails[type] });
    };

 
    const [showExtraImages, setShowExtraImages] = useState(false);
    const [loteImageBabosa, setLoteImageBabosa] = useState(null);
    const [loteImageHuevos, setLoteImageHuevos] = useState(null);
    const [loteImageGusano, setLoteImageGusano] = useState(null);
    const [loteImageBabosaChata, setLoteImageBabosaChata] = useState(null);

    const handleInputChange = (index, event) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = parseFloat(event.target.value);
      setInputValues(newInputValues);
    };
    /*const handleInputChange = (index, event) => {
      const newInputValues = [...inputValues];
      newInputValues[index + 5] = event.target.value; // Ajusta el índice según el rango que necesites
      setInputValues(newInputValues);
    };*/

    // Función para manejar la carga del archivo LoteImage
    const handleImageUpload = event => {
      const file = event.target.files[0];
      
      if (file) { // Asegúrate de que el archivo existe antes de intentar leerlo
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setLoteImage(reader.result);
        }
    
        reader.readAsDataURL(file);
      }
    };
    

    // Función para manejar la carga del archivo CSV
    const handleFileUpload = event => {
      const file = event.target.files[0];
      
      if (file) { // Asegúrate de que el archivo existe antes de intentar leerlo
        Papa.parse(file, {
          download: true,
          header: true,
          complete: function(results) {
            setData(results.data);
          }
        });
      }
    };

    const handleExtraImagesToggle = () => {
      setShowExtraImages(!showExtraImages);
    };

    // Función para manejar la carga de las imágenes opcionales, Babosas lote e intervalo
    const handleExtraImageUpload = (event, setImage) => {
      const file = event.target.files[0];
      console.log("habndleExtraImage")
      
      if (file) { // Asegúrate de que el archivo existe antes de intentar leerlo
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setImage(reader.result);
        }
    
        reader.readAsDataURL(file);
      }
    };
    
      return (

    <div className='mx-4 text-xl font-bold bg-white text-black py-2 px-4 rounded-xl avoid-break'>
          {/* Formulario para cargar el archivo y los valores */}

      <form>
        <div>
        <label className='m-2 block text-left'>
          Cargar imagen bicho bolita:
          <input type="file" onChange={handleImageUpload} />
        </label>
        <button onClick={(event) => handleToggleDetails(event, 'bichoBolita')}>{showDetails.bichoBolita ? 'Ocultar detalles' : 'Agregar detalles'}</button>

      {showDetails.bichoBolita && [...Array(5)].map((_, index) => (
        <div key={index}>
          <label>Porcentaje {index + 1}</label>
          <input type="number" value={inputValues[index]} onChange={(event) => handleInputChange(index, event)} />
        </div>
      ))}
        </div>

        <label className='m-2 block text-left'>
          Cargar archivo CSV:
          <input type="file" onChange={handleFileUpload} />
        </label>
        <label className='m-2 block text-left'>
          Superficie:
          <input className="border border-3" type="number" value={superficie} onChange={e => setSuperficie(e.target.value)} />
        </label>
        <label className='m-2 block text-left'>
          Cultivo:
          <input className="border border-3" type="text" value={cultivo} onChange={e => setCultivo(e.target.value)} />
        </label>
        <label className='m-2 block text-left'>
          Rastrojo:
          <input className="border border-3" type="text" value={estadoFenologico} onChange={e => setEstadoFenologico(e.target.value)} />
        </label>
        <label className='m-2 block text-left'>
          Nombre del Lote:
          <input className="border border-3" type="text" value={nombreLote} onChange={e => setNombreLote(e.target.value)} />
        </label>
        
    

        <div>
          <button type="button" onClick={handleExtraImagesToggle}>
            {showExtraImages ? 'Ocultar' : 'Mostrar'} Imágenes adicionales
          </button>
        </div>
        
    <>
    <div>
      <label className='m-2 block text-left'>
        Cargar imagen Babosa:
        <input type="file" onChange={(event) => handleExtraImageUpload(event, setLoteImageBabosa)} />
      </label>
      <button onClick={(event) => handleToggleDetails(event, 'babosa')}>{showDetails.babosa ? 'Ocultar detalles' : 'Agregar detalles'}</button>

      {showDetails.babosa && [...Array(5)].map((_, index) => (
        <div key={index}>
          <label>Porcentaje {index + 1}</label>
          <input type="number" value={inputValues[index + 5]} onChange={(event) => handleInputChange(index + 5, event)} />
        </div>
      ))}
    </div>

    <div>
      <label className='m-2 block text-left'>
        Cargar imagen Huevos de Babosas:
        <input type="file" onChange={(event) => handleExtraImageUpload(event, setLoteImageHuevos)} />
      </label>
      <button onClick={(event) => handleToggleDetails(event, 'huevos')}>{showDetails.huevos ? 'Ocultar detalles' : 'Agregar detalles'}</button>

      {showDetails.huevos && [...Array(5)].map((_, index) => (
        <div key={index}>
          <label>Porcentaje {index + 1}</label>
          <input type="number" value={inputValues[index + 10]} onChange={(event) => handleInputChange(index + 10, event)} />
        </div>
      ))}
    </div>
    
    <div>
    <label className='m-2 block text-left'>
      Cargar imagen Gusano Blanco:
      <input type="file" onChange={(event) => handleExtraImageUpload(event, setLoteImageGusano)} />
    </label>
    <button onClick={(event) => handleToggleDetails(event, 'gusano')}>{showDetails.gusano ? 'Ocultar detalles' : 'Agregar detalles'}</button>

      {showDetails.gusano && [...Array(5)].map((_, index) => (
        <div key={index}>
          <label>Porcentaje {index + 1}</label>
          <input type="number" value={inputValues[index + 15]} onChange={(event) => handleInputChange(index + 15, event)} />
        </div>
      ))}
    </div>

    <div>
    <label className='m-2 block text-left'>
      Cargar imagen Babosa Chata:
      <input type="file" onChange={(event) => handleExtraImageUpload(event, setLoteImageBabosaChata)} />
    </label>
    <button onClick={(event) => handleToggleDetails(event, 'babosaChata')}>{showDetails.babosaChata ? 'Ocultar detalles' : 'Agregar detalles'}</button>
    {showDetails.babosaChata && [...Array(5)].map((_, index) => (
        <div key={index}>
          <label>Porcentaje {index + 1}</label>
          <input type="number" value={inputValues[index + 20]} onChange={(event) => handleInputChange(index + 20, event)} />
        </div>
      ))}
    </div>
    </>

    
  
      </form>
      
    <div className='flex flex-row items-center mb-8 w-3/4 mx-auto'>
      <img className="w-2/5" src={logoJM} alt="logoJM" />
      <img className="w-2/5 ml-40" src={logoAuravant} alt="logoAuravant" />
    </div>

    <div>
      <hr className='ml-24 border-t-2 border-black w-4/5'/>
    </div>

            <h1 className='text-5xl text-blue-300 text-left mt-8 mb-12'>Reporte de Monitoreo</h1>
            <span className='text-black text-2xl underline hover:text-5xl'>Por Jeremias Matar</span>
            <div className='text-black underline hover:text-4xl mt-4'>Email: jeremiasmatar@gmail.com</div> 
                <h1 className='mt-20 hover:font-black'>Lote: <span className="text-3xl">{nombreLote}</span></h1>
                <h2 className='mt-4 hover:font-black'>Fecha: {obtenerFechaActual()}</h2>
            <div className="flex justify-center mt-12">
                <div className="flex flex-col w-auto md:w-1/3 p-4 mt-12 border-8 border-black">
                    <h1 className='text-3xl mb-8'>Superficie del Mapa</h1>
                    <span className='text-center text-red-600 hover:text-3xl hover:font-black'>{superficie} Ha.</span>
                </div>
                  <div className="flex flex-col w-auto md:w-1/3 p-4 mt-12 border-8 border-black">
                    <h1 className='text-3xl mb-8'>Cultivo</h1>
                    <div className='flex items-center justify-center text-center text-red-600 hover:text-3xl hover:font-black'>
                        {cultivo.toLowerCase().includes('soja') && <img className="" src={logoSoja} alt="logoSoja" />}
                        {cultivo.toLowerCase().includes('girasol') && <img className="" src={logoSunflower} alt="logoSunflower" />}
                        <span>{cultivo}</span>
                    </div>
                  </div>
                <div className="flex flex-col w-auto md:w-1/3 p-4 mt-12 border-8 border-black">
                    <h1 className='text-3xl mb-8'>Rastrojo</h1>
                    <span className='text-center text-red-600 hover:text-3xl hover:font-black'>{estadoFenologico}</span>
                </div>
            </div>

<div className="flex justify-center mt-12 ">
  <div className='w-128 flex flex-col items-start mt-16 mr-4 avoid-break'>
    <span className='text-bold underline '> Mapa Bicho Bolita (BB)</span>
    {loteImage && 
    <> 
    <img className="w-full h-auto" src={loteImage} alt="Imagen Bicho bolita"/>
    <table className="w-64 p-4 mt-10">
  <thead>
    <tr>
      <th className="text-xl font-bold mb-2">Ambiente</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
  <tr><td className="mb-1 bg-green-700 border border-gray-200">{((superficie * inputValues[0])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-green-300 border border-gray-200">{((superficie * inputValues[1])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-yellow-200 border border-gray-200">{((superficie * inputValues[2])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-orange-500 border border-gray-200">{((superficie * inputValues[3])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-red-600 border border-gray-200">{((superficie * inputValues[4])/100).toFixed(2)}Ha</td></tr>
  </tbody>
</table>
      </>
      }
  </div>
</div>

{showExtraImages && (
  
  <div className="flex flex-col items-center mt-12">
    <div className="w-128 mr-4 avoid-break">
      {loteImageBabosa && <span className='text-bold underline mb-4 text-center'>Mapa Babosas</span>}
      {loteImageBabosa && 
        <>
        <img className="h-auto mx-auto relative" src={loteImageBabosa} alt="Imagen Babosa"/>
        <table className="w-64 p-4 mt-10">
          <thead>
            <tr>
              <th className="text-xl font-bold mb-2">Ambiente</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="mb-1 bg-green-700 border border-gray-200">{((superficie * inputValues[5])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-green-300 border border-gray-200">{((superficie * inputValues[6])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-yellow-200 border border-gray-200">{((superficie * inputValues[7])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-orange-500 border border-gray-200">{((superficie * inputValues[8])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-red-600 border border-gray-200">{((superficie * inputValues[9])/100).toFixed(2)}Ha</td></tr>
          </tbody>
        </table>
        </>
      }
    </div>

    <div className="w-128 mr-4 avoid-break">
      {loteImageHuevos && <span className='text-bold underline mb-4 text-center'>Mapa Huevos de Babosas</span>}
      {loteImageHuevos && 
      <>
      <img className="h-auto mx-auto relative" src={loteImageHuevos} alt="Imagen Huevos Babosas"/>
      <table className="w-64 p-4 mt-10">
        <thead>
          <tr>
            <th className="text-xl font-bold mb-2">Ambiente</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        <tr><td className="mb-1 bg-green-700 border border-gray-200">{((superficie * inputValues[10])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-green-300 border border-gray-200">{((superficie * inputValues[11])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-yellow-200 border border-gray-200">{((superficie * inputValues[12])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-orange-500 border border-gray-200">{((superficie * inputValues[13])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-red-600 border border-gray-200">{((superficie * inputValues[14])/100).toFixed(2)}Ha</td></tr>
        </tbody>
      </table>
      </>
      }
    </div>


    <div className="w-128 mr-4 avoid-break">
      {loteImageGusano && <span className='text-bold underline mb-4 text-center'>Mapa Gusano Blanco</span>}
      {loteImageGusano && 
      <>
      <img className="h-auto mx-auto relative" src={loteImageGusano} alt="Imagen Gusano Blanco"/>
      <table className="w-64 p-4 mt-10">
        <thead>
          <tr>
            <th className="text-xl font-bold mb-2">Ambiente</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        <tr><td className="mb-1 bg-green-700 border border-gray-200">{((superficie * inputValues[15])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-green-300 border border-gray-200">{((superficie * inputValues[16])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-yellow-200 border border-gray-200">{((superficie * inputValues[17])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-orange-500 border border-gray-200">{((superficie * inputValues[18])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-red-600 border border-gray-200">{((superficie * inputValues[19])/100).toFixed(2)}Ha</td></tr>
        </tbody>
      </table>
      </>
      }
    </div>

    <div className="w-128 mr-4 avoid-break">
      {loteImageBabosaChata && <span className='text-bold underline mb-4 text-center'>Mapa Babosa Chata<br></br>Importante: Esta especie no afecta al cultivo</span>}
      {loteImageBabosaChata && 
      <>
      <img className="h-auto mx-auto relative" src={loteImageBabosaChata} alt="Imagen Babosa Chata"/>
      <table className="w-64 p-4 mt-10">
        <thead>
          <tr>
            <th className="text-xl font-bold mb-2">Ambiente</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        <tr><td className="mb-1 bg-green-700 border border-gray-200">{((superficie * inputValues[20])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-green-300 border border-gray-200">{((superficie * inputValues[21])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-yellow-200 border border-gray-200">{((superficie * inputValues[22])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-orange-500 border border-gray-200">{((superficie * inputValues[23])/100).toFixed(2)}Ha</td></tr>
            <tr><td className="mb-1 bg-red-600 border border-gray-200">{((superficie * inputValues[24])/100).toFixed(2)}Ha</td></tr>
        </tbody>
      </table>
      </>
      }
    </div>
  </div>





)}


    <div>
      <div className="flex justify-center mt-20">
        <table className="table-auto border-black border-4">
          <thead>
            <tr>
              {data[0] && Object.keys(data[0]).map((key, i) => (
                <th key={i} className="border-black border-2">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.filter(row => Object.values(row).some(value => value)).map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((value, j) => (
                  <td key={j} className="border-black border-2 px-4 py-2">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>                
    {/* Botón para imprimir los datos 
    <ReactToPrint
      trigger={() => <button>Imprimir</button>}
      content={() => this.componentRef}
    /> */}
  

        </div>
    );
  }

  export default GenerarReporte