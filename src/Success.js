import React from 'react'
import {useNavigate} from'react-router-dom'
const Success = () => {
    const Navigate=useNavigate()
  return (
    <div>Success
        <button onClick={()=>Navigate('/Pay')}>go back</button>
    </div>
  )
}

export default Success