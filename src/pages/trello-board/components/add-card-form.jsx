import { Button, Form, Input, Select, Space, Card, Modal} from 'antd';
import {CloseOutlined } from '@ant-design/icons';
import React from 'react';
import clsx from 'clsx';
import { useAppContext } from '../../../contexts/app-context'



const { TextArea } = Input;


function AddCardForm({ visible, onCancel, listId }){
    const { todos, setTodos} = useAppContext();
    const [form] = Form.useForm();
   
    const onFinish = (values) => {
      
      setTodos(prevState => {
        const newCardId = `card${Object.keys(prevState.cards).length + 1}`;
        const newCard = {
          id: newCardId,
          title: values.title,
          description: values.description,
          author: values.author,
          avatar: 'xxx',
          meta: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
        };
        return {
          ...prevState,
          lists: {
            ...prevState.lists,
            [listId]: {
              ...prevState.lists[listId],
              cards: [...prevState.lists[listId].cards, newCardId]
            }
          },
          cards: {
            ...prevState.cards,
            [newCardId]: newCard
          }
        };
      })
      
      form.resetFields();
      onCancel();
    };
    
   
    
    return (
    //     <Modal
    //     open={visible}
    //     title="Add new card"
    //     okText="Submit"
    //     onCancel={onCancel}
    //     onOk={() => {
    //       form
    //         .validateFields()
    //         .then((values) => {
    //           form.resetFields();
    //           onFinish(values);
    //         })
    //         .catch((info) => {
    //           console.log("Submit Failed:", info);
    //         });
    //     }}
    //     style={{
    //         maxWidth: '500px',
    //         width: '70%',
    //         marginLeft: '30%',
            
    //       }}
    //   >
    //   <Form
    //     {...layout}
    //     initialValues={{ remember: true }}
    //     form={form}
    //     name="control-hooks"
                  
    //   >
        
    //     <Form.Item
    //       name="title"
    //       label="Title"
          
    //       rules={[
    //         {
    //           required: true,
    //         },
    //       ]}
    //     >
    //       <Input/>
    //     </Form.Item>

    //     <Form.Item
    //       name="author"
    //       label="Author"
    //       rules={[
    //         {
    //           required: true,
    //         },
    //       ]}
    //     >
    //       <Input/>
    //     </Form.Item>

  
    //     <Form.Item
    //       name="description"
    //       label="Description"
    //       rules={[
    //         {
    //           required: true,
    //         },
    //       ]}
    //     >
    //       <TextArea  autoSize={{
    //         minRows: 5,
    //         maxRows: 7,
    //     }} />
    //     </Form.Item>

      
    //   </Form>
    // </Modal>
    <Modal
    open={visible}
    title="Add a New Card"
    onCancel={onCancel}
    footer={null}
  >
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="title" rules={[{ required: true, message: 'Please input the title!' }]}>
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item name="description" rules={[{ required: true, message: 'Please input the description!' }]}>
        <Input.TextArea placeholder="Description" />
      </Form.Item>
      <Form.Item name="author" rules={[{ required: true, message: 'Please input the author!' }]}>
        <Input placeholder="Author" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Card
        </Button>
      </Form.Item>
    </Form>
  </Modal>
    );
}

export default AddCardForm;


  
