import { todosHashMock } from "../mocks/app-mocks";
function addNewList(todosHash) {
    const newListId = `list${Object.keys(todosHash.lists).length + 1}`;
    
    const newList = {
      id: newListId,
      title: `List ${Object.keys(todosHash.lists).length + 1}`,
      cards: []
    };
    todosHash.lists[newListId] = newList;
    
    todosHash.columns.push(newListId);
    
    return todosHash;
  }
  
export default addNewList;