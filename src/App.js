import {React, Component} from 'react';
import './App.css';
import Home from './js/Home.js'
import Content from './js/Content.js'
import About from './js/About.js'
import Menu from './js/Menu.js'
import Fa from './js/Fa.js'
import Fm from './js/Fm.js'
import Ll from './js/Ll.js'
import Ev from './js/Ev.js'
import {css} from "@emotion/core";
import Bio from "./js/Bio";
import './css/Content.css'


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
                    <Fa id="fa" title="AUDIO-DRIVEN ANIMATION" />
                    <Bio id="bio" title="ADAM AND EVE" />
                    <Ev id="ev" title="EMOTION VISUALIZER" />
                    <Fm id="fm" title="FACE MIRROR" />
                    <Ll id="ll" title="LUNAR LANDER" />
                {/*<Content id="fa" title={"AUDIO-DRIVEN ANIMATION"}/>*/}
                {/*<Content id="bio" title={"ADAM AND EVE"}/>*/}
                {/*<Content id="ev" title={"EMOTION VISUALIZER"}/>*/}
                {/*<Content id="fm" title={"FACE MIRROR"}/>*/}
                {/*<Content id="ll" title={"LUNAR LANDER"}/>*/}
                <div className="spacer"/>
                <About id="about"/>
            </div>
            }
        </div>
    }
}

export default App;
