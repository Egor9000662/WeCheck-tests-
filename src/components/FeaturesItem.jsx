import React, { useState } from "react";
import styles from "./items.module.scss";
import Tooltip from "./Tooltip";

function FeaturesItem(props) {
  const { product } = props;
  const [flag, setFlag] = useState(false);

  let amount =
    flag === true ? product.features.units : product.features.dollars;
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
        <p>Возможности</p>
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
          Упущенные заказы <Tooltip text="Rejection" />{" "}
        </div>
        <div>{amount.rejection}</div>
      </div>
      <div className={styles.month}>
        <div className={styles.title}>
          Потенциал <Tooltip text="Potential" />
        </div>
        <div>{amount.potential}</div>
      </div>
    </>
  );
}
export default FeaturesItem;
