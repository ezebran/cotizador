import React from 'react';

function App() {
  return (
    <div>
    <main>
      <form>
        <div className="head">
          <h1>Cotizador de autos</h1>
        </div>
        <div className="content">

          <div className="cont">
            <p>Marca</p>
            <select name="" id="">
              <option value="1">Ejemplo</option>
              <option value="2">Coso</option>
            </select>
          </div>
          
          <div className="cont">
            <p>Año</p>
            <select name="" id="">
              <option value="1">2018</option>
              <option value="2">2017</option>
            </select>
          </div>

          <div className="cont">
            <p>Plan</p>
            <label><input type="checkbox" />Basico</label>
            <label><input type="checkbox" />Completo</label>
          </div>
          <input type="submit" value="COTIZAR" className="btn btn-active" />
          <div className="cont resumen">
            <h3>Resumen de cotización</h3>
            <p>Marca: Asiatico</p>
            <p>Plan: Completo</p>
            <p>Año del auto: 2018</p> 
          </div>

          <div className="cont total">El total es $1245</div>
        </div>
      </form>

    </main>
    <footer>
      <p>Desarrollado por <a href="http://ezebran.github.io/portafolio" target="blank">Ezequiel Brandan</a></p>
    </footer>
  </div>
  );
}

export default App;
