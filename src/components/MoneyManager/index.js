import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    transactions: [],
  }

  deleteTransaction = id => {
    const {transactions} = this.state
    const finalList = transactions.filter(eachItem => eachItem.id !== id)

    this.setState({transactions: finalList})
  }

  title = event => {
    this.setState({title: event.target.value})
  }

  amount = event => {
    this.setState({amount: event.target.value})
  }

  addButton = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

   
    let newObject

    if (amount === '') {
      newObject = {
        id: uuidv4(),
        titles: title,
        amounts: 0,
        type,
      }
    } else {
      newObject = {
        id: uuidv4(),
        titles: title,
        amounts: amount,
        type,
      }
    }

    this.setState(prevState => ({
      transactions: [...prevState.transactions, newObject],
      title: '',
      amount: '',
    }))
  }

  optionSelected = event => {
    if (event.target.value === 'INCOME') {
      this.setState({type: 'Income'})
    } else if (event.target.value === 'EXPENSES') {
      this.setState({type: 'Expenses'})
    }
  }

  render() {
    const {transactions, title, amount} = this.state
    return (
      <div className="bgContainer">
        <div className="topBgImage">
          <h1 className="heading">Hi, Richard</h1>
          <p className="paragraph">
            Welcome back to your{' '}
            <span className="spanElement">Money Manager</span>
          </p>
        </div>

        {/* Account Section */}

        {<MoneyDetails transaction={transactions} />}

        <div className="bottomContainer">
          {/* Add Transaction Section */}

          <div className="AddTranscationContainer">
            <h1 className="transactionHeading">Add Transaction</h1>
            <form className="transcationForm" onSubmit={this.addButton}>
              <div className="titleContainer">
                <label htmlFor="titleRequired" className="titleLabel">
                  TITLE
                </label>
                <input
                  type="text"
                  id="titleRequired"
                  className="inputText"
                  placeholder="TITLE"
                  onChange={this.title}
                  value={title}
                />
              </div>

              <div className="titleContainer">
                <label htmlFor="amountInput" className="titleLabel">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amountInput"
                  className="inputText"
                  placeholder="AMOUNT"
                  onChange={this.amount}
                  value={amount}
                />
              </div>

              <select className="optionsSection" onChange={this.optionSelected}>
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>

              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>

          {/* History Section */}

          <div className="historySection">
            <h1 className="historyHeading">History</h1>

            <div className="transactionBox">
              <p className="title">Title</p>
              <p className="title">Amount</p>
              <p className="title">Type</p>
          
            </div>

            <ul className="unorderedList">
              {transactions.map(eachItem => (
                <TransactionItem
                  eachValue={eachItem}
                  requiredFunction={this.deleteTransaction}
                  key={eachItem.id}
                />
              ))}
            </ul>

            {/* <div className="listItems">
              <p className="titles">Salary</p>
              <p className="titles">Rs 50000</p>
              <p className="titles">Income</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                alt="delete"
                className="deleteImage"
              />
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
