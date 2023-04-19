import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Projects/>
            <Tech/>
        </div>
    );
}

export default App;
