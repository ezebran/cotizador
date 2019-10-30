import React,{ Component } from 'react';

class Resumen extends Component {
	mostrarResumen = () =>{
		const {marca, plan, year} = this.props.datos;

		if(!marca || !year || !plan) return null;

		return(
			<div className="resumen">
				<h3>Resumen de cotización</h3>
				<p>Marca: <b>{marca}</b></p>
				<p>Plan: <b>{plan}</b></p>
				<p>Año del auto: <b>{year}</b></p> 
			</div>
		)
	}
	render(){
		

		return(
			<div>
				{ this.mostrarResumen() }
			</div>
		)
	}
}

export default Resumen;