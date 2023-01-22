import React, {useState} from 'react'
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/Form/NewExpense'

let dummyArr = [
  {
    expenseDate : new Date(2023, 1, 3),
    expenseAmount : 300,
    expenseTitle : 'School Fees',
    id : 'e1', 
  },

  {
    expenseDate : new Date(2023, 3, 5),
    expenseAmount : 500,
    expenseTitle : 'Dating',
    id : 'e2'
  },

]

function App() {

  const [arr, setArr] = useState(dummyArr)

  const getDataFromNewExpense = (argumentFromNewExpenses) => {

    const updatedArr = [...arr, argumentFromNewExpenses]
    setArr(updatedArr)
    console.log(updatedArr);
  }

  return (

        <div>
            <NewExpense propsForNewExpense = {getDataFromNewExpense}/>
            <Expenses item = {arr} />
        </div> 
    )                  
}

export default App