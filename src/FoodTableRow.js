// import React from 'react'

// export const FoodTableRow = () => {
//   return (
//     <div>Food</div>
//   )
// }


import React from 'react'
import { formatUSD } from './Util/Money'
import { getPriceForfoods } from './Util/App.Config'
import './FoodTableRow.scss'


export const FoodTableRow  = ({displayName, item, theOrderedFoods, onHandleClick}) => {
  return (
    <tr className='FoodsTableRow'>
        <td>{ displayName }</td>
        <td>{ formatUSD(getPriceForfoods(item)) }</td>
        <td>x</td>
        <td>
            <div className='foodTableRow_OrderAmount'>{ theOrderedFoods[item] }</div>
        </td>
        <td>
            <button className='foodTableRow_Button' onClick={ () => onHandleClick(item, 1) }>+</button>
        </td>
        <td>
            <button className='foodTableRow_Button' onClick={ () => onHandleClick(item, -1) }>-</button>
        </td>
    </tr>
  )
}