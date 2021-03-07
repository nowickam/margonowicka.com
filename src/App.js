import './App.css';
import Home from './js/Home.js'
import Content from './js/Content.js'
import About from './js/About.js'
import Menu from './js/Menu.js'


function App() {
  return (
    <div className="App">
        <Menu />
        <Home id="home"/>
        <Content id="fa"/>
        <Content id="bio"/>
        <Content id="ev"/>
        <Content id="fm"/>
        <Content id="ll"/>
        <About id="about"/>
    </div>
  );
}

export default App;
