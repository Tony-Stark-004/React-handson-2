import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense = (props) => {

  const getDataFromExpenseForm = (arguementFromExpenseFrom) => {
      console.log(arguementFromExpenseFrom);

    let data = { ...arguementFromExpenseFrom, id: Math.random().toString() }
    props.propsForNewExpense(data)
    
  }

  return (
    <div className='new-expense'>
        <ExpenseForm propsForExpenseForm = {getDataFromExpenseForm} />
    </div>
  )
}

export default NewExpense