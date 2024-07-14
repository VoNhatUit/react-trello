import React from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = React.useState({
    columns: ['list1', 'list2', 'list3'],  // render list item UI
    lists: {
      list1: {
        id: 'list1',
        title: 'List 1',
        cards: ['card1-1', 'card1-2', 'card1-3', 'card1-4']
      },
      list2: {
        id: 'list2',
        title: 'List 2',
        cards: ['card2-1']
      },
      list3: {
        id: 'list3',
        title: 'List 3',
        cards: []
      }
    },
    cards: {
      "card1-1":  {
        id: 'card1-1',
        title: 'card1-1',
        description: 'javascript',
        author: 'tony',
        avatar: 'xxx',
        meta: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
      },
      "card1-2":  {
        id: 'card1-2',
        title: 'card1-2',
        description: 'angular',
        author: 'tony',
        avatar: 'xxx',
        meta: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
      },
      "card1-3":  {
        id: 'card1-3',
        title: 'card1-3',
        description: 'javascript',
        author: 'tony',
        avatar: 'xxx',
        meta: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
      },
      "card1-4":  {
        id: 'card1-4',
        title: 'card1-4',
        description: 'angular',
        author: 'tony',
        avatar: 'xxx',
        meta: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
      },
      "card2-1":  {
        id: 'card12-1',
        title: 'card2-1',
        description: 'vue',
        author: 'tony',
        avatar: 'xxx',
        meta: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
      },
    }
  });
  const handleSubmit = (data) =>{
    const { id, title, cards} = data;
    const newLists = {
      id,
      title,
      cards,
    }
    setTodos(prevState => [...prevState, 
                            
    ])
    return {
      
    }
  }
  function deleteList(listId) {
    console.log('delete ListCard');
    const newLists = {...todos.lists };
    delete newLists[listId];
    const newColumns = todos.columns.filter((column) => column!== listId);
    setTodos(prevState => {
      
    
      // const clonedColumnsIndex = clonedColumns.findIndex(list => list.id === listId);
      // if(clonedColumnsIndex === -1) return prevState;

      // clonedColumns.splice(clonedColumnsIndex, 1); // remove an item in array
      return {
        ...prevState, 
        lists: {
          ...prevState.lists,
          newLists

        },      
        columns: {
          ...prevState.columns,
          newColumns 
      }

    }
  })
  }
  console.log('todos: ', todos)

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
        todos,
        // actions
        onDragList,
        onDragCardSameList,
        onDragCardDiffereceList,
        deleteList,
        deleteCard,
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => React.useContext(AppContext);