import {useState} from "react"

export default function Calculator(){

    const [text, setText] = useState("")

    const butClick = (e) => {
        setText(text.concat(e.target.name));
    }

    const clear = () => {
        setText("");
    }
    
    const backspace = () => {
        setText(text.slice(0, text.length - 1));
    }

    const result = () => {
        try {
            // eslint-disable-next-line
            setText(eval(text.toString()))
        } catch(err) {
            setText("Error")
        }
    }


    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={text} />
                </form>

                <div className="keyword">
                <button onClick={clear} id="clear" className="operator">Clear</button>
                <button onClick={backspace} id="backspace" className="operator">C</button>
                <button name="/" onClick={butClick} className="operator">&divide;</button>
                <button name="7" onClick={butClick}>7</button>
                <button name="8" onClick={butClick}>8</button>
                <button name="9" onClick={butClick}>9</button>
                <button name="*" onClick={butClick} className="operator">&times;</button>
                <button name="4" onClick={butClick}>4</button>
                <button name="5" onClick={butClick}>5</button>
                <button name="6" onClick={butClick}>6</button>
                <button name="-" onClick={butClick} className="operator">&ndash;</button>
                <button name="1" onClick={butClick}>1</button>
                <button name="2" onClick={butClick}>2</button>
                <button name="3" onClick={butClick}>3</button>
                <button name="+" onClick={butClick} className="operator">+</button>
                <button name="0" onClick={butClick}>0</button>
                <button name="." onClick={butClick}>.</button>
                <button onClick={result} id="result" className="operator">=</button>
                </div>
            </div>
        </>
    )
}