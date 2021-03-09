import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from "react-transition-group";
import '../css/Fa.css'

class Fm extends Component{
    constructor(props) {
        super();
        this.close = props.close
    }


    render() {
        return <div id={this.id} className="fa-container">
            <div className="fa-left-container">
                <video className="fa-video" autoPlay loop muted src={"/media/fm.mp4"} type={"video/mp4"}>Sorry</video>
                <div className="fa-text">
                    A web application aimed at displaying a graphical interpretation of the movement of 68 facial landmarks.
                </div>
                <a href={"https://nowickam.github.io/face-mirror/"}>webpage</a>
                <a href={"https://https://github.com/nowickam/face-mirror"}>github</a>
            </div>
            <div className="fa-right-container">
                <img className="left-image" src={"/media/fm2.png"}/>

                <a className="close" onClick={this.close}>close</a>
            </div>

        </div>
    }
}

export default Fm;