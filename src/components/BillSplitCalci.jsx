import React, { useState } from "react";

function BillSplitCalci({ selectedFriend, onSplitBill }) {
  const [select, setSelect] = useState("user");
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billValue || !yourExpense) return;
    onSplitBill(select === "user" ? yourExpense : -yourExpense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="billValue">💰 Bill value</label>
      <input
        type="number"
        value={billValue}
        id="billValue"
        onChange={(e) => setBillValue(Number(e.target.value))}
      />

      <label htmlFor="yourExpense">🧍‍♀️ Your expense</label>
      <input
        type="number"
        value={yourExpense}
        id="yourExpense"
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > billValue
              ? yourExpense
              : Number(e.target.value)
          )
        }
      />

      <label htmlFor="x-expense">👫 {selectedFriend.name}'s expense</label>
      <input
        type="text"
        value={billValue - yourExpense}
        id="x-expense"
        disabled
      />

      <label htmlFor="imgUrl">😛 Who is paying the bill?</label>
      <select onChange={(e) => setSelect(e.target.value)} value={select}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button" type="submit">
        Split Bill
      </button>
    </form>
  );
}

export default BillSplitCalci;
