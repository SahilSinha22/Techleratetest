import React from 'react'
import Navbar from '../component/Navbar'
import Indus from '@/components/Indus1'
import Form from '@/components/Form'
import Award from '@/components/Award'

const page = () => {
  return (
    <div>
      <Navbar/>
<Award/>
      <Indus/>
      <Form/>
    </div>
  )
}

export default page
