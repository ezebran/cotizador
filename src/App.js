import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Resumen from './components/Resumen';
import Formulario from './components/Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './helper';
import Resultado from './components/Resultado';


class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (datos) => {

    const {marca, year, plan} = datos;
    let resultado = 2000;
    const diferencia = obtenerDiferenciaAnio(year);
    resultado -= ((diferencia * 3) * resultado) / 100;
    resultado = calcularMarca(marca) * resultado;
    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat( incrementoPlan * resultado).toFixed(2);
    let datosAuto = {marca, year, plan}

    this.setState({
      resultado: resultado,
      datos: datosAuto
    })
  }

  render() {
    return (
      <div className="container">
        <main>
          <Header 
            titulo = 'Cotizador de autos'
          />

          <Formulario
            cotizarSeguro = {this.cotizarSeguro}
          />

          <Resumen datos = {this.state.datos} />

          <Resultado resultado = {this.state.resultado}/>

        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
