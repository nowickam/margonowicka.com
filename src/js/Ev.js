import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from "react-transition-group";
import '../css/Fa.css'
import DotLoader from "react-spinners/DotLoader";
import {override} from "../App";

class Ev extends Component{
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
        return <div id={this.id} className="fa-container-vert">
            {this.state.loading && <div className="overlay-content">
                <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>
            </div>}
            <div className="fa-title" onClick={this.close}>{this.props.title}</div>
            <div className="fa-container-vert-height-ev">
            <div className="fa-upper-container">
                <div className="fa-text">
                    A generative art-based animation portraying the user’s mood.
                    Two artificial-intelligence-based components serve as means for obtaining data (detecting face from webcam) and processing it (evaluating the emotion with neural network). The output of the program is determined by a function which takes as a parameter the determined emotion, translates it into a set of variables (color, brush weight, speed, entanglement) and on this basis generates an image.
                    My part was creating the generative function, interface and face detection module.
                </div>
                <a href={"https://github.com/nowickam/emotion-visualizer"}>github</a>
            </div>
            <div className="fa-lower-container">
                <video className="fa-video" autoPlay loop muted src={"/media/ev.mp4"} type={"video/mp4"} onPlay={this.finishLoading}>Sorry</video>
                <img className="left-image" src={"/media/ev2.png"}/>
            </div>
            {/*<a className="close marg-right" onClick={this.close}>close</a>*/}
        </div>
        </div>
    }
}

export default Ev;