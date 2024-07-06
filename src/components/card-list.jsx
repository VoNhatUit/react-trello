import React from 'react'
import { Card } from 'antd';

// components
import CartTitle from './card-title';
import CardExtra from './card-extra';
import CardItem from './card-item';

function CardList({ listItem }) {
  return (
    <Card title={<CartTitle title={listItem.title} />} extra={<CardExtra />} className='cardList'>
      {listItem.cards.map(card => {
        return (
          <CardItem key={card} />
        )
      })}
    </Card>
  )
}

export default CardList