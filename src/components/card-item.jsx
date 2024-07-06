import React from 'react'
import { Card, Avatar } from 'antd';
import { EditOutlined, EyeOutlined , DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

function CardItem() {
  return (
    <Card
      className='cardItem'
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <EyeOutlined key="view" />,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" style={{ color: '#f00'}} />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  )
}

export default CardItem 