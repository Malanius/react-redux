import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strRes => (
                        <li onClick={() => this.props.onDeleteResult(strRes.id)} key={strRes.id}>{strRes.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ctr: state.counter,
    storedResults: state.results
})

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: (value) => dispatch({ type: actionTypes.ADD, value: value }),
        onSubtractCounter: (value) => dispatch({ type: actionTypes.SUBTRACT, value: value }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultId: id })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);