import React from "react";
import ReactDOM from "react-dom";
import Board from './components/Board';

import './index.css';

const App = () => {
    return (
        <div className="App">
            <Board />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));