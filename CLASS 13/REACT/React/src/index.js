import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
        <h1>{props.fulltName}</h1>
        </div>
    )
}

const Info1 = (props) => {
    return(
        <div>
            <h1>{props.job}</h1>
            </div>
    )
}

const App = () => {
    return (
        <div>
            <Info fulltName = "ALBARAA ABDO"/>
            <Info1 job = "NOTHING"/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));