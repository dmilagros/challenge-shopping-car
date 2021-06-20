import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Article from "./components/Article";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { getProducts } from "./services/products";
import Loader from "./components/Loader";

function App() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(40);
  const [loading, setLoading] = useState(true);

  const listProducts = async () => {
    setLoading(true);
    let res = await getProducts();
    setProducts(res.data);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  useEffect(() => {
    listProducts();
  }, []);

  useEffect(() => {
    getSubtotalDecrease();
    getSubtotalIncrease();
  }, [products]);

  function getSubtotalDecrease() {
    let subt = 0;
    products.forEach(function (elemento, indice) {
      subt -= elemento["price"] * elemento["amount"];
    });
    setSubtotal(Math.abs(subt.toFixed(2)));
  }

  function getSubtotalIncrease() {
    let suma = 0;
    products.forEach(function (elemento, indice) {
      suma += elemento["price"] * elemento["amount"];
    });
    setSubtotal(Math.abs(suma.toFixed(2)));
  }

  const handleRemoveItem = (id) => {
    const newList = products.filter((item) => item.id !== id);
    setProducts(newList);
    if (products.length === 1) {
      setShipping(0);
    }
  };

  const handleDecreaseQuantity = (id, amount) => {
    const newList = products.map((product) => {
      if (product.id === id && product.amount > 1) {
        const updatedProduct = {
          ...product,
          amount: amount - 1,
        };
        return updatedProduct;
      }
      return product;
    });
    setProducts(newList);
    getSubtotalDecrease();
  };

  const handleIncreaseQuantity = (id, amount) => {
    const newList = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = {
          ...product,
          amount: amount + 1,
        };
        return updatedProduct;
      }
      return product;
    });
    setProducts(newList);
    getSubtotalIncrease();
  };

  const handleClearOut = () => {
    setProducts([]);
    setShipping(0);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="app">
      <div className="container">
        <h1>Carrito de compras</h1>
        <Divider />
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <Article
                image={product.image}
                title={product.name}
                quantity={product.amount}
                totalPerProduct={`S/.${(product.amount * product.price).toFixed(
                  2
                )}`}
                handleDecreaseQuantity={() =>
                  handleDecreaseQuantity(product.id, product.amount)
                }
                handleIncreaseQuantity={() =>
                  handleIncreaseQuantity(product.id, product.amount)
                }
                handleRemoveItem={() => handleRemoveItem(product.id)}
              />
              <Divider />
            </div>
          ))
        ) : (
          <p className="empty">Oh no! Tu carrito está vacío </p>
        )}
        <div className="subtotal">
          <p>Subtotal:</p>
          <p>{subtotal.toFixed(2)}</p>
        </div>
        <Divider isHidden="true" />
        <div className="envio">
          <p>Envio:</p>
          <p>{shipping.toFixed(2)} </p>
        </div>
        <Divider />
        <div className="total">
          <p>Total:</p>
          <p>{(shipping + subtotal).toFixed(2)} </p>
        </div>
        <Button type="button" textButton="Pagar" />
        <div className="empty-shopping-cart">
          <Button
            type="link"
            textLink="Limpiar carrito"
            handleClick={handleClearOut}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
