// Write your code here

const TransactionItem = props => {
  const {eachValue, requiredFunction} = props
  const {id, titles, amounts, type} = eachValue

  const deleteFunction = () => {
    requiredFunction(id)
  }

  return (
    <li className="listItems">
      <p className="titles">{titles}</p>
      <p className="titles">Rs {amounts}</p>
      <p className="titles">{type}</p>
      <button
        className="deleteButton"
        onClick={deleteFunction}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteImage"
        />
      </button>
    </li>
  )
}

export default TransactionItem
