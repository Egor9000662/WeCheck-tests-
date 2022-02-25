import React, { useState } from "react";
import styles from "./items.module.scss";
import Tooltip from "./toooltip";

function ItemLeftovers({ props }) {
  const { product } = props;
  const [flag, setFlag] = useState(false);

  if (!product) {
    return null;
  }

  let amount =
    flag === true ? product.leftovers.units : product.leftovers.dollors;
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
        <p>Остатки</p>
        <div className={styles.filter}>
          <div onClick={getUnits} className={styles[bgUnits]}>
            Шт
          </div>
          <div onClick={getDollors} className={styles[bgRub]}>
            Руб
          </div>
        </div>
      </div>
      <div className={styles.week}>
        <div className="">В наличии <Tooltip text='In Stock' /> </div>
        <div>{amount.inStock}</div>
      </div>
      <div className={styles.month}>
        <div>С продажами <Tooltip text='Sales'/></div>
        <div>{amount.sales}</div>
      </div>
    </>
  );
}
export default ItemLeftovers;
