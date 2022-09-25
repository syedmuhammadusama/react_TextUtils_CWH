import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearCLick = () => {
        setText('');
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
                <h1>{props.heading}</h1>
                <div className="container mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleOnChange}></textarea>
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
            </div>

            <div className="container my-3">
                <h2>your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
