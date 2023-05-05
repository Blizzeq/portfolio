import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";
import Ending from "./Components/Ending";
import Footer from "./Components/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Projects/>
            <Tech/>
            <Ending/>
            <Footer/>
        </div>
    );
}

export default App;
