import { useParams } from 'react-router-dom';
import {Navigate, useNavigate, Route, Routes} from 'react-router-dom'


import React from 'react'

function Post() {
    
    const status = 200

    const navigate = useNavigate()

    const onClick = () => {
        console.log("Hello")
        navigate('/about')
    }

    if (status === 404) {
    <Navigate to='/notfound' />
}

    const params = useParams()
  return (
      <div>
          <h1>Post {params.id}</h1>
          <p> Name: {params.name}</p>
          <button onClick={onClick}>Click</button>
          <Routes>
              <Route path='/show' element={<h1>Hello Moon</h1>}/>
          </Routes>
      </div>
  )
}

export default Post

