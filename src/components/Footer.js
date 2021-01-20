import React from 'react';
import certificaciones from '../Asset/certificaciones.png'

const Footer = () => {
    return (
        <footer className="footer bg-dark">
            <div className="container">
                <span className="text-muted "><img src={{certificaciones}} alt='certificaciones'/></span> ||
                <span className="text-muted">@2021 Genocafé, el mejor comienzo | Todos Derechos Reservado</span> 
                {/* <div className="container text-right"> */}
                    
                {/* </div> */}
            </div>
        </footer>
    )
}

export default Footer;