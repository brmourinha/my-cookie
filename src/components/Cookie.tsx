import React, { useEffect, useState } from "react";

interface Props {}

interface ICursor {
  own: number;
  price: number;
  production: number;
}

const Cookie = (props: Props) => {
  const [total, setTotal] = useState(0);
  const [cursor, setCursor] = useState<ICursor>({
    own: 0,
    price: 15,
    production: 10000,
  });

  const handleSum = () => {
    setTotal((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (cursor.own > 0) {
      setInterval(() => {
        handleSum();
      }, cursor.production);
    }
  }, [cursor]);

  const addCursor = () => {
    setTotal((prevState) => prevState - cursor.price);
    setCursor({ ...cursor, own: cursor.own + 1, price: cursor.price + 1 });
  };

  return (
    <>
      <div>{total}</div>
      <div>
        <button onClick={() => setTotal(total + 1)}>Add Cookie</button>
      </div>
      <div>
        <button disabled={total < cursor.price} onClick={addCursor}>
          Add Cursor
        </button>
      </div>
    </>
  );
};

export default Cookie;
