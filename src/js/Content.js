import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/Content.css'


import {Transition} from "react-transition-group";
import {defaultStyle, transitionStyles} from "../App";

import Fa from './Fa'
import Fm from './Fm'
import Ev from './Ev'
import Ll from './Ll'
import Bio from './Bio'


class Content extends Component {
    constructor(props) {
        super();
        this.state = {
            overlay: false,
            content: false,
            title: false
        }
        this.id = props.id
        this.title = props.title
    }

    overlayImage = () => {
        this.setState({
            overlay: true
        })
    }

    showImage = () => {
        this.setState({
            overlay: false
        })
    }

    showContent = () => {
        this.setState({
            content: this.id
        })
    }

    close = () => {
        this.setState({
            content: false
        })
    }

    showTitle = () => {
        this.setState({
            title:true
        })
    }


    render() {
        return <div id={this.id} className="content-container">


            <Transition timeout={300} in={this.state.overlay}>
                {(state) => (
                    <div style={{...defaultStyle, ...transitionStyles[state]}}>
                        {this.state.overlay && <div className="overlay"/>}
                    </div>
                )}
            </Transition>

            {/*<Transition timeout={300} in={this.state.content === "fa"}>*/}
            {/*    {(state) => (*/}
            {/*        <div style={{...defaultStyle, ...transitionStyles[state]}}>*/}
                        {this.state.content === "fa" && <Fa title={this.title} close={this.close}/>}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</Transition>*/}

            {/*<Transition timeout={300} in={this.state.content === "fm"}>*/}
            {/*    {(state) => (*/}
            {/*        <div style={{...defaultStyle, ...transitionStyles[state]}}>*/}
                        {this.state.content === "fm" && <Fm title={this.title} close={this.close}/>}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</Transition>*/}

            {/*<Transition timeout={300} in={this.state.content === "ev"}>*/}
            {/*    {(state) => (*/}
            {/*        <div style={{...defaultStyle, ...transitionStyles[state]}}>*/}
                        {this.state.content === "ev" && <Ev title={this.title} close={this.close}/>}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</Transition>*/}

            {/*<Transition timeout={300} in={this.state.content === "ll"}>*/}
            {/*    {(state) => (*/}
            {/*        <div style={{...defaultStyle, ...transitionStyles[state]}}>*/}
                        {this.state.content === "ll" && <Ll title={this.title} close={this.close}/>}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</Transition>*/}

            {/*<Transition timeout={300} in={this.state.content === "ll"}>*/}
            {/*    {(state) => (*/}
            {/*        <div style={{...defaultStyle, ...transitionStyles[state]}}>*/}
                {this.state.content === "bio" && <Bio title={this.title} close={this.close}/>}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</Transition>*/}

            <img className="image" src={"/media/" + this.id + ".png"} onLoad={this.showTitle}/>
            {this.state.title && <div className="title" onMouseOver={this.overlayImage} onMouseLeave={this.showImage}
                 onClick={this.showContent}>{this.title}</div>}
        </div>
    }
}

export default Content;