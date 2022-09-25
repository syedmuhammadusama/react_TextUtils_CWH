import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to uppercase', 'success');
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to lowercase', 'success');
    }

    const clearCLick = () => {
        setText('');
    }

    function speaktext() {
        var speech = new SpeechSynthesisUtterance();
        speech.text = text
        speech.volume = 12;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }

    const replaceCLick = () => {
        let stringToReplace = prompt('Enter text to replace');
        let stringToAdd = prompt('Add replace string');
        let newText = text.replace(new RegExp(stringToReplace, 'g'), stringToAdd);
        setText(newText);
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
    return (
        <>
            <div>
                <div className="container mb-3" style={{color : props.mode === 'dark' ? 'white' : 'grey'}}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={clearCLick}>
                    Clear
                </button>
                <button className="btn btn-primary mx-1" onClick={replaceCLick}>
                    Replace word
                </button>
                <button className="btn btn-primary mx-1" onClick={speaktext}>
                    Speak text
                </button>
            </div>

            <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter text in above text box to preview'}</p>
            </div>
        </>
    )
}
