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
        <Content id="media1"/>
        <Content id="media2"/>
        <About id="about"/>
    </div>
  );
}

export default App;
