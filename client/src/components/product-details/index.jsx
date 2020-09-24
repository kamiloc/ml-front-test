import React from "react";
import "./index.scss";

export default function ProductDetail({ product }) {
  const { id, picture, condition, sold_quantity, title, price, description } = product;

  return (
    <div className="product">
      <div className="product__image">
        <img src={picture} alt={id} />
      </div>

      <div className="product__info">
        <section className="product__info__basic">
          <span className="condition">{condition === "new" ? "Nuevo" : "Usado"}</span>
          <span>{`${sold_quantity} ${sold_quantity === 1 ? "vendido" : "vendidos"}`}</span>
        </section>

        <h2 className="product__name">{title}</h2>
        <h4 className="product__price">
          {price.amount.toLocaleString("es-AR", { style: "currency", currency: price.currency, minimumFractionDigits: 0 })}
        </h4>
        <button className="product__buy">Comprar</button>
      </div>

      <section className="product__description">
        <h6 className="title">Descripción del producto</h6>
        <p>{description}</p>
      </section>
    </div>
  );
}
