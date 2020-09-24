import React from "react";
import "./index.scss";

export default function ProductItem({ product }) {
  const { picture, title, price, free_shipping, location, id } = product;

  return (
    <div className="prod-item__wrapper">
      <a className="prod-item__image" href={`/items/${id}`}>
        <img src={picture.replace("I.jpg", "O.jpg")} alt={title} />
      </a>
      <div className="prod-item__info">
        <div className="prod-item__info__basic">
          <p className="price">{price.amount.toLocaleString("es-AR", { style: "currency", currency: price.currency, minimumFractionDigits: 0 })}</p>
          {free_shipping && <span className="free-ship"></span>}
        </div>
        <a className="prod-item__info__title" href={`/items/${id}`}>
          {title}
        </a>
      </div>
      <div className="prod-item__location">{location ? location : "-"}</div>
    </div>
  );
}
