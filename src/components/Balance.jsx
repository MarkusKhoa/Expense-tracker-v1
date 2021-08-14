import React from 'react'

const Balance = () => {
    return (
        <div className="balance">
            <h2>Current Balance</h2>
            <h3>0.00 USD</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+0USD</p>
                </div>
                <div className="minus">
                    <h3>Expense</h3>
                    <p>-0USD</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
