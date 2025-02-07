import React from 'react';

import { useState } from 'react';

const Tour = ({ id, image, info, name, price, setTours }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(readMore);
  const removeTourHandler = () => {
    setTours((initialToursArray) =>
      initialToursArray.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="single-tour">
      <p>{readMore}</p>
      <p className="tour-price">{price}</p>
      <img className="img" src={image} alt={name + 'image'} />
      <div>
        <h5 className="center-content">{name}</h5>
        {readMore && <p className="tour-info">{info}</p>}
        {!readMore && <p className="tour-info-short">{info}</p>}
        <div className="tour-button-container ">
          {!readMore && (
            <button className="info-btn" onClick={() => setReadMore(true)}>
              ReadMore
            </button>
          )}
          {readMore && (
            <button className="info-btn" onClick={() => setReadMore(false)}>
              ReadLess
            </button>
          )}

          <button className="delete-btn" onClick={removeTourHandler}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
