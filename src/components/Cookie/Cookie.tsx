import React, { useContext, useEffect, useState } from "react";
import { CookieContext } from "../../App";
import "./styles.css";
interface Props {}

const Cookie = (props: Props) => {
  const { state, dispatch } = useContext(CookieContext);

  return (
    <div className="cookieStatus">
      <div className="cookieStatus__total">{`Your Cookies: ${state.total}`}</div>
      <div>
        {
          <button onClick={() => dispatch({ type: "click" })}>
            Add Cookie
          </button>
        }
      </div>
    </div>
  );
};

export default Cookie;
