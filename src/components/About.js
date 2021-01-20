import React from 'react';
import vision from '../Asset/vision9523.png'

const About = () => {
    return (
        <div>
            <h1>Sobre Nosotros...</h1>
            <h2>Mission</h2>
            <p>Ofrecer un producto con exquisito aroma y sabor que aporte una variada gama de sensaciones que reconforten el estado físico y espiritual de sus consumidores.</p>
            <h2>Vision</h2>
            <p>This is about us...</p>
            <div>
            <h3><img src={vision} alt='coffee beans'/> En el 2015 GENOCAFE, café especial de origen, tendrá un grupo de consumidores satisfechos por su compromiso de ofrecer un café de alta calidad, logrando mejorar los ingresos del caficultor y su familia.
            </h3>
            </div>
        </div>
    )
}

export default About;