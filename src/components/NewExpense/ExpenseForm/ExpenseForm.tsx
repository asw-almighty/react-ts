import React, { ChangeEvent, MouseEvent, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(enteredAmount, enteredDate, enteredTitle)
  }

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
        </div>
			</div>

      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>Add Expense</button>
      </div>
		</form>
	);
};

export default ExpenseForm;
