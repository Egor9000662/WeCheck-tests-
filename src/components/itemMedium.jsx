import React, { useState } from "react";
import styles from "./items.module.scss";
import Tooltip from "./toooltip";

function ItemMedium({ props }) {
  const { product } = props;
  const [flag, setFlag] = useState(false);

  if (!product) {
    return null;
  }

  let amount = flag === true ? product.medium.units : product.medium.dollors;
  let bgUnits = flag === true ? "active" : "none";
  let bgRub = flag === false ? "active" : "none";

  const getUnits = () => {
    setFlag(true);
  };
  const getDollors = () => {
    setFlag(false);
  };

  return (
    <>
      <div className={styles.header_item}>
        <p>В среднем заказов</p>
        <div className={styles.filter}>
          <div onClick={getUnits} className={styles[bgUnits]}>Шт</div>
          <div onClick={getDollors} className={styles[bgRub]}>Руб</div>
        </div>
      </div>
      <div className={styles.week}>
        <div className="">В сутки <Tooltip text ='Per day' /></div>
        <div>{amount.perDay}</div>
      </div>
      <div className={styles.month}>
        <div>В день, когда в наличии <Tooltip text ='This day' /> </div>
        <div>{amount.thisDay}</div>
      </div>
    </>
  );
}
export default ItemMedium;
