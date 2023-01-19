import React, { useState } from "react";
import "./Form.css";

const CustomerExpencesForm = (props) => {
  const [titleEntered, setTitleEntered] = useState(" ");
  const [amountEntered, setAmountEntered] = useState(" ");
  const [dateEntered, setDateEntered] = useState(" ");

  const onTitleChangeHandler = (event) => {
    setTitleEntered(event.target.value);
  };
  const onAmountChangeHandler = (event) => {
    setAmountEntered(event.target.value);
  };
  const onDateChangeHandler = (event) => {
    setDateEntered(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const expence = {
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEntered),
    };
    console.log(expence);
    setAmountEntered('');
    setTitleEntered('');
    setDateEntered('');

    props.onFormSubmitDate(expence);
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleEntered}
            onChange={onTitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntered}
            onChange={onAmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-17"
            value={dateEntered}
            onChange={onDateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expence</button>
        </div>
      </div>
    </form>
  );
};

export default CustomerExpencesForm;
