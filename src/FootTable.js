import React from 'react'
import { useRecoilState } from 'recoil'
import {orderedFoods} from './Util/Atoms'

import { foodPrices } from './Util/App.Config'
import { FoodTableRow } from './FoodTableRow'
import { capitalize } from './Util/Strings'
import './FoodTable.scss'

export const FootTable = () => {
  const [theOrderedFoods, setOrderedFoods] = useRecoilState(orderedFoods)

  const onHandleClick = (item, value) => {
      const foods = {...theOrderedFoods}
      if (value === -1 && foods[item] === 0) {
          return;
      }
      foods[item] += value
      setOrderedFoods(foods)
  }


  return(
    <div className='FoodsTable'>
<table className='FoodsTable_Table'>
<tbody>
  {
    foodPrices.map(food =>{
return <FoodTableRow
      Key = {food.id}
      item={food.type}
      displayName={capitalize (food.type)}
      theOrderedFoods={theOrderedFoods}
      onHandleClick ={(item,value)=>
      onHandleClick(item,value)}

/>

    })
  }
</tbody>

</table>
    </div>
  )  
}
