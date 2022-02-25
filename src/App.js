import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "@fontsource/roboto";
import ProductPage from "./pages/page";
import styles from "./styles/app.module.scss";
import logo from "./assest/images/nav_logo.png";

function App() {
  const [items, setItems] = useState([]);



  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((response) => setItems(response));
  }, []);

  return (
    <div className={styles.app}>
      <Router>
        <nav>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>

            {items.map((item) => {
              return (
                <NavLink
                  activeClassName={styles.link}
                  to={`/products/${item.id}`}
                  key={item.id}
                >
                  Товар <br /> {item.id}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <Switch>
          <Route
            exact
            path="/products/:productId"
            component={(props)=><ProductPage {...props} allProducts={items} />}
          />
  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
