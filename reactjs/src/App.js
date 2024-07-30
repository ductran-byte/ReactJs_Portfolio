import logo from './logo.svg';
import './App.css';
import "./component/main.css"
import "./component/scripts"
import Loader from "./component/loader";
import Header from "./component/header";
import Menu from "./component/menu";
import Home from "./component/home";
import About from "./component/about";
import Education from "./component/education";
import Portfolio from "./component/portfolio";
import Contact from "./component/contact";
import Back from "./component/back";
import Shop from "./component/shop";
function App() {
    return (
        <>
            <Loader/>
            <Header/>
            <Menu/>
            <Home/>
            <About/>
            <Education/>
            <Portfolio/>
            <Shop/>
            <Contact/>
            <Back/>

        </>
    );
}

export default App;
