
import { useState } from 'react';

import Aboutus from './component/Aboutus';
import Navebar from './component/Navebar';

import Textbox from './component/Textbox';
import Alert from './Alert';

import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App(props) {

  
  const [mord , setmord] = useState('light')
  const [mordtext , setmordtext] = useState('Enabel the darkmord')
  const [alert, setalert]=useState(null)
  const showalert = (massage , text)=>{
       setalert({
        massage : massage,
        text : text
       })
       setTimeout(() => {
        showalert(null)
       }, 2000);
  } 
  const clickon = ()=> {
    if(mord === 'dark'){
      setmord('light');
      document.body.style.backgroundColor = 'white';
      setmordtext('Enabel the lightmord')
      showalert("Enabel the lightmord" ,"success")
    }
    else{
      setmord('dark');
      document.body.style.backgroundColor = 'black';
      setmordtext('Enabel the dirkmord')
      showalert("Enabel the dirkmord" ,"success")
    }
  }
  return (
<>
<div >
  <Navebar clickon = {clickon} mord = {mord}/>
  </div>
 
      <Alert  alert ={alert}/>
<BrowserRouter>
      <Routes>
<Route path='/' element={<Aboutus  mord = {mord}/>}/>
<Route path='Textbox' element={<Textbox heading="Eter the text here"mord = {mord}/>}/>
      </Routes>
      </BrowserRouter>

  <div className='container my-3' >

 
  </div>


</>
  );
}

export default App;
