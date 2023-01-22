import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

const [enteredTitle, setEnteredTitle] = useState("")
const [enteredAmount, setEnteredAmount] = useState("")
const [enteredDate, setEnteredDate] = useState("")

 const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value)
 }

 const amountChangeHandler = (event) => {
  setEnteredAmount(event.target.value)
 }

 const dateChangeHandler = (event) => {
  setEnteredDate(event.target.value)
 }

const submitChangeHandler = (event) => {
  event.preventDefault()

  const expenseData = {
    expenseDate : new Date(enteredDate),
    expenseAmount : +enteredAmount,
    expenseTitle : enteredTitle,
  
  }

props.propsForExpenseForm(expenseData);

console.log(expenseData);

  setEnteredTitle('')
  setEnteredAmount('')
  setEnteredDate('')

}




  return ( <form onSubmit={submitChangeHandler}>
              <div className='new-expense__controls'>
                <div className='new-expense__control'>
                  <label>Submit</label>
                  <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>

                <div className='new-expense__control'>
                  <label>Amount</label>
                  <input type="number" onChange={amountChangeHandler} value={enteredAmount}/>
                </div>

                <div className='new-expense__control'>
                  <label>Date</label>
                  <input type="date" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
              </div>

              <div>
                <button type="submit">Add Expense</button>
              </div>
          </form>
 )
}

export default ExpenseForm