import React, { useState } from "react";
import styles from "./items.module.scss";

function ItemOrder({props}) {
    
    const {product} = props
    const [flag, setFlag] = useState(false)


    if (!product) {
        return null;
      }


    let amount = flag === true ?  product.order.units :  product.order.dollors
    let bgUnits = flag === true ? 'active': 'none'
   let bgRub = flag === false ? 'active' : 'none' 

   const getUnits= ()=>{
    setFlag(true)
  }
  const getDollors = ()=>{
    setFlag(false)
  }




  return (
    <>
      <div className={styles.header_item}>
        <p>Заказы</p>
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
        <p className="">За 7 дней</p>
        <div>{amount.week}</div>
      </div>
      <div className={styles.month}>
        <p>За 30 дней</p>
        <div>{amount.month}</div>
      </div>
      <div className={styles.period}>
        <p>12 ноя - 30 дек</p>
        <div>{amount.period}</div>
      </div>
    </>
  );
}
export default ItemOrder;