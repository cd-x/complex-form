import { useState } from "react";

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [nameInputValid, setNameInputValid] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setNameInputValid(nameInput.trim().length !== 0);
  };
  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={nameInput}
        />
        {!nameInputValid && (
          <p className="error-text">Name Input Field is Empty !</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
