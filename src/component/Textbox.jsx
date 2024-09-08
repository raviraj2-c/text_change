import React, {useState} from 'react'

export default function Textbox(props)  {

  const upClick = ()=> {
    let newtext = text.toUpperCase();
    setext(newtext)
  }
  const writetext = (event)=>{
    setext(event.target.value)
  }
    const [text, setext] = useState("your text area is this");
    return (
        <>
        <h3 style={{color : props.mord==='dark'?'white':'black'}}>{props.heading}</h3>
        <div className='mb-3 contaner' >
        <div className="form-group">
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mord==='dark'?'black':'white' , color : props.mord==='dark'?'white':'black'}} value={text} onChange={writetext} rows="8"></textarea>
      </div>
        </div>
      <button type="submit" className="btn btn-primary" onClick={upClick}>Submit</button>  
      <div className='contaner'style={{color : props.mord==='dark'?'white':'black'}}>
        <h2>words and chareter</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length}words {text.length}charater </p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
            
        </>
    )
  }

