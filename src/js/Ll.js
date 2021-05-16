import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from "react-transition-group";
import '../css/Fa.css'
import DotLoader from "react-spinners/DotLoader";
import {override} from "../App";

class Ll extends Component{
    constructor(props) {
        super();
        this.close = props.close
        this.state={
            loading: true
        }
    }

    finishLoading = () => {
        this.setState({
            loading: false
        })
    }


    render() {
        return <div id={this.id} className="fa-container">
            {this.state.loading && <div className="overlay-content">
                <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>
            </div>}
            <div className="fa-title" onClick={this.close}>{this.props.title}</div>
            <div className="fa-left-container">
                <video className="ll-video" autoPlay loop muted src={"/media/ll.mp4"} type={"video/mp4"} onPlay={this.finishLoading}>Sorry</video>

            </div>
            <div className="fa-right-container">
                <div className="fa-text">
                    Inspired by Atari's Lunar Lander and by Daniel Shiffman's Terrain GenerationI decided to create a Java game which will emulate the gameplay of Lunar Lander in 3D.
                </div>
                <a href={"https://github.com/nowickam/lunar-lander-3d"}>github</a>

                {/*<a className="close" onClick={this.close}>close</a>*/}
            </div>

        </div>
    }
}

export default Ll;