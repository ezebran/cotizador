import React,{ Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {
	mostrarTotal(){
		

		if(!this.props.resultado) return null

		return(
			<div className="total">
				<span>El total es: <b> ${this.props.resultado}</b></span>
			</div>
		)
	}
	render() {



		return(
			<div>
				{this.mostrarTotal()}
			</div>
		)
	}
}

export default Resultado;