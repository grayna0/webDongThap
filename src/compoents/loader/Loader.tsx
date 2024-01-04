import React from 'react'

function Loader() {
  return (
    <div style={{display:"inline-block"}}>
      <div role="status" >
        <img src="./Spinner-1s-224px.gif" alt="img" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loader