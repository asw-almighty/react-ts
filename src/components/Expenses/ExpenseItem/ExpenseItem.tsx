import React, { useState } from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props: {title: string, date: Date, amount: number}) => {
	// return (
	// React.createElement(Card, {className: 'expense-item'},
	//   React.createElement(ExpenseDate, {date:props.date}),
	//   React.createElement("div", {className: 'expense-item__description'},
	//     React.createElement('h2', {}, props.title),
	//     React.createElement('div', {className: 'expense-item__price'}, '$'+props.amount)
	//   )
	// )
	// )

  // let title = props.title;
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // title = 'update';
    setTitle('Updated!');
  }

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>button</button>
			</div>
		</Card>
	);
};

export default ExpenseItem;
