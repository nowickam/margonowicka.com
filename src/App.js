import {Component, React} from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Main from './js/Main'
import FpMore from './js/FpMore'
import BioMore from './js/BioMore'
import ScrollToTop from './js/ScrollToTop'
import {css} from "@emotion/core";



export const defaultStyle = {
    transition: `opacity ${300}ms ease-in-out`,
    opacity: 0,
};

export const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0, visibility: "hidden"},
};

export const defaultColor = {
    transition: `color ${300}ms ease-in-out`,
    color: "black",
};

export const transitionColor = {
    entering: {color: "white"},
    entered: {color: "white"},
};

export const override = css`
  display: block;
  margin: 0 auto;
  justify-content: center;
`;

class App extends Component {
    constructor(props) {
        super();
    }

    render() {
        return <div className="App">
            <BrowserRouter>
                <ScrollToTop>
                <Switch>
                    <Route path="/reclaimed">
                        <FpMore/>
                    </Route>
                    <Route path="/adam-and-eve">
                        <BioMore/>
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    }
}


export default App;
