import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {
  //   console.log('Clicked..!');
  // }
  // const [title, setTitle] = useState(props.title);
  //console.log('ExpenseItems evaluated by React');
  // let title = props.title;
  // const clickHandler = () => {
  //   // console.log ('Clicked..!');
  //   // title = 'Updated..!'
  //   // setTitle("Updated!..");
  //   // console.log(title);
  // };

  // const expenseDate = new Date(2021, 11, 29);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 4999;
  return (
    <li><Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">$ {props.amount}</div>
      {/* <button onClick={ () => console.log ('Clicked!')}>Change State</button> */}
      {/* <button onClick={clickHandler}>Change State</button> */}
    </Card></li>
  );
}

export default ExpenseItem;
