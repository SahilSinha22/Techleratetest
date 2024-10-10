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
      <div className="2xl:px-20">
      <Indus/>
      </div>
     
     <Form/>
    </div>
  )
}

export default page
