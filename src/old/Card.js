import React from 'react'

export default function Card(props) {
  return (
    <div className='col-md-4'>
      <div className='card mb-4 box-shadow'>
        <img alt={props.name} className='card-img-top' src={props.img} />
        <div className='card-body'>
          <p className='card-text'>{props.name}</p>
          <p className='card-text'>{props.text}</p>
        </div>
      </div>
    </div>
  )
}