import React from 'react';
import WhatsAppLogo from '../assets/whatsapp-color-svgrepo-com.svg';
import EmailLogo from '../assets/LogoEmail.svg';

const Servicios = () => {
    return (
        <div id="contactoID" className="mt-40 text-center">
            <p className="text-3xl">
                <span className="font-bold block mb-8">Como contactarnos?</span>
                <a href="https://wa.me/542262508110" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
                    <img src={WhatsAppLogo} alt="WhatsApp Logo" className="w-24 inline-block mr-2" />
                    Telefono / Whatsapp: +542262508110
                </a>
                <br />
                <a href="#" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
                    <img src={EmailLogo} alt="Email Logo" className="w-24 inline-block mr-2" />
                    E-mail: jeremiasmatar@gmail.com
                </a>
                
            </p>
        </div>
    )
}

export default Servicios;
