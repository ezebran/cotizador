import React, { Component } from 'react';

class Formulario extends Component {

	marcaRef = React.createRef();
	yearRef = React.createRef();
	planBasicoRef =  React.createRef();
	planCompletoRef = React.createRef();

	cotizarSeguro = (e) => {
		e.preventDefault();

		const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';

		const datos = {
			marca : this.marcaRef.current.value,
			year: this.yearRef.current.value,
			plan: plan
		}

		this.props.cotizarSeguro(datos);

		e.currentTarget.reset();
	}

	render() {
		return(
	      <form onSubmit={this.cotizarSeguro}>
	        
	        <div className="content">
	          <div className="cont">
	            <p>Marca</p>
	            <select name="marca" ref={this.marcaRef}>
	              <option value="americano">Americano</option>
	              <option value="europeo">Europeo</option>
	              <option value="asiatico">Asiatico</option>
	            </select>
	          </div>
	          
	          <div className="cont">
	            <p>Año</p>
	            <select name="year" ref={this.yearRef}>
              		<option value="2011">2011</option>
					<option value="2012">2012</option>
					<option value="2013">2013</option>
					<option value="2014">2014</option>
					<option value="2015">2015</option>
					<option value="2016">2016</option>
					<option value="2017">2017</option>
					<option value="2018">2018</option>
					<option value="2019">2019</option>
	            </select>
	          </div>

	          <div className="cont">
	            <p>Plan</p>
	            <label><input type="radio" name="plan" value="basico" ref={this.planBasicoRef} />Basico</label>
	            <label><input type="radio" name="plan" value="completo" ref={this.planCompletoRef} />Completo</label>
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
		)
	}
}

export default Formulario;