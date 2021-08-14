import React from 'react'

const ExpenseList = () => {
    return (
        <div className="transactions transactions-expense">
            <h2>Expense History</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text">Shopping</span>
                    <span className="transaction-amount">$ 200</span>
                    <button className="delete-btn">
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default ExpenseList
