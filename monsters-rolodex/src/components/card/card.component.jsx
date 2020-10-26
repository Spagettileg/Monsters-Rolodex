import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
      <h1> {props.monster.address.street} </h1>
    </div>
);
