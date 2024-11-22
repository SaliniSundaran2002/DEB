import React from 'react'
import { Card } from './Card'
import { Demo } from './Demo'

const App = () => {


  return (
    <>
    <Demo />

      <Card CustomClasses="bg-yellow-300 mb-4" />
      <Card CustomClasses="bg-green-300 mb-4" />
      <Card CustomClasses="bg-blue-300" />
    </>
  )
}

export default App