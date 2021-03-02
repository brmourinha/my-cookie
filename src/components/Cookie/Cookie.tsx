import React, { useContext, useEffect, useState } from "react";
import { CookieContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
interface Props {}

const Cookie = (props: Props) => {
  const { state, dispatch } = useContext(CookieContext);

  return (
    <div className="cookieStatus">
      <div className="cookieStatus__total">{`Your Cookies: ${state.total}`}</div>
      <button
        className="cookieStatus__icon"
        onClick={() => dispatch({ type: "click" })}
      >
        <FontAwesomeIcon icon={faCookie} size="7x" />
      </button>
    </div>
  );
};

export default Cookie;
