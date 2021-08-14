import './App.css';
import Header from './components/Header';
import IncomeInfo from './components/IncomeInfo';
import Balance from './components/Balance';
import React from 'react';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div>
      <Header className="header"/>
      <div className="container">
        <Balance/>
        <IncomeInfo/>
        <TransactionList/>
      </div>
    </div>
  );
}

export default App;
