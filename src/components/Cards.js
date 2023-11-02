import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Let's FORECAST for today!!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Predict Landslide Prone Region'
              label='OUTLINE'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Is it Gloomy today? '
              label='RAINFALL'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
