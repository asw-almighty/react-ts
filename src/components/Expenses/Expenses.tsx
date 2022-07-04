import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpensesChart from './ExpensesChart/ExpensesChart';

const Expenses = (props: any) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const selectChangeHandler = (data: any) => {
		setFilteredYear(data);
	};

	let expenseArray = props.items.filter((item: any) => item.date.getFullYear().toString() === filteredYear);

	return (
		<Card className="expenses">
			<ExpenseFilter onSelectChange={selectChangeHandler} selected={filteredYear} />
			<ExpensesChart expenses={expenseArray}/>
			<ExpenseList items={expenseArray} />
		</Card>
	);
};

export default Expenses;
