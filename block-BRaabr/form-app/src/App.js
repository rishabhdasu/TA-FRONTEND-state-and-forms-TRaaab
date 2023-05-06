import "./App.css";

function App() {
  return (
    <div className="container">
      <form className=" flex column padding">
        <label htmlFor="text">Text Input</label>
        <input type="text" id="text" name="text" />
        <label htmlFor="date">Date Input</label>
        <input type="date" id="date" name="date" />
        <label htmlFor="file">File Input</label>
        <input type="file" id="file" name="file" />
        <label htmlFor="read">Read-Only Input</label>
        <input
          type="text"
          id="read"
          name="read"
          placeholder="This can only be copied"
          readOnly
        />
        <label htmlFor="textarea">Text Area</label>
        <textarea rows="4" cols="50" id="textarea" name="textarea" />
        <label htmlFor="disabled">Text Area Disabled</label>
        <textarea rows="4" cols="50" id="disabled" name="disabled" disabled />
      </form>
    </div>
  );
}

export default App;
