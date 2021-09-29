import React, { useState } from "react";

const Form = (event) => {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const processAndDisplayResult = (event) => {
    event.preventDefault();
    var sum = 0;
    var output = "";
    if (date == "" || number == "") {
      output += "Please enter valid input";
    } else {
      for (let i = 0; i < date.length; i++) {
        if (i != 4 && i != 7) {
          sum += parseInt(date[i]);
        }
      }
      if (sum % number == 0) {
        output += number + " is lucky number!! 😀😀😀";
      } else {
        output += number + " is not that lucky 😟";
      }
    }

    setResult(output);
  };
  return (
    <React.Fragment>
      <form className="ui form" onSubmit={processAndDisplayResult}>
        <div className="field">
          <label className="label" for="datePicer">
            Select your Birth date:
          </label>
          <input
            id="datePicker"
            type="date"
            required=""
            onChange={(event) => {
              setDate(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <div className="field">
            <label className="label" for="luckyNo">
              Enter your Lucky Number:
            </label>
            <input
              id="luckyNo"
              type="number"
              onChange={(event) => {
                setNumber(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <button className="button checkBtn">check</button>
      </form>
      <div className="output">
        <div className="label">{result}</div>
      </div>
    </React.Fragment>
  );
};

export default Form;
