import React from 'react'

const DashBoard = () => {
  return (
    <div>
        <h1>Hello Welcome {JSON.parse(localStorage.getItem('user')).userName}</h1>
    </div>
  )
}

export default DashBoard