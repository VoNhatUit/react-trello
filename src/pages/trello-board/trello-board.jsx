import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'; 
import CardList from './components/card-list'
import { useAppContext } from '../../contexts/app-context';
import AddListButton from './components/add-list-button';

function Dashboard() {
    const { todos, handleAddList, onDragList, onDragCardSameList, onDragCardDiffereceList } = useAppContext();

  const onDragEnd = (e) => {
    console.log('onDragEnd: ', e)
    const { type, source, destination, draggableId } = e;
    if(!destination) return;

    // drag & drop list
    if(type === 'LIST') {
      onDragList({
        source,
        destination,
      });
      return;
    } 

    // drag & drop card same list
    if(source.droppableId === destination.droppableId) {
      onDragCardSameList({
        source,
        destination,
        draggableId
      })
      return;
    }

    // drag & drop card difference list
    if(source.droppableId !== destination.droppableId) {
      onDragCardDiffereceList({
        source,
        destination,
        draggableId
      })
    }
  }
  return (
    <>
      <header className='flex'>
        <div className="header__container">
          <div className="header__logo" />
          <div className="header__right">
            <div className="header__avatar">
              <img src="src/assets/images/avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>
      <main className='pt-[40px] h-[calc(100vh-15px)] w-full'>
        <div className="flex flex-row items-start h-full mt-2 px-2">
          <DragDropContext
            onDragEnd={onDragEnd}
          >
            <Droppable 
              droppableId="all-lists" 
              direction="horizontal"
              type="LIST"
             >
              {(provided, snapshot) => (

                <div
                  ref={provided.innerRef}
                  // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                  className='listContainer'
                  {...provided.droppableProps}
                >
                  {todos.columns?.map((column, index) => {
                    const listItem = todos.lists[column];
                    const cards = listItem.cards.map(card => todos.cards[card]);
                    return (
                      <CardList 
                        index={index}
                        key={column} 
                        listItem={listItem} 
                        cards={cards} 
                      />
                    )
                  })}
                
                  {provided.placeholder}
                  <AddListButton/>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </main> 
    </>
  )
}

export default Dashboard