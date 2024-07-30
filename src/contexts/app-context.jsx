import React from 'react';
import { todosHashMock } from '../mocks/app-mocks';
import { usersMocks } from '../mocks/user-mock';
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = React.useState(usersMocks);
  const [todos, setTodos] = React.useState(todosHashMock);

  const isLogin = (username, password) => {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        setUsers(user);
        return true;
      }
      return false;
  }

  const registerUser = (username, email, password,) => {
    const newUser = {
      id: usersMocks.length + 1,
      username,
      password,
      email,
      
    };
    users.push(newUser);
    usersMocks.push(newUser);
    return true;
    
  }

  const handleAddList = () => {
    console.log(todos);
  };
  
  const handleDeleteList = (listId) => {
    // setTodos(prevState => ({
    //   ...prevState
    // }))
    setTodos(prevState => {
      const newColumns = [...prevState.columns];
      const newLists = {...prevState.lists};
      const listIndex = newColumns.findIndex(list => list === listId);
      newColumns.splice(listIndex, 1);
      delete newLists[listId];
      return {
        ...prevState,
        columns: newColumns,
        lists: newLists
      }
    })
  };

  function deleteCard(listId, cardId){
    console.log('delete Card');
    setTodos(prevState => {
      const clonedLists = [...prevState.lists];
    })
  }
  // TODO: nothing if destination is null

  // TODO: drag & drop list
  function onDragList({ source, destination }) {
    setTodos(prevState => {
      const clonedColumns = [...prevState.columns];
      const listDragged = clonedColumns.splice(source.index, 1)[0];
      clonedColumns.splice(destination.index, 0, listDragged);
      return {
        ...prevState,
        columns: clonedColumns
      }
    })
  }
  // TODO: drag & drop card in same list
  function onDragCardSameList({ source, destination, draggableId }) {
    const droppableId = source.droppableId; // list1
    const sourceList = todos.lists[droppableId];  // todos.lists['list1']
    const cards = sourceList.cards;
    cards.splice(source.index, 1);
    cards.splice(destination.index, 0, draggableId);

    setTodos(prevState => {
      return {
        ...prevState,
        lists: {
          ...prevState.lists,
          [droppableId]: {
            ...prevState.lists[droppableId],
            cards
          }
        }
      }
    })
  }

  // TODO: drag & drop card in difference list
  function onDragCardDiffereceList({ source, destination, draggableId}) {
    const droppableIdSource = source.droppableId; // list1
    const droppableIdDestination = destination.droppableId; // list1

    const sourceCards = todos.lists[droppableIdSource].cards;
    sourceCards.splice(source.index, 1);

    const destinationCards = todos.lists[droppableIdDestination].cards;
    destinationCards.splice(destination.index, 0, draggableId)

    setTodos(prevState => {
      return {
        ...prevState,
        lists: {
          ...prevState.lists,
          [droppableIdSource]: {
            ...prevState.lists[droppableIdSource],
            cards: sourceCards
          },
          [droppableIdDestination]: {
            ...prevState.lists[droppableIdDestination],
            cards: destinationCards
          },
        }
      }
    })
  }

  return (
    <AppContext.Provider
      value={{
        todos, users,
        // actions
        onDragList,
        onDragCardSameList,
        onDragCardDiffereceList,
        handleDeleteList,
        deleteCard,
        handleAddList,
        isLogin,
        registerUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )

};

export const useAppContext = () => React.useContext(AppContext);
