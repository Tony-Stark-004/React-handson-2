import React, {useState} from 'react'
import './ExpenseFile.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'


function ExpenseFile(props) {
    
    // let month = props.date.toLocaleString('en-US', {month: 'long'})
    // let day = props.date.toLocaleString('en-US', {day: '2-digit'})
    // let year = props.date.getFullYear()

    const [title, setTitle] = useState(props.title) 

     const clickHandler = () => {
            setTitle(newTitle)
     }

    const [newTitle, setNewTitle] = useState(" ")

    const changeHandler = (event) => {
        setNewTitle(event.target.value)
    }
  
  return (
    <Card className='main'>
        <div>{title}</div>
        <div>{props.amount}</div>
        {/* <div className='date'>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div> */}
        { <ExpenseDate date={props.date} /> }
        <input type='text' onChange={changeHandler} value={newTitle}></input>
        { <button onClick={clickHandler} className='btn'>Click to change</button> }
       
    </Card>
 
)}

export default ExpenseFile