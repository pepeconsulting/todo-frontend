import React from 'react'
import { useState } from 'react';

export default function CompletedButtons() {
    const [showCompleted, setShowCompleted] = useState(false);
    
  return (
    <div className='btn-area'>
        <button className= {`secondary-btn ${showCompleted === false &&'active'}`} onClick={()=> setShowCompleted(false)}>Todo</button>
        <button className={` secondary-btn ${showCompleted === true && 'active'}`} onClick={()=> setShowCompleted(true)}>Completed</button>

    </div>
  )
}
