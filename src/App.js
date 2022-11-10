import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main/Main";


function App(props) {
    // console.log(props)
    return (
        <div>
            <Header forHeader={props.state}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
