import React from 'react';

function Card(props) {
  return (
    <div className="card shadow-lg" style={{ width: "22rem" }}>
      <img src={props.imageSrc} className="card-img-top" alt={props.imageAlt} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link}>read more</a>
      </div>
      <div className="card-footer text-body-secondary">
        {props.footerText}
      </div>
    </div>
  );
}

export default Card;
