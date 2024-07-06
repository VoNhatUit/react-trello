import { Button } from 'antd'
import { DeleteOutlined, FileTextOutlined, EditOutlined  } from '@ant-design/icons';


export default function CardItem(){

    return (
        <div className="card">
                    <div className="ant-card ant-card-bordered cardItem css-k83k30">
                      <div className="ant-card-cover">
                        <img alt="example" src="https://picsum.photos/265/160"/>
                      </div>
                      <div className="ant-card-body">
                        <div className="ant-card-meta">
                          <div className="ant-card-meta-detail">
                            <div className="ant-card-meta-title">card list 1</div>
                            <div className="ant-card-meta-description">
                              <div></div>
                              <div className="ant-avatar-group avatarGroup css-k83k30">
                                <span className="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-image css-k83k30">
                                  <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                </span>
                                <span className="ant-avatar ant-avatar-lg ant-avatar-circle css-k83k30" style={{backgroundColor: 'rgb(245, 106, 0)'}}>
                                  <span className="ant-avatar-string" style={{transform: 'scale(1) translateX(-50%)'}}>K</span>
                                  </span>
                                  <span className="ant-avatar ant-avatar-lg ant-avatar-circle css-k83k30" style={{color: 'rgb(245, 106, 0)', backgroundColor: 'rgb(253, 227, 207)', cursor: 'pointer'}}>
                                    <span className="ant-avatar-string" style={{transform: 'scale(1) translateX(-50%)'}}>+2</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <ul className="ant-card-actions">
                          <li style={{width: '33.3333%'}}>                          
                              <Button type="text" icon={<FileTextOutlined />} className="anticon anticon-file-text">                              
                              </Button>                                    
                          </li>
                          <li style={{width: '33.3333%'}}>                        
                              <Button type="text" icon={<EditOutlined />} className="anticon anticon-edit">
                              </Button>                                   
                          </li>
                          <li style={{width: '33.3333%'}}>
                              <Button type="text" icon={<DeleteOutlined />}  className="anticon anticon-delete ml-10">
                               </Button>
                          </li>
                        </ul>
                      </div>                        
                    </div> 
    )
}