import {Component, React} from 'react';
import '../css/Menu.css'

class Menu extends Component {
    constructor() {
        super();
    }

    scroll = (id) => {
        const anchor = document.querySelector(id)
        console.log(document)
        console.log(anchor)
        if (anchor !== null)
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    render() {
        return <div id="menu" className="menu-container">
            <div className="menu-element" onClick={() => {
                this.scroll('#home')
            }}>home
            </div>
            <div className="menu-element" onClick={() => {
                this.scroll('#fa')
            }}>work
            </div>
            <div className="menu-element" onClick={() => {
                this.scroll('#about')
            }}>about
            </div>
        </div>
    }
}

export default Menu;