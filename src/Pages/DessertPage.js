import React from 'react'
import './DessertPage.scss'
import {DessertTable} from '../DessertTable'


export const DessertPage = () => {
  return (
    <div className='DessertPage'>
      <div className='Center_Content'>
        <div className='DessertPage_Header'>
              Dessert


          </div>
          <div>
           
              <DessertTable/>
          
          </div>
      </div>
    </div>
  )
}
