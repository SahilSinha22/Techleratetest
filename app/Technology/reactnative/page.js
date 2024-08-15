import Navbar from '@/app/component/Navbar'
import Form from '@/components/Form'
import Indus from '@/components/Indus1'
import Technology from '@/components/Technology'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Technology/>
      <Indus/>
      <Form/>
    </div>
  )
}

export default page
