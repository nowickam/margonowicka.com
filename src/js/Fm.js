import {Component, React} from 'react';
import {Transition} from "react-transition-group";
import '../css/Content.css'
import DotLoader from "react-spinners/DotLoader";
import {defaultColor, defaultStyle, override, transitionColor, transitionStyles} from "../App";

class Fm extends Component {
    constructor(props) {
        super();
        this.id = props.id
        this.title = props.title
        this.state = {
            loading: true,
            content: false,
            title: false,
        }
    }

    toggleContent = () => {
        if (this.state.content) {
            this.setState({
                content: false,
            })
        } else {
            this.setState({
                content: this.id,
            })
        }
    }

    showTitle = () => {
        this.setState({
            title: true
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
                        <img style={{...defaultStyle, ...transitionStyles[state]}} className="image"
                             src={"/media/" + this.id + ".png"} onLoad={this.props.onChildLoad}/>
                    )}
                </Transition>

                <Transition timeout={300} in={!this.state.content}>
                    {(state) => (
                        <div style={{...defaultColor, ...transitionColor[state]}} className="title-black"
                             onClick={this.toggleContent}>{this.title}</div>

                    )}
                </Transition>

                <div className="fa-container">
                    {/*<div className="fa-title" onClick={this.close}>{this.props.title}</div>*/}
                    <div className="fa-left-container">
                        <video className="fa-video" controls src={"/media/fm.mp4"} type={"video/mp4"}
                               >Sorry
                        </video>
                        <div className="fa-text">
                            A web application aimed at displaying a graphical interpretation of the movement of face.
                        </div>
                        <div className="block">
                            <a className="margin" href={"https://nowickam.github.io/face-mirror/"}>webpage</a>
                            <a href={"https://github.com/nowickam/face-mirror"}>github</a>
                        </div>
                    </div>
                    <div className="fa-right-container">
                        <img className="left-image" src={"/media/fm2.png"}/>
                    </div>

                </div>

            </div>

        </div>
    }
}

export default Fm;