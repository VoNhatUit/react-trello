import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Card } from 'antd';

// components
import CartTitle from './card-title';
import CardExtra from './card-extra';
import CardItem from './card-item';

function CardList({ listItem, cards, index }) {
  return (
    <Draggable draggableId={listItem.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='card-list-container'
        >
          <Droppable droppableId={listItem.id.toString()} type="CARD">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                className='card-list-box'

                {...provided.droppableProps}
              >
                <Card 
                  title={<CartTitle title={listItem.title} />} 
                  extra={<CardExtra />} 
                >
                  {cards.map((card, index) => {
                    return (
                      <CardItem 
                        key={card.id} 
                        card={card}
                        index={index}
                      />
                    )
                  })}
                </Card>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
         
        </div>
      )}
    </Draggable>
   
  )
}

export default CardList