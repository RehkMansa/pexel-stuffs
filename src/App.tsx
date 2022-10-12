import { useState } from "react";
import { ImagePixelated } from "react-pixelate";
import TestImage from "./assets/rrr.png";
import "./App.css";

const App = () => {
    const [pexels, setPexels] = useState(0);
    return (
        <div>
            <ImagePixelated src={TestImage} pixelSize={pexels} centered />
            <button onClick={() => setPexels(pexels + 5)} type="button">
                Increase pexels
            </button>
        </div>
    );
};

export default App;
