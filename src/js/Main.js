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
import DotLoader from "react-spinners/DotLoader";


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
            loading: true,
            children: 8,
            childrenLoaded: 0
        }
    }

    showPage = () => {
        this.setState({
            loading: true
        })
    }

    childLoaded = () => {
        this.setState({
            childrenLoaded: this.state.childrenLoaded + 1
        }, () => {
            if(this.state.childrenLoaded === this.state.children)
                this.setState({
                    loading: false
                })
        })
    }

    render() {
        return <div className="App">
            {this.state.loading && <div className="overlay-home">
                <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>
            </div>}
            <div style={{display: this.state.loading ? "none" : "block"}}>
                <Menu/>
                <Home id="home" onChildLoad={this.childLoaded} loading={this.state.loading}/>
                <div className="spacer"/>
                <Fa id="fa" title="AUDIO-DRIVEN SPEECH" onChildLoad={this.childLoaded} loading={this.state.loading}/>
                <Bio id="bio" title="ADAM AND EVE" onChildLoad={this.childLoaded} loading={this.state.loading}/>
                <Fp id="fp" title="APOCALYPSE NOW" onChildLoad={this.childLoaded} loading={this.state.loading}/>
                <Ev id="ev" title="EMOTION VISUALIZER" onChildLoad={this.childLoaded} loading={this.state.loading}/>
                <Fm id="fm" title="FACE MIRROR" onChildLoad={this.childLoaded} loading={this.state.loading}/>
                <Ll id="ll" title="LUNAR LANDER" onChildLoad={this.childLoaded} loading={this.state.loading}/>
                <div className="spacer"/>
                <About id="about" onChildLoad={this.childLoaded} loading={this.state.loading}/>
            </div>
        </div>
    }
}

export default Main;
