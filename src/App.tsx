import React, { useReducer, useState } from "react";
import CookieFactory from "./pages/CookieFactory";

export interface IStoreItem {
  owned: number;
  price: number;
  production: number;
}

interface IState {
  total: number;
  cursor: IStoreItem;
  grandma: IStoreItem;
  farm: IStoreItem;
  mine: IStoreItem;
}

const initialState: IState = {
  total: 0,
  cursor: {
    owned: 0,
    price: 15,
    production: 10000,
  },
  grandma: {
    owned: 0,
    price: 100,
    production: 1000,
  },
  farm: {
    owned: 0,
    price: 1000,
    production: 100,
  },
  mine: {
    owned: 0,
    price: 10000,
    production: 10,
  },
};

export const CookieContext = React.createContext<any>(null);

function reducer(state: IState, action: any) {
  switch (action.type) {
    case "click":
      return { ...state, total: state.total + 1 };
    case "addCursor":
      return {
        ...state,
        total: state.total - state.cursor.price,
        cursor: {
          ...state.cursor,
          owned: state.cursor.owned + 1,
          price: state.cursor.price + 1,
        },
      };
    case "sumCursor":
      return { ...state, total: state.total + state.cursor.owned };
    case "addGradma":
      return {
        ...state,
        total: state.total - state.grandma.price,
        grandma: {
          ...state.grandma,
          owned: state.grandma.owned + 1,
          price: state.grandma.price + 10,
        },
      };
    case "sumGrandma":
      return { ...state, total: state.total + state.grandma.owned };
    case "addFarm":
      return {
        ...state,
        total: state.total - state.farm.price,
        farm: {
          ...state.farm,
          owned: state.farm.owned + 1,
          price: state.farm.price + 100,
        },
      };
    case "sumFarm":
      return { ...state, total: state.total + state.farm.owned };
    case "addMine":
      return {
        ...state,
        total: state.total - state.mine.price,
        mine: {
          ...state.mine,
          owned: state.mine.owned + 1,
          price: state.mine.price + 1000,
        },
      };
    case "sumMine":
      return { ...state, total: state.total + state.mine.owned };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CookieContext.Provider value={{ state, dispatch }}>
      <CookieFactory />;
    </CookieContext.Provider>
  );
}

export default App;
