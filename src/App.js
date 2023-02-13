import React, { useState } from 'react';
import { marked } from 'marked';

import './App.css';

function App() {

  const [text,setText] = useState(
    'Write some text and use symbols for conversion. (# for Bold, * for -, etc...)'
  )

  const onChangeHandler = (event) =>{
    console.log("changed")
    setText(event.target.value);
    console.log(marked(text));
  };
    return (
        <div className="App">
            <div className='elements'>
                <div className='element' >
                   <textarea rows='30' onChange={(e) => onChangeHandler(e)} value={text}></textarea>
                </div>

                <div className='element'>
                    <div dangerouslySetInnerHTML={{__html: marked(text)}} ></div>
                </div>
            </div>
        </div>
    );
}

export default App;
