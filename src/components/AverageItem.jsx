import React, { useState } from "react";
import styles from "./items.module.scss";
import Tooltip from "./Tooltip";

function AverageItem(props) {
  const { product } = props;
  const [flag, setFlag] = useState(false);

  let amount = flag === true ? product.medium.units : product.medium.dollars;
  let bgUnits = flag === true ? "active" : "none";
  let bgRub = flag === false ? "active" : "none";

  const getUnits = () => {
    setFlag(true);
  };
  const getDollars = () => {
    setFlag(false);
  };

  return (
    <>
      <div className={styles.header_item}>
        <p>В среднем заказов</p>
        <div className={styles.filter}>
          <div onClick={getUnits} className={styles[bgUnits]}>
            Шт
          </div>
          <div onClick={getDollars} className={styles[bgRub]}>
            Руб
          </div>
        </div>
      </div>
      <div className={styles.week}>
        <div className={styles.title}>
          В сутки <Tooltip text="Per day" />
        </div>
        <div>{amount.perDay}</div>
      </div>
      <div className={styles.month}>
        <div className={styles.title}>
          В день, когда в наличии <Tooltip text="This day" />
        </div>
        <div>{amount.thisDay}</div>
      </div>
    </>
  );
}
export default AverageItem;
