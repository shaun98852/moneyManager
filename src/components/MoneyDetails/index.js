// Write your code here

const MoneyDetails = props => {
  const {transaction} = props
  let balance = 0
  let income = 0
  let expense = 0

  transaction.forEach(eachItem => {
    if (eachItem.type === 'Income') {
      income += parseInt(eachItem.amounts)
    } else {
      expense += parseInt(eachItem.amounts)
    }
  })

  balance = income - expense

  return (
    <div className="AccountSection">
      <div className="balanceContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balanceImage"
        />
        <div className="balanceSec">
          <p className="para">Your Balance</p>
          <p className="bAmount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="incomeContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balanceImage"
        />
        <div className="balanceSec">
          <p className="para">Your Income</p>
          <p className="bAmount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="expenseContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balanceImage"
        />
        <div className="balanceSec">
          <p className="para">Your Expenses</p>
          <p className="bAmount" data-testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
