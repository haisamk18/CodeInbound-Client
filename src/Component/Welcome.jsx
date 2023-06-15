import React from 'react'
import './Welcome.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate=useNavigate();

  return (
    <div className='welcomepage'>
        <div className="heading1">Welcome to our Feedback Form!</div>
        <div className="heading2">Please take a moment to share your thoughts, suggestions, or any issues you may have encountered. Your feedback is anonymous and greatly appreciated.</div>
        <div className="btn" onClick={()=> navigate('/1')} >Let's get started!</div>
    </div>
  )
}

export default Welcome