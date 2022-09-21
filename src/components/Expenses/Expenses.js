import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState("2020");

   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
   };

   const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
   });

   return (
      <Card className="expenses">
         <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
         />
         <ExpensesChart expenses={filteredExpenses} />
         <ExpensesList items={filteredExpenses} />

         {/* !! if want one statement */}
         {/* <ExpenseItem
            title={items[0].title}
            date={items[0].date}
            amount={items[0].amount}
         /> */}
      </Card>
   );
};

export default Expenses;
