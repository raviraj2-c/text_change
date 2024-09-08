import React, { useState } from 'react'

export default function Aboutus(props) {
    const [mystyle , setmystyle] = useState({
        color : 'white',
        backgroundColor: 'black'
    })
    const [text , settext] = useState('enabe the dark mord')
    const toggllestyle = ()=>{
      if (mystyle.color === 'white'){
        setmystyle({
          color : 'black',
        backgroundColor: 'white'
        })
        settext('enabe the dark mord')
      }
      else{
        setmystyle({

          color : 'white',
          backgroundColor: 'black'
        })
        settext('enabe the light mord')
      }
  }
    
  return (
    <div className='contaner' style={{backgroundColor:props.mord==='dark'?'black':'white' , color : props.mord==='dark'?'white':'black'}}>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={{backgroundColor:props.mord==='dark'?'black':'white' , color : props.mord==='dark'?'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mord==='dark'?'black':'white' , color : props.mord==='dark'?'white':'black'}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mord==='dark'?'black':'white' , color : props.mord==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mord==='dark'?'black':'white' , color : props.mord==='dark'?'white':'black'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mord==='dark'?'black':'white' , color : props.mord==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mord==='dark'?'black':'white' , color : props.mord==='dark'?'white':'black'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button onClick={toggllestyle} type="button" className="btn btn-primary my-3" >{text}</button>
    </div>
  )
}
