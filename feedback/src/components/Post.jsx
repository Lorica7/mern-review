import { useParams } from 'react-router-dom';
import {Navigate} from 'react-router-dom'


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
      </div>
  )
}

export default Post

