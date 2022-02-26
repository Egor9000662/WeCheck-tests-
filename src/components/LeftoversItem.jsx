import React, { useState } from "react";
import styles from "./items.module.scss";
import Tooltip from "./Tooltip";

function LeftoversItem(props) {
  const { product } = props;
  const [flag, setFlag] = useState(false);

  let amount =
    flag === true ? product.leftovers.units : product.leftovers.dollars;
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
        <p>Остатки</p>
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
          В наличии <Tooltip text="In Stock" />{" "}
        </div>
        <div>{amount.inStock}</div>
      </div>
      <div className={styles.month}>
        <div className={styles.title}>
          С продажами <Tooltip text="Sales" />
        </div>
        <div>{amount.sales}</div>
      </div>
    </>
  );
}
export default LeftoversItem;
