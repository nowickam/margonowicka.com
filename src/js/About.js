import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/About.css'

class About extends Component{
    constructor(props) {
        super();
        this.id = props.id
    }

    render() {
        return <div id={this.id} className="about-container">
            <div>
                Małgorzata Nowicka
            </div>
        </div>
    }
}

export default About;