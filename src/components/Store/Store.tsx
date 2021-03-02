import React, { useContext, useEffect } from "react";
import { CookieContext } from "../../App";
import StoreItem from "./StoreItem/StoreItem";

interface Props {}

const Store = (props: Props) => {
  const { state } = useContext(CookieContext);

  return (
    <>
      <h1>My Cookie Store</h1>
      <StoreItem type="addCursor" item={state.cursor} sumType="sumCursor" />
      <StoreItem type="addGradma" item={state.grandma} sumType="sumGrandma" />
      <StoreItem type="addFarm" item={state.farm} sumType="sumFarm" />
      <StoreItem type="addMine" item={state.mine} sumType="sumMine" />
    </>
  );
};

export default Store;
