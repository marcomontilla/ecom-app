import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;

// &:hover {
//   cursor: pointer;

//   & .background-image {
//     transform: scale(1.1);
//     transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//   }

//   & .content {
//     opacity: 0.9;
//   }
// }