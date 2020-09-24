import React from "react";

export default function Breadcrumb({ items }) {
  return (
    <ul className="app__breadcrumb">
      {items.map((bcItem, index) => (
        <li className="app__breadcrumb__item" key={index}>
          {bcItem.url ? <a href={bcItem.url}>{bcItem.text}</a> : bcItem.text}
        </li>
      ))}
    </ul>
  );
}
