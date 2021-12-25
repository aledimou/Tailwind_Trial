import React, { useState } from "react";
import image1 from "../images/egg.jpg";
import image2 from "../images/egg-2.jpg";

const Content = () => {
  const [images, setImages] = useState([
    {
      title: " Egg Muffins",
      para: "Crispy, delicious and nutricious",
      source: image1,
      price: 16,
    },
    {
      title: "Eggs Salad",
      para: "Fresh, delicious and nutricious!",
      source: image2,
      price: 12,
    },
  ]);

  return images.map((img) => {
    const { title, para, source, price } = img;
    return (
      <>
        <div className="menu-card">
          <img
            src={source}
            className="h-full rounded mb-20 shadow"
            alt="Posche"
          />
          <div className="center-content">
            <h2 className="text-2xl mb-2">{title}</h2>
            <p className="mb-2">{para}</p>
            <span>${price}</span>
          </div>
        </div>
      </>
    );
  });
};

export default Content;
