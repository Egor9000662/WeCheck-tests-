import React from "react";
import styles from "../styles/product.module.scss";
import OrderItem from "../components/OrderItem";
import AverageItem from "../components/AverageItem";
import FeaturesItem from "../components/FeaturesItem";
import LeftoversItem from "../components/LeftoversItem";

function ProductPage(props) {
  const { productId } = props.match.params;
  const product = props.allProducts.find(
    (product) => product.id === Number(productId)
  );

  if (!product) {
    return null;
  }
  const widthRating = (product.rating / 5) * 100;

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.box}>
          <div className={styles.name_shop}>Wildberries</div>
          <div className={styles.title}>Электробритва Braun 300bt</div>
          <div className={styles.box_price}>
            <div className={styles.price}>3 567 ₽</div>
            <div className={styles.reviews}>
              <div className={styles.rating_body}>
                <div
                  className={styles.rating_active}
                  style={{ width: widthRating + "%" }}
                >
                  <div className={styles.rating_items}>
                    <input
                      className={styles.rating_item}
                      type="radio"
                      value="1"
                      name="rating"
                    />
                    <input
                      className={styles.rating_item}
                      type="radio"
                      value="2"
                      name="rating"
                    />
                    <input
                      className={styles.rating_item}
                      type="radio"
                      value="3"
                      name="rating"
                    />
                    <input
                      className={styles.rating_item}
                      type="radio"
                      value="4"
                      name="rating"
                    />
                    <input
                      className={styles.rating_item}
                      type="radio"
                      value="5"
                      name="rating"
                    />
                  </div>
                </div>

                <div className={styles.num}>{product.rating}</div>
              </div>
              <p>521 отзыв</p>
            </div>
            <div className={styles.update}>Обновлено {product.date}</div>
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
            <OrderItem product={product} />
          </div>
          <div className={styles.item}>
            <AverageItem product={product} />
          </div>
          <div className={styles.item}>
            <FeaturesItem product={product} />
          </div>
          <div className={styles.item}>
            <LeftoversItem product={product} />
          </div>
        </div>
      </main>
    </div>
  );
}
export default ProductPage;
