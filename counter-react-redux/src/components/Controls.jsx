import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Controls() {
  const inputElement = useRef();
  const dispatch = useDispatch();
  console.log("Controls");

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
    
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
    
  };
 
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: Number(inputElement.current.value)
      },
      
    });
    inputElement.current.value=''
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: Number(inputElement.current.value),
      },
    });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  }
const handlePrivacy = () => {
  dispatch({ type: "TOGGLE_PRIVACY" });
}
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -
        </button>
        <button type="button" class="btn btn-secondary"
        onClick={handlePrivacy}>Privacy Toggle</button>

      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number..."
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
