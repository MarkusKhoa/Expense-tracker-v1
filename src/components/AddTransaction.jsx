import React from 'react'

const AddTransaction = () => {
    return (
        <div className="form-wrapper">
            <form action="">
                <div className="input-group income">
                    <input type="text" placeholder="Add your income" autocomplete="on" />
                    <input type="number" placeholder="Amount" autocomplete="on" />
                    <input type="submit" value="Add" />
                </div>
            </form>

            <form action="">
                <div className="input-group expense">
                    <input type="text" placeholder="Add your expense" autocomplete="on" />
                    <input type="number" placeholder="Amount" autocomplete="on" />
                    <input type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
