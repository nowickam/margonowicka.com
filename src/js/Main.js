import {Component, React} from 'react';
import '../App.css';
import Home from './Home.js'
import About from './About.js'
import Menu from './Menu.js'
import Fa from './Fa.js'
import Fm from './Fm.js'
import Ll from './Ll.js'
import Ev from './Ev.js'
import Fp from './Fp.js'
import {css} from "@emotion/core";
import Bio from "./Bio";


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

class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            show: false
        }
    }

    showPage = () => {
        this.setState({
            show: true
        })
    }

    render() {
        return <div className="App">
            {this.state.show && <Menu/>}
            <Home id="home" showPage={this.showPage}/>
            {this.state.show &&
            <div>
                <div className="spacer"/>
                <Fa id="fa" title="AUDIO-DRIVEN SPEECH"/>
                <Bio id="bio" title="ADAM AND EVE"/>
                <Fp id="fp" title="RECLAIMED"/>
                <Ev id="ev" title="EMOTION VISUALIZER"/>
                <Fm id="fm" title="FACE MIRROR"/>
                <Ll id="ll" title="LUNAR LANDER"/>
                <div className="spacer"/>
                <About id="about"/>
            </div>
            }
        </div>
    }
}

export default Main;
