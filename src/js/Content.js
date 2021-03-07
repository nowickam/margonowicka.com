import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/Content.css'


class Content extends Component{
    constructor(props) {
        super();
        this.id = props.id
    }

    render() {
        return <div id={this.id} className="content-container">
                <img src={"/media/"+this.id+".png"} />
        </div>
    }
}

export default Content;