import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#2b2046';
            showAlert('Dark Mode has been enabled', 'success');
            document.title = 'TextUtils - Dark Mode';
        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light Mode has been enabled', 'success');
            document.title = 'TextUtils - Light Mode';
        }
    }
    
    const toggleModeCustom = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = document.getElementById("color").value;
        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message, // => message : message
            type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (
        <>
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeCustom={toggleModeCustom}/>
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
