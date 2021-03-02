import React, { useContext, useEffect } from "react";
import { CookieContext } from "../../App";
import StoreItem from "./StoreItem/StoreItem";
import "./styles.css";

const Store = () => {
  const { state } = useContext(CookieContext);

  return (
    <div className="store">
      <h1>My Cookie Store</h1>
      <div className="store__items">
        <StoreItem type="addCursor" item={state.cursor} sumType="sumCursor" />
        <StoreItem type="addGradma" item={state.grandma} sumType="sumGrandma" />
        <StoreItem type="addFarm" item={state.farm} sumType="sumFarm" />
        <StoreItem type="addMine" item={state.mine} sumType="sumMine" />
      </div>
    </div>
  );
};

export default Store;
