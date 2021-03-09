import './App.css';
import Home from './js/Home.js'
import Content from './js/Content.js'
import About from './js/About.js'
import Menu from './js/Menu.js'
import Fa from './js/Fa.js'
import Fm from './js/Fm.js'


export const defaultStyle = {
    transition: `opacity ${500}ms ease-in-out`,
    opacity: 0,
};

export const transitionStyles = {
    entering: { opacity: 1},
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

function App() {
  return (
    <div className="App">
        <Menu />
        <Home id="home"/>
        <div className="spacer"/>
        <Content id="fa" title={"AUDIO-DRIVEN FACIAL ANIMATION"}/>
        <Content id="bio" title={"ADAM AND EVE"}/>
        <Content id="ev" title={"EMOTION VISUALIZER"}/>
        <Content id="fm" title={"FACE MIRROR"}/>
        <Content id="ll" title={"LUNAR LANDER"}/>
        <div className="spacer"/>
        <About id="about"/>
    </div>
  );
}

export default App;
