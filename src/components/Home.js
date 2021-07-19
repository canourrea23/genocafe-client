// navbar
import React from "react";
import Carousel from "react-bootstrap/Carousel";
// body
// GENOCAFÉ
// “Lograr la excelente calidad de hoy, pero luchando para ser mejores cada día”.
//  Carousels
// email signup for notifications

// footer
const Home = () => {
  return (
    <div>
      <section id="hero-image">
        {/* <img className="hero-image" src='/Asset/hero-img.jpeg' alt="heroImage"></img> */}
        {/* <img
        className="hero-image"
        src="https://res.cloudinary.com/genocafe/image/upload/v1611587930/B6CB234D-C99E-4D32-AEAF-58BC4255CF80_wkgmcz.jpg"
        alt="heroImage"
      ></img> */}
        <h4 style={{ textAlign: "center" }}>
          BIENVENIDO, DISFRUTE DE UN CAFÉ<br></br> GENUINAMENTE QUINDIANO
        </h4>
      </section>
      <Carousel className="carsousel">
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-20"
            src={process.env.PUBLIC_URL + "/logo-animation-white.gif"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-50"
            src={process.env.PUBLIC_URL + "/Asset/coffee-timeline.png"}
            // style={{ height: "400px", width: "380px", margin: "auto" }}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-50"
            src={process.env.PUBLIC_URL + "/Asset/coffee-evolution.jpg"}
            // style={{ height: "400px", width: "380px", margin: "auto" }}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-50"
            src={process.env.PUBLIC_URL + "/Asset/paisaje-matas-cafe.jpg"}
            // style={{ height: "400px", width: "380px", margin: "auto" }}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-50"
            src={process.env.PUBLIC_URL + "/Asset/taza-cafe2-copy.jpg"}
            // style={{ margin: "auto" }}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Home;
