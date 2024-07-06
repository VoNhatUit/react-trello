import { PlusOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Button } from 'antd'
import CardItem from '../../../components/card-items';
export default function ToDoList(){

    return (
        <div className="todoList">
            <div className="cartList ant-card ant-cart-bordered">
              <div className="ant-cart-head">
                <div className="ant-card-head-wrapper">
                  <div className="ant-card-head-title">List 1</div>
                  <div className="ant-card-extra">

                  <Button shape="circle" type='Primary' icon={<PlusOutlined />} className="ant-btn css-k83k30 ant-btn-circle ant-btn-default ant-btn-icon-only">
                  </Button>

                  <Button shape="circle" type='Primary' icon={<DeleteOutlined />} className="ant-btn css-k83k30 ant-btn-circle ant-btn-default ant-btn-icon-only ml-10">                   
                  </Button>
                  </div>
                </div>
                
              </div>
              <div className="ant-card-body">
                <div className="trelloList_content">
                  <CardItem/>

                </div>
              </div>              
            </div>
          </div>
    )
}