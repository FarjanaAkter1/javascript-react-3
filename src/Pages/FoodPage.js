import React from 'react'
import './FoodPage.scss'
import { FootTable } from '../FootTable'

export const FoodPage = () => {
  return (
    <div className='FoodPage'>
       <div className='Center_Content'>
          <div className='FoodPage_Header'>
                Foods 
            </div>
            <div className='FoodPage_Content'>
                <FootTable/>
            </div>
       </div>
    </div>
  )
}
