import {Component, React} from 'react';
import '../css/Fa.css'
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
                             src={"/media/" + this.id + ".png"} onLoad={this.showPage}/>
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
                    <div className="fp-container">
                        <div className="fp-text">
                            VFX in the pursuit of making Warsaw a bit more green and wild.
                            <br/>
                            <br/>
                            <a href={"https://vimeo.com/551378238"}>left video</a>
                            <br/>
                            <a href={"https://vimeo.com/551378285"}>right video</a>
                        </div>
                        <video className="fp-video marg-right" controls src={"/media/fp1.mp4"} type={"video/mp4"}
                               onLoadedData={this.finishLoading}>Sorry
                        </video>
                        <video className="fp-video marg-right" controls src={"/media/fp2.mp4"} type={"video/mp4"}
                               onLoadedData={this.finishLoading}>Sorry
                        </video>
                    </div>

                </div>

            </div>

            {/*{this.state.loading && <div className="overlay-content">*/}
            {/*    <DotLoader color={"#4758FF"} loading={this.state.loading} css={override} size={`30vmax`}/>*/}
            {/*</div>}*/}

        </div>
    }
}

export default Fa;