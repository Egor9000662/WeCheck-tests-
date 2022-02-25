import React, { useState } from "react";
import styles from "./items.module.scss";
import Tooltip from "./toooltip";

function ItemFeatures({ props }) {
  const { product } = props;
  const [flag, setFlag] = useState(false);

  if (!product) {
    return null;
  }

  let amount = flag === true ? product.features.units : product.features.dollors;
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
        <p>Возможности</p>
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
        <div className="">Упущенные заказы <Tooltip text='Rejection' /> </div>
        <div>{amount.rejection}</div>
      </div>
      <div className={styles.month}>
        <div>Потенциал <Tooltip text='Potential' /></div>
        <div>{amount.potential}</div>
      </div>
    </>
  );
}
export default ItemFeatures;
