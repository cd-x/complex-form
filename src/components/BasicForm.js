import { useState } from "react";

const BasicForm = (props) => {
  const [fnameInput, setFNameInput] = useState("");
  const [lnameInput, setLNameInput] = useState("");
  const [email, setEmail] = useState("");
  const [isFNameValid, setIsFNameValid] = useState(false);
  const [isLNameValid, setIsLNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const isFormValid = isFNameValid && isEmailValid && isLNameValid;

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const fnameChangeHandler = (event) => {
    setIsFNameValid(event.target.value.trim().length !== 0);
    setFNameInput(event.target.value);
  };
  const lnameChangeHandler = (event) => {
    setIsLNameValid(event.target.value.trim().length !== 0);
    setLNameInput(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setIsEmailValid(event.target.value.trim().length !== 0);
    setEmail(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        {!isFormValid && <p className="error-text">Form is not valid !! </p>}
      </div>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={fnameInput}
            onChange={fnameChangeHandler}
          />
          {!isFNameValid && (
            <p className="error-text">First Name is empty ! </p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={lnameInput}
            onChange={lnameChangeHandler}
          />
          {!isLNameValid && <p className="error-text">Last Name is empty ! </p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
        />
        {!isEmailValid && <p className="error-text">Email is empty ! </p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
