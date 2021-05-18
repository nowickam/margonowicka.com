import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from "react-transition-group";
import '../css/Fa.css'
import DotLoader from "react-spinners/DotLoader";
import {defaultColor, defaultStyle, override, transitionColor, transitionStyles} from "../App";

class Ev extends Component{
    constructor(props) {
        super();
        this.id = props.id
        this.title = props.title
        this.state= {
            loading: true,
            content: false,
            title: false,
        }
    }

    toggleContent = () => {
        if(this.state.content){
            this.setState({
                content: false,
            })
        }
        else{
            this.setState({
                content: this.id,
            })
        }
    }

    showTitle = () => {
        this.setState({
            title:true
        })
    }


    finishLoading = () => {
        this.setState({
            loading: false
        })
    }


    render() {
        return <div id={this.id} className="container">
            <div className="img-container">
                <Transition timeout={300} in={!this.state.content}>
                    {(state) => (
                        <img style={{...defaultStyle, ...transitionStyles[state]}} className="image" src={"/media/" + this.id + ".png"} onLoad={this.showTitle}/>
                    )}
                </Transition>

                <Transition timeout={300} in={!this.state.content}>
                    {(state) => (
                        <div style={{...defaultColor, ...transitionColor[state]}} className="title-black" onClick={this.toggleContent}>{this.title}</div>

                    )}
                </Transition>

                <div className="fa-container">
                    {/*<div className="fa-title" onClick={this.close}>{this.props.title}</div>*/}
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

            </div>

            {this.state.loading && <div className="overlay-content">
                <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>
            </div>}

        </div>
    }
}

export default Ev;