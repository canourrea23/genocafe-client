import React from "react";
// import certificaciones from "../Asset/certificaciones.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <span className="text-muted ">
          <img
            className="certificados"
            src={process.env.PUBLIC_URL + "/Asset/certificaciones.png"}
            alt="certificaciones"
          />
        </span>{" "}
        ||
        <span className="text-muted">
          @2021 Genocafé, el mejor comienzo | Todos Derechos Reservado
        </span>
      </div>
    </footer>
  );
};

export default Footer;
