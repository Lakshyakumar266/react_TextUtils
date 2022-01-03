import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let UpText = text.toUpperCase();
        setText(UpText);
        props.ShowAlert('Text Uppercased.', 'success')
    };

    const handleLoClick = () => {
        let UpText = text.toLowerCase();
        setText(UpText);
        props.ShowAlert('Text Lowercased.', 'success')
    };

    const handleClearClick = () => {
        setText("");
        props.ShowAlert('Text Removed.', 'success')
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.ShowAlert('Text Copied.', 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.ShowAlert('Removed Extra Spaces From Text.', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    return (
        <>
            <div className="container my-2">
                <h2 className={`my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.Heading}</h2>
                <textarea className="form-control" id="TextForm" onChange={handleOnChange} rows={8} textarea="Enter Text Here." value={text} ></textarea>
                <div className="my-2">
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Your Text Summary.</h2>
                <p>{text.split((/\s+/)).filter((elem)=>{return elem.length!==0}).length} words and {text.split(" ").filter((elem)=>{return elem.length!==0}).length} characters and {text.split(".").length - 1} sentences.</p>
                <p>{0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length} Minuts read.</p>
                <h3>Preview:</h3>
                <p>{text.length > 0 ? text : "Nuthing to preview it here."}</p>
            </div>
        </>
    )
}

export default TextForm
