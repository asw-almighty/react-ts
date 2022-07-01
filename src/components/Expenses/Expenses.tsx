import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

const Expenses = (props: any) => {
	const [filteredYear, setFilteredYear] = useState("2020");
	const selectChangeHandler = (data: any) => {
		setFilteredYear(data);
	};
	return (
		<Card className="expenses">
			<ExpenseFilter onSelectChange={selectChangeHandler} selected={filteredYear} />
			{props.items.map((expense: any) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
		</Card>
	);
};

export default Expenses;
