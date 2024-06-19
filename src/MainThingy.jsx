import { useState } from 'react';
import './MainThingy.css';

const MainThingy = () => {
    const [text, setText] = useState("");
    const [imgSrc, setImgSrc] = useState("https://cataas.com/cat");

    function handleClick() {
        // Generate a random number to force browser to fetch a new image
        const randomNum = Math.floor(Math.random() * 1000);

        if (text.trim() !== "") {
            setImgSrc(`https://cataas.com/cat/says/${encodeURIComponent(text)}?fontSize=100&fontColor=white`);
        } else {
            setImgSrc(`https://cataas.com/cat?${randomNum}`);
        }
    }

    return (
        <div className="main-thingy">
            <div className="header">
                <h1>CattyCatty</h1>
            </div>
            <div className="imageSlot">
                <div className="image">
                    <img src={imgSrc} alt="" />
                </div>
            </div>

            <div className="input">
                <input
                    type="text"
                    placeholder='Enter any text you want a random cat to say'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="nextButton">
                <button onClick={handleClick}>Next</button>
            </div>
        </div>
    );
};

export default MainThingy;
