import React, { useState } from "react";

function Form() {
  let [formData, setData] = useState({
    text: "",
    date: "",
    file: "",
    read: "",
    textArea: "",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="text">Text Input</label>
        <input
          type="text"
          value={formData.text}
          name="text"
          onChange={handleChange}
        ></input>

        <label htmlFor="date">Date Input </label>
        <input
          type="date"
          value={formData.date}
          name="date"
          onChange={handleChange}
        ></input>

        <label htmlFor="file">File Input </label>
        <input
          className="file"
          type="file"
          value={formData.file}
          name="file"
          onChange={handleChange}
        ></input>

        <label htmlFor="read">Read Only Input </label>
        <input
          type="text"
          value={formData.read}
          name="read"
          onChange={handleChange}
          readOnly
          placeholder="This can only be copied"
        ></input>

        <label htmlFor="disabled">Disabled Input </label>
        <input
          type="text"
          //   value={formData.disabled}
          name="disabled"
          onChange={handleChange}
          disabled
        ></input>

        <label htmlFor="textArea">Text Area</label>
        <textarea
          type="text"
          value={formData.textArea}
          name="textArea"
          onChange={handleChange}
          rows={10}
        ></textarea>

        <label htmlFor="textAreaDisabled">Text Area Disabled</label>
        <textarea
          type="text"
          //   value={formData.textAreaDisabled}
          name="textAreaDisabled"
          onChange={handleChange}
          disabled
          rows={10}
        ></textarea>

        <input className="button" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Form;
