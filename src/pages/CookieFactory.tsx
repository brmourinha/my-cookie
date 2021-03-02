import React from "react";
import Cookie from "../components/Cookie/Cookie";
import Factories from "../components/Factories/Factories";
import Store from "../components/Store/Store";
import "./styles.css";

interface Props {}

const CookieFactory = (props: Props) => {
  return (
    <div className="cookieFactory">
      <Factories />
      <Cookie />
      <Store />
    </div>
  );
};

export default CookieFactory;
