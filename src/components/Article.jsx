import React from "react";
import "../styles/article.css";
import iconAdd from "../assets/icons/iconAdd.svg";
import iconSubtract from "../assets/icons/iconSubtract.svg";
import iconDelete from "../assets/icons/iconDelete.svg";
import Button from "../components/Button";

const Article = (props) => {
  const {
    title,
    quantity,
    totalPerProduct,
    image,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveItem,
  } = props;

  return (
    <div className="article">
      <div className="article-img">
        <img src={image} alt={title} width="80" height="" />
      </div>
      <div className="article-description">
        <div className="product-description">
          <p>{title}</p>
          <h3>Cantidad</h3>
          <div className="product-quantity">
            <Button
              type="link"
              textButton="Pagar"
              icon={iconSubtract}
              handleClick={handleDecreaseQuantity}
            />
            <h2>{quantity}</h2>
            <Button
              type="link"
              textButton="Pagar"
              icon={iconAdd}
              handleClick={handleIncreaseQuantity}
            />
          </div>
        </div>
        <div className="product-price">
          <p>{totalPerProduct}</p>
          <Button
            type="link"
            textLink="Quitar producto"
            icon={iconDelete}
            handleClick={handleRemoveItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
