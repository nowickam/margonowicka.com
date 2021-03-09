import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from "react-transition-group";
import '../css/Fa.css'

class Ll extends Component{
    constructor(props) {
        super();
        this.close = props.close
    }


    render() {
        return <div id={this.id} className="fa-container">
            <div className="fa-left-container">
                <video className="ll-video" autoPlay loop muted src={"/media/ll.mp4"} type={"video/mp4"}>Sorry</video>

            </div>
            <div className="fa-right-container">
                <div className="fa-text">
                    Inspired by Atari's Lunar Lander and by Daniel Shiffman's Terrain GenerationI decided to create a Java game which will emulate the gameplay of Lunar Lander in 3D.
                </div>
                <a href={"https://github.com/nowickam/lunar-lander-3d"}>github</a>

                <a className="close" onClick={this.close}>close</a>
            </div>

        </div>
    }
}

export default Ll;