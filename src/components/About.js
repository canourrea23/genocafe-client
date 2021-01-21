import React from "react";
// import vision from "./Asset/certificaciones";

const About = () => {
  return (
    <div>
      <h1>Sobre Nosotros...</h1>
      <h2>Mision</h2>
      <p>
        Ofrecer un producto con exquisito aroma y sabor que aporte una variada
        gama de sensaciones que reconforten el estado físico y espiritual de sus
        consumidores.
      </p>
      <h2>
        <img
          src={process.env.PUBLIC_URL + "/Asset/vision9523.png"}
          alt="logo"
        ></img>{" "}
        Vision
      </h2>
      <p>This is about us...</p>
      <div>
        <p>
          <img
            src={process.env.PUBLIC_URL + "/Asset/mision12268.png"}
            alt="coffee beans"
          />{" "}
          En el 2015 GENOCAFE, café especial de origen, tendrá un grupo de
          consumidores satisfechos por su compromiso de ofrecer un café de alta
          calidad, logrando mejorar los ingresos del caficultor y su familia.
        </p>
      </div>
    </div>
  );
};

export default About;
