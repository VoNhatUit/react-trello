import ToDoList from "./components/todo-list";
import { Button } from 'antd'

export default function Dashboard(){

    return (
        <div className="container">
        <div className="listContainer">

          <ToDoList/>

          <ToDoList/>
          
          <Button shape="text" className='ant-btn'> Add another list</Button>
        </div>
      </div>
    )
}