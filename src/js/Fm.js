import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from "react-transition-group";
import '../css/Fa.css'
import DotLoader from "react-spinners/DotLoader";
import {override} from "../App";

class Fm extends Component{
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
                <video className="fa-video" autoPlay loop muted src={"/media/fm.mp4"} type={"video/mp4"} onPlay={this.finishLoading}>Sorry</video>
                <div className="fa-text">
                    A web application aimed at displaying a graphical interpretation of the movement of 68 facial landmarks.
                </div>
                <div className="block">
                <a className="margin" href={"https://nowickam.github.io/face-mirror/"}>webpage</a>
                <a href={"https://github.com/nowickam/face-mirror"}>github</a>
                </div>
            </div>
            <div className="fa-right-container">
                <img className="left-image" src={"/media/fm2.png"}/>

                {/*<a className="close" onClick={this.close}>close</a>*/}
            </div>

        </div>
    }
}

export default Fm;