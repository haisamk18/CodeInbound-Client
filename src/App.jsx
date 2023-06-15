
import {Routes,Route,useNavigate} from 'react-router-dom'
import data from './Component/data';


import './App.css'

import Questions from './Component/Questions';
import Success from './Component/Success';
import Welcome from './Component/Welcome';

function App() {
   


  return (
    <div className='apppage'>
      

      <Routes>
        <Route exact path='/' element={<Welcome/>}/>

        {data.map((i)=> {
          return (
            <Route key={i.srno} exact path={`/${i.srno}`}  element={<Questions array={data} Route={i.srno} question={i.question}/>}  />
          )
        })}
        
        
        <Route exact path='/submitted' element={<Success/>}/>
      </Routes>
       
    </div>
  )
}

export default App
