import React from "react";
import "./NewUserInputExpences";
import CustomerExpencesForm from "./CustomerExpencesForm";

const NewUserInputExpences = (props) => {
  const onFormSubmitted = (expence) => {
    const submittedData = {
      ...expence,
      id: Math.random().toString(),
    };
    console.log(submittedData);
    props.onSave(submittedData);
  };

  return (
    <div className="new-expense">
      <CustomerExpencesForm onFormSubmitDate={onFormSubmitted} />
    </div>
  );
};

export default NewUserInputExpences;
