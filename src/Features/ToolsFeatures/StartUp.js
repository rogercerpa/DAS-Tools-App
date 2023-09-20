import React from 'react'
import BOMupload from "../../Components/StartUpCal/BOMupload"
import StartUpForm from '../../Components/StartUpCal/StartUpForm'

function StartUp() {
  return (
    <div className='flex flex-col gap-4 m-10 p-4'>
      <BOMupload/>
      <StartUpForm/>
    </div>
  )
}

export default StartUp