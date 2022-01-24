import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                return null;
        }
    }

    render() {
        return (
            <div>

                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.onSubCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)} >Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}

                </ul>

            </div>
        );
    }
};

//subscribe matlab getState()
//reducer maa vako state use as props in this container 
const mapStateToProps = state => {
    return {
        //prop name given by you :state given to you by react redux 
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

//dispatching action
const mapDispatchToProps = dispatch => {
    return {
        //in this case props is function
        //prop name given by you :dispatch action
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        //second value is payload
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubCounter: () => dispatch(actionCreators.sub(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);