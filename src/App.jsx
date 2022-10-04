import React, { Component } from "react";
import logo from "./logo.jpg";
import clientes from "./recursos/clientes";
import "./App.css";
import { IconContext } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

class App extends Component {
  constructor(props) {
    super(props);
    this.key = 0;
    document.querySelector("body").addEventListener("click", e => { this.openContact(true); }
    );
  }

  abrirEmail() {
    var sLink = "mailto:carlosagredo811@gmail.com"
      + "?subject=Asunto"
      + "&body=";
    window.location.href = sLink;
  }

  openContact(tIsopen) {
    if (!tIsopen) {
      document.querySelector("#contactFloat").style.animation = "moveContactFloat 1.5s forwards";
      document.querySelectorAll(".contactFloatLabel")[0].style.display = "inline-block";
      document.querySelectorAll(".contactFloatLabel")[1].style.display = "inline-block";
    } else {
      document.querySelector("#contactFloat").style.animation = "moveContactFloatReverse 1.5s forwards";
      document.querySelectorAll(".contactFloatLabel")[0].style.display = "none";
      document.querySelectorAll(".contactFloatLabel")[1].style.display = "none";
    }
  }

  render() {
    return (
      <div className="app">
        <header className="cabecera">
          <div>
            <img src={logo} alt="Logo" onClick={() => history.go(0)} />
          </div>
          <ul>
            <li onClick={e => {
              e.stopPropagation();
              this.openContact(false);
            }}>Contacto</li>
            <li><a href="#seccionAcerca">Acerca</a></li>
          </ul>
        </header>

        <div className="secciones seccionHome">
          <h1>¿Trabajas con GLP?</h1>
          <h3>Ofrecemos cualquier servicio relacionado</h3>
        </div>

        <div className="secciones seccionTrabajos">
          <h2 className="seccionTitle">Nuestro servicio abarca</h2>
          <center>
            <ul>
              <li>Mantenimiento de Cisternas</li>
              <li>Mantenimiento de válvulas</li>
              <li>Mantenimiento a bombas GLP</li>
              <li>Nivelación de presiones</li>
              <li>Instalación de tanques estacionarios</li>
              <li>Fabricación de plantas móviles</li>
              <li>Correción de fugas</li>
            </ul>
          </center>
        </div>

        <div id="seccionAcerca" className="secciones seccionAcerca">
          <h2 className="seccionTitle">¿Qué hacemos y qué somos?</h2>
          <p>
            Somos una empresa que invertimos en la renovación, creemos fielmente que el GLP es una de las energías más limpias del planeta y, es por ello, que nos encargamos de solucionar las contingencias presentadas en el área y así garantizar la distribución y el traslado de este maravilloso producto para el mundo
          </p>
        </div>

        <div className="secciones seccionClientes">
          <h2 className="seccionTitle">Nuestros clientes</h2>
          {
            clientes.map((cli, i) => {
              this.key++;
              return <div className={(i % 2 == 0) ? "listClientes listClientesPar" : "listClientes listClientesImpar"} key={this.key}>
                <img src={cli.image} alt="Company icon" />
                <label>{cli.name}</label>
              </div>
            })
          }
        </div>

        <div id="contactFloat" onClick={e => e.stopPropagation()}>
          <a href="https://api.whatsapp.com/send?phone=573156861074" target="_BlANK">
            <IconContext.Provider value={{ size: "2em" }}>
              <FaWhatsapp />
            </IconContext.Provider>
          </a>
          <label className="contactFloatLabel"><a href="https://api.whatsapp.com/send?phone=3156861074" target="_BlANK">Whatsapp</a></label>
          <span onClick={this.abrirEmail}>
            <IconContext.Provider value={{ size: "2em" }}>
              <FiMail />
            </IconContext.Provider>
          </span>
          <label className="contactFloatLabel" onClick={this.abrirEmail}>Correo</label>
        </div>

        <footer className="footer">
          <h6>C.M.G Soluciones & Contingencias</h6>
          <h6>NIT 1127581687-4</h6>
          <h6>© 2022</h6>
        </footer>
      </div>
    );
  }
}

export default App;
