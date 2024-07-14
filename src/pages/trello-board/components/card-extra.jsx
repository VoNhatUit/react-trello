import React from 'react'
import { Button, Tooltip} from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import AddCard from './add-card';
import { useAppContext } from  '../../../contexts/app-context'

function CardExtra(listId) {
  const [visible, setVisible] = React.useState(false);
  const { deleteList} = useAppContext();
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Tooltip title="Add a card" className='mr-2'>
        <Button type='link' shape="circle" icon={<PlusOutlined />} onClick={showModal}/>
      </Tooltip>

      <Tooltip title="Delete this list">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={()=>{deleteList(listId)}}/>
      </Tooltip>
      <AddCard visible={visible} onCancel={handleCancel}/>
    </div>
  )
}

export default CardExtra