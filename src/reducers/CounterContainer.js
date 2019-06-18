import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	counter: state
});

const LightComponent = ({ counter, dispatch }) => (
	<div>
		<p>{counter}</p>
		<button onClick={() => dispatch({ type : 'ADD'})}>+</button>
		<button onClick={() => dispatch({ type : 'ADDMORE'})}>+10</button>
		<button onClick={() => dispatch({ type : 'RESET'})}>Reset</button>
		<button onClick={() => dispatch({ type : 'REMOVE'})}>-</button>
		<button onClick={() => dispatch({ type : 'REMOVEMORE'})}>-10</button>
	</div>
);

export default connect(mapStateToProps)(LightComponent);
