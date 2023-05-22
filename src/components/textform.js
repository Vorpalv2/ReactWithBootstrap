const TextForm = (props) => {
  return (
    <>
      <div className="mb-6 mx-4 ">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.ExampleText}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={props.Number}
        ></textarea>
      </div>
    </>
  );
};

export default TextForm;
