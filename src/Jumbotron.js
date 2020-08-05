import React from 'react'

export default function Jumbotron() 
{
  return (
    <div className='jumbotron bg-white text-center'>
      <div className='container'>
        <h1 className='jumbotron-heading'>Jeff example</h1>
        <p className='lead text-muted'>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <button className='btn btn-primary my-2 mx-1'>Main call to action</button>
          <button className='btn btn-secondary my-2 mx-1'>Secondary action</button>
        </p>
      </div>
    </div>
  )
}