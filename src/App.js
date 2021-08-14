import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/ExpenseList'
import "./App.css"

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header/>
        <Balance/>
        <AddTransaction/>
        <IncomeList/>
        <ExpenseList/>
      </div>
    </div>
  )
}

export default App;