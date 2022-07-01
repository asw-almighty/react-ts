import React from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props: any) => {
	const saveExpenseData = (expense: any) => {
		const expenseData = {
			...expense,
			id: Math.random().toString,
		};
		props.onSaveExpenseData(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseData} />
		</div>
	);
};

export default NewExpense;
