import React, { useState } from "react";

function Form() {
  const [formValues, setFormValues] = useState({
    textInput: "",
    dateInput: "",
    fileInput: "",
    readOnlyInput: "This is a read-only input",
    disabledInput: "",
    textareaInput: "",
    textareaDisabled: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit form logic
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Text Input:
          <input
            type="text"
            name="textInput"
            value={formValues.textInput}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date Input:
          <input
            type="date"
            name="dateInput"
            value={formValues.dateInput}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          File Input:
          <input
            type="file"
            name="fileInput"
            value={formValues.fileInput}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Read-Only Input:
          <input
            type="text"
            name="readOnlyInput"
            value={formValues.readOnlyInput}
            readOnly
          />
        </label>
        <br />
        <label>
          Disabled Input:
          <input
            type="text"
            name="disabledInput"
            value={formValues.disabledInput}
            disabled
          />
        </label>
        <br />
        <label>
          Textarea Input:
          <textarea
            name="textareaInput"
            value={formValues.textareaInput}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Textarea Disabled:
          <textarea
            name="textareaDisabled"
            value={formValues.textareaDisabled}
            disabled
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
