import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out These Legends!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jfif'
              text='Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia’s magical and martial traditions to drive out Noxian invaders'
              label='Zed'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence'
              label=' Yasuo'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Aatrox was a Shuriman Ascended who set out to fight against the Void. He is described as having had wings that shone like the golden light of dawn and having armor that sparkled like a constellation of hope'
              label='Aatrox'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Soraka gave up her immortal form to protect the mortal races from their own ignorance and violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—guiding the lost, and healing the wounded'
              label='Soraka'
              path='/products'
            />
            <CardItem
              src='images/img-8.png'
              text='Noxian by birth, Shieda Kayn and others like him were conscripted as child soldiers, a cruel practice employed by only the most devious commanders in Boram Darkwill’s empire'
              label='Kayn'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;