import  React from 'react'
import './Expenses.css'
import ExpenseFile from './ExpenseFile'
import Card from '../UI/Card'

function Expenses(props) {
  return ( <Card className = "parent-div">

                {
                  
                  props.item.map(dataFromApp => {
                 return <ExpenseFile
                          key = {dataFromApp.id}
                          date = {dataFromApp.expenseDate}
                          amount = {dataFromApp.expenseAmount}
                          title = {dataFromApp.expenseTitle} />
                })
                
                }

           </Card>

  )
}

export default Expenses