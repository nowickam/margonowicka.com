import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/Content.css'


class Content extends Component{
    constructor(props) {
        super();
        this.state = {
            overlay: false
        }
        this.id = props.id
        this.title = props.title
        console.log(this.title)
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

    render() {
        return <div id={this.id} className="content-container">
            {this.state.overlay && <div className="overlay"/> }
            {!this.state.overlay && <div className="dimmer"/> }
            <img className="image" src={"/media/"+this.id+".png"}/>
            <div className="title" onMouseOver={this.overlayImage} onMouseLeave={this.showImage}>{this.title}</div>
            {/*    <video className={"video-content "+this.bigSize} autoPlay loop src={"/media/"+this.id+".mp4"} type={"video/mp4"}>Sorry</video>*/}
            {/*{this.smallMedia && <img className={this.bigSize} src={"/media/"+this.id+".png"} />}*/}
        </div>
    }
}

export default Content;