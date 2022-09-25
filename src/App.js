import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#2b2046';
            showAlert('Dark Mode has been enabled', 'success')
        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light Mode has been enabled', 'success')
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
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert} />
            <div className="container my-3">
                <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
                {/* <About /> */}
            </div>
        </>
    );
}

export default App;
