import React from 'react'
import data from './data'
import Card from './Card'

export default function Album() {
  console.log(data)
  data.map(item => console.log(item.name))
  return (
    <div className='album py-5 bg-light text-center'>
      <div className='container'>
        <div className='row'>
          {
            data.map(item => {
              return (
                <Card
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  description={item.description}
                  date={item.date}
                  commentcount={item.commentcount}
                  viewcount={item.viewcount}
                  
                />
              )
            }
            )
          }
        </div>
      </div>
    </div>
  )
}