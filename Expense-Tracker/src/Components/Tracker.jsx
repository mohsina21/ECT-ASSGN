import React, { useState } from "react";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import { Input } from "./Input";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!description || !amount || isNaN(amount)) return;
    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };
    setExpenses([...expenses, newExpense]);
    setDescription("");
    setAmount("");
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">Add an Expense</h2>
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button className="w-full" onClick={addExpense}>
            Add Expense
          </Button>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Expenses</h3>
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {expenses.map((exp) => (
              <li
                key={exp.id}
                className="flex justify-between  dark:bg-gray-800 text-black dark:text-white p-3 rounded-lg shadow"
              >
                <span>{exp.description}</span>
                <span>Rs {exp.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-lg font-bold text-right">
            Total: Rs {total.toFixed(2)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
