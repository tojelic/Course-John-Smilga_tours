import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, setTours, setRefatch }) => {
  return (
    <>
      <section className="tours">
        {tours.map((item) => {
          return (
            <Tour
              key={item.id}
              {...item}
              setTours={setTours}
              setRefatch={setRefatch}
            ></Tour>
          );
        })}
      </section>
      <div className="tour-button-container">
        <button
          className="btn big-text"
          onClick={() => setRefatch((item) => !item)}
        >
          Refatch
        </button>
      </div>
    </>
  );
};

export default Tours;
