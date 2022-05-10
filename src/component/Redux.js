import React from 'react';
import { increment, decrement, reset } from "../redux/actions";
import { connect } from "react-redux";
//  react-redux , redux -> npm i react-redux

// Provider(store=store) -> index.js (present everywhere)

//  mapstatetoprops -> store(saved state) -> props -> component
//  mapdispatchToPRops -> function -> props

//  connect (props, functions) -> connect(mapStateToProps,)
function Redux({ count, onIncrement, onDecrement, onReset }) {
  return (
    <div className="App">
      <center>{count}</center>
      <button onClick={onIncrement}>ADD</button>
      <button onClick={onDecrement}>SUB</button>
      <button onClick={onReset}>RESET</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
