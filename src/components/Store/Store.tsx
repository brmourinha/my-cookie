import React, { useContext, useEffect } from "react";
import { CookieContext } from "../../App";

interface Props {}

const Store = (props: Props) => {
  const { state, dispatch } = useContext(CookieContext);

  let setCursorInterval: NodeJS.Timeout;

  const handleSum = () => {
    dispatch({ type: "sumCursor" });
    //setTotal((prevState) => prevState + state.cursor.owned);
  };

  useEffect(() => {
    clearInterval(setCursorInterval);
    if (state.cursor.owned > 0) {
      setCursorInterval = setInterval(() => {
        handleSum();
      }, state.cursor.production);
    }
  }, [state.cursor]);
  return (
    <>
      <h1>My Cookie Store</h1>
      <div>
        <div>
          <button
            disabled={state.total < state.cursor.price}
            onClick={() => dispatch({ type: "addCursor" })}
          >
            Add Cursor
          </button>
        </div>
        <div>
          <p>{`Price: ${state.cursor.price}`}</p>
          <p>{`Own: ${state.cursor.owned}`}</p>
          <p>{`Production: ${state.cursor.production / 100000}s`}</p>
        </div>
      </div>
    </>
  );
};

export default Store;
