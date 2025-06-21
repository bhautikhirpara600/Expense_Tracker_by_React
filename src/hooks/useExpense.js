import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export function useExpense() {
    return useContext(ExpenseContext)
}