import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { Card, Avatar } from 'antd';
import { EditOutlined, EyeOutlined , DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

function CardItem({ card, index }) {
  return (
    <Draggable draggableId={card.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            className='cardItem'
            cover={
              <img
                alt="example"
                src={card.meta}
              />
            }
            actions={[
              <EyeOutlined key="view" />,
              <EditOutlined key="edit" />,
              <DeleteOutlined key="delete" style={{ color: '#f00'}} />,
            ]}
          >
            <Meta
              avatar={<Avatar src={card.avatar} />}
              title={card.title}
              description={card.description}
            />
          </Card>
        </div>
      )}
    </Draggable>
    
  )
}

export default CardItem 