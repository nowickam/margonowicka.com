import {Component, React} from 'react';
import '../css/Content.css'
import DotLoader from "react-spinners/DotLoader";
import {defaultColor, defaultStyle, override, transitionColor, transitionStyles} from '../App'
import {Transition} from "react-transition-group";


class Fa extends Component {
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

    showPage = () => {
        this.setState({
            loading: false
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
                        <video className="fa-video" controls src={"/media/fa.mp4"} type={"video/mp4"}
                               >Sorry
                        </video>
                        <img className="left-image" src={"/media/fa1.png"}/>
                    </div>
                    <div className="fa-right-container">
                        <div className="fa-text">
                            Interactive web application for uploading an audio file with human speech and displaying the
                            corresponding lip movements on the provided avatar.
                            <br/>
                            A neural network model is used to predict the sequence of phonemes which is then translated
                            to
                            visemes and mapped onto the avatar. The avatar was created in Blender and each viseme is
                            treated
                            as combinations of shape keyed facial configurations.
                        </div>
                        {/*<a href={"https://facialanimation.page"}>webpage</a>*/}
                        <a href={"https://vimeo.com/518277009"}>video</a>
                        <a href={"https://github.com/nowickam/facial-animation/tree/production"}>github</a>
                        {/*<a className="close" onClick={this.close}>close</a>*/}
                    </div>

                </div>

            </div>

            {/*{this.state.title && <div className="overlay-content">*/}
            {/*    <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>*/}
            {/*</div>}*/}

        </div>
    }
}

export default Fa;