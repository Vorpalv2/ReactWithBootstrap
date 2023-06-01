import { useState } from "react";

const TextForm = (props) => {
  const [first, setfirst] = useState("");

  const updateFirst = (event) => {
    setfirst(event.target.value);
  };
  const toUpper = () => {
    let newFirst = first.toUpperCase();
    setfirst(newFirst);
  };
  const toLower = () => {
    let newFirst = first.toLowerCase();
    setfirst(newFirst);
  };

  const CopyContent = () => {
    let input = document.getElementById("exampleFormControlTextarea1");
    input.select();
    navigator.clipboard.writeText(input.value);
  };

  return (
    <>
      <div className="mb-6 mx-4 ">
        <textarea
          value={first}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={props.Number}
          onChange={updateFirst}
        ></textarea>
      </div>
      <button className="btn btn-primary my-2 mx-3" onClick={toUpper}>
        UpperCase
      </button>
      <button className="btn btn-primary my-2 mx-3" onClick={toLower}>
        LowerCase
      </button>
      <button className="btn btn-primary my-2 mx-3" onClick={CopyContent}>
        Copy Content
      </button>
      <p className="my-2 mx-3">Character Amount is : {first.length}</p>
      <p className="my-2 mx-3">
        Word Amount is : {first.split(" ").length - 1}
      </p>
    </>
  );
};

export default TextForm;
