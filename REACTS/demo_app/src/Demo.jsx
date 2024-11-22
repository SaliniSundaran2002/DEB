import React from 'react'


const Demo = () => {
  const name = 'Salini Sundaran'
  const x = 10, y = 20
  const array = ['Adam', 'Jhon', 'Samayu Chan', 'Oboh Chama']
  const loggedIn = false

  return (
    <>
      <div className='text-xl underline text-purple-800'>SALINI</div>
      <p className='text-blue-500'>Hello {name}</p>
      <p>The sum of {x} and {y} is = {x + y}</p>
      <ul>
        {
          array.map((arrays,index) => (
            <li key={index}>{arrays}</li>
          ))
        }
      </ul>
      {loggedIn ? <h1>Hello member</h1> : <h1>Hello Guset</h1>}

    </>
  )
}

export {Demo}