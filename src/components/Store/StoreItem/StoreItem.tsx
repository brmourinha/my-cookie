import React, { useContext, useEffect } from "react";
import { CookieContext, IStoreItem } from "../../../App";
import "./styles.css";

interface Props {
  item: IStoreItem;
  type: "addCursor" | "addGradma" | "addFarm" | "addMine";
  sumType: "sumCursor" | "sumGrandma" | "sumFarm" | "sumMine";
  name: string;
}

const StoreItem = ({ item, type, sumType, name }: Props) => {
  const { state, dispatch } = useContext(CookieContext);

  let setCursorInterval: NodeJS.Timeout;

  const handleSum = () => {
    dispatch({ type: sumType });
    //setTotal((prevState) => prevState + state.cursor.owned);
  };

  useEffect(() => {
    clearInterval(setCursorInterval);
    if (item.owned > 0) {
      setCursorInterval = setInterval(() => {
        handleSum();
      }, item.production);
    }
  }, [item]);

  return (
    <div className="item">
      <button
        className="item__button"
        disabled={state.total < item.price}
        onClick={() => dispatch({ type })}
      >
        Add item
      </button>

      <div className="item__container">
        <h3>{name}</h3>
        <p>{`Price: ${item.price}`}</p>
        <p>{`Own: ${item.owned}`}</p>
      </div>
    </div>
  );
};

export default StoreItem;
