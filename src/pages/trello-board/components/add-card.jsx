import { Button, Form, Input, Select, Space, Card, Modal} from 'antd';
import {CloseOutlined } from '@ant-design/icons';
import React from 'react';
import clsx from 'clsx';
import { useAppContext } from '../../../contexts/app-context'



const { TextArea } = Input;

const { Option } = Select;
const layout = {
  
  wrapperCol: {
    offset: 2,
    span: 20,
  },
};

function AddCard({ visible, onCancel }){
    const { todos, setTodos} = useAppContext();
    const [form] = Form.useForm();
   
    const onFinish = (values) => {
      setTodos(prevState => {
        return {
          ...prevState,
          lists: {
            ...prevState.lists,
            cards : {
              ...prevState.cards,
              values
            }

          }
        }})
    };
    const onReset = () => {
        form.resetFields();
    };
   
    
    return (
        <Modal
        open={visible}
        title="Add new card"
        okText="Submit"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onFinish(values);
            })
            .catch((info) => {
              console.log("Submit Failed:", info);
            });
        }}
        style={{
            maxWidth: '500px',
            width: '70%',
            marginLeft: '30%',
            
          }}
      >
      <Form
        {...layout}
        initialValues={{ remember: true }}
        form={form}
        name="control-hooks"
                  
      >
        
        <Form.Item
          name="title"
          label="Title"
          
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input/>
        </Form.Item>
  
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea  autoSize={{
            minRows: 5,
            maxRows: 7,
        }} />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select style={{width:'120px'}}
            placeholder="Select status"
            allowClear
          >
            <Option value="new">New</Option>
            <Option value="inProcess">In process</Option>
            <Option value="done">Done</Option>
          </Select>
        </Form.Item>
        
      </Form>
    </Modal>
    );
}

export default AddCard;


  
