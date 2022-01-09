import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// import ExpenseItem from "./components/ExpenseItem";
const DUMMY_EXPENSES = [
{
  id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14),
},
{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
{
  id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28),
},
{
  id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12),
},
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
    // console.log('In App.js');
    // console.log (expense);
  };
  // return React.createElement ('div', {},
  // React.createElement('h2' , {}, "Your Greatest Power is love!"),
  // React.createElement(Expenses, {items: expenses})
  // );
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}
export default App;
