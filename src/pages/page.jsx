import React, { useState } from "react";
import styles from "../styles/page.module.scss";
import ItemOrder from "../components/itemOrder";
import ItemMedium from "../components/itemMedium";
import ItemFeatures from '../components/itemFeatures'
import ItemLeftovers from '../components/itemLeftovers'


function Page_home(props) {
  const { productId } = props.match.params;
  const product = props.allProducts.find((product) => product.id == productId);


  if (!product) {
    return null;
  }

  const widthRaiting  = (product.rating/5)*100
  console.log(widthRaiting);
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.box}>
          <div className={styles.name_shop}>Wildberries</div>
          <div className={styles.title}>Электробритва Braun 300bt</div>
          <div className={styles.box_price}>
            <div className={styles.price}>3 567 ₽</div>
            <div className={styles.reviews}>
              <div className={styles.raiting_body}>
                <div className={styles.raiting_active} style={{width: widthRaiting+"%"}}>
                  <div className={styles.raiting_items}>
                    <input
                      className={styles.raiting_item}
                      type="radio"
                      value="1"
                      name="raiting"
                    />
                    <input
                      className={styles.raiting_item}
                      type="radio"
                      value="1"
                      name="raiting"
                    />
                    <input
                      className={styles.raiting_item}
                      type="radio"
                      value="1"
                      name="raiting"
                    />
                    <input
                      className={styles.raiting_item}
                      type="radio"
                      value="1"
                      name="raiting"
                    />
                    <input
                      className={styles.raiting_item}
                      type="radio"
                      value="1"
                      name="raiting"
                    />
                  </div>
                </div>

                <div className={styles.num}>{product.rating}</div>
              </div>
              <p>521 отзыв</p>
            </div>
            <div className={styles.update}>Обновлено 12 Ноя, 12:24</div>
          </div>
          <div className={styles.info}>
            <div className={styles.productId}>
              <p>Артикул</p> <span>{product.id}</span>
            </div>
            <div className={styles.brand}>
              <p>Бренд</p> <span>{product.brand}</span>
            </div>
            <div className={styles.seller}>
              <p> Продавец </p>
              <span>{product.seller}</span>
            </div>
            <div className={styles.shop}>
              <p>Склад</p>
              <span>{product.shop}</span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.container_main}>
          <div className={styles.item}>
            <ItemOrder props={{ product }} />
          </div>
          <div className={styles.item}>
            <ItemMedium props={{ product }} />
          </div>
           <div className={styles.item}>
         <ItemFeatures props={{ product }} />
          </div> 
          <div className={styles.item}>
          <ItemLeftovers  props={{ product }}/>
          </div>
        </div>
      </main>
      

    </div>
  );
}
export default Page_home;
