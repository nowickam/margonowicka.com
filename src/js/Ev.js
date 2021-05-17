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
                    Two AI components serve as means for obtaining data and processing it.
                    The output image is determined by a function which takes as a parameter the predicted emotion from the webcam.
                </div>
                <a href={"https://github.com/nowickam/emotion-visualizer"}>github</a>
            </div>
            <div className="fa-lower-container">
                <video className="fa-video" controls src={"/media/ev.mp4"} type={"video/mp4"} onLoadedData={this.finishLoading}>Sorry</video>
                <img className="left-image" src={"/media/ev2.png"}/>
            </div>
            {/*<a className="close marg-right" onClick={this.close}>close</a>*/}
        </div>
        </div>
    }
}

export default Ev;