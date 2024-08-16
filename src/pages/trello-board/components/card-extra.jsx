import React from 'react'
import PropTypes from 'prop-types';

import { Button, Tooltip} from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import AddCardForm from './add-card-form';
import { useAppContext } from  '../../../contexts/app-context'
import AddCardButton from './add-card-button';
function CardExtra({ listId }) {
  const [visible, setVisible] = React.useState(false);
  const { handleAddCard, handleDeleteList, } = useAppContext();
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  
  return (
    <div>
      <Tooltip title="Add a card" className='mr-2'>
        {/* <Button type='link' shape="circle" icon={<PlusOutlined />} onClick=''/> */}
        <AddCardButton listId={listId} />
      </Tooltip>

      <Tooltip title="Delete this list">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={()=>{handleDeleteList(listId)}}/>
      </Tooltip>
      <AddCardForm visible={visible} onCancel={handleCancel}/>
    </div>
  )
}

export default CardExtra
CardExtra.propTypes = {
 listId: PropTypes.string,
  
}