import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';


function ExpenseItem(props) {
  // function clickHandler() {
  //   console.log('Clicked..!');
  // }

let title = props.title;
  const clickHandler = () => {
    // console.log ('Clicked..!');
    title = 'Updated..!'
    console.log(title);
  };
  
    // const expenseDate = new Date(2021, 11, 29);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 4999;
  return (
    <Card className='expense-item'>
     {/* <div>{props.date.toISOString()}</div> */}
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
          <h2>{title}</h2></div>
      <div className='expense-item__price'>$ {props.amount}</div>
      {/* <button onClick={ () => console.log ('Clicked!')}>Change State</button> */}
      <button onClick={clickHandler}>Change State</button>
    </Card>
  );
}

export default ExpenseItem;
 