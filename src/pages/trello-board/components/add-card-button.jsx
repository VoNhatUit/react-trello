import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';
import { PlusOutlined, } from '@ant-design/icons'

import AddCardForm from './add-card-form';

const AddCardButton = ({ listId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <Tooltip title="Add a card" className='mr-2'>
        <Button shape="circle" icon={<PlusOutlined />} onClick={showModal}/>
        <AddCardForm
            visible={isModalVisible}
            onCancel={handleCancel}
            listId={listId}
         />
    </Tooltip>
      
    </>
  );
};

export default AddCardButton;