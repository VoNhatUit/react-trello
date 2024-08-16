import React from 'react'
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { Card, Avatar } from 'antd';
import { EditOutlined, EyeOutlined , DeleteOutlined } from '@ant-design/icons';
import { useAppContext } from '../../../contexts/app-context';
const { Meta } = Card;

function CardItem({ card, index }) {
  const {handleDeleteCard} = useAppContext();
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
              <DeleteOutlined key="delete" style={{ color: '#f00'}}  onClick={()=>{handleDeleteCard(card.id)}}/>,
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
CardItem.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  
}