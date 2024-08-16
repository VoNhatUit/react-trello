import React from 'react';
import { useAppContext } from  '../../../contexts/app-context'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const addNewList = (currentTodosHash) => {
    // Generate a new unique list ID
    const newListId = `list${currentTodosHash.columns.length + 1}`;
  
    // Create a new list object
    const newList = {
      id: newListId,
      title: `List ${currentTodosHash.columns.length + 1}`,
      cards: []
    };
  
    // Create a new todosHash object with the updated data
    const updatedTodosHash = {
      ...currentTodosHash,
      columns: [...currentTodosHash.columns, newListId],
      lists: {
        ...currentTodosHash.lists,
        [newListId]: newList
      }
    };
  
    return updatedTodosHash;
  };
const AddListButton = () => {

    const { todos, setTodos, handleAddList } = useAppContext();


  return (
    <>
        <Button type="text" onClick={handleAddList}>
            <PlusOutlined /> Add another list
        </Button>
    </>
    
  );
};
export default AddListButton;