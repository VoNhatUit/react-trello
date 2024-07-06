
import CardList from './components/card-list';

import { todosHashMock } from './mocks/app-mocks'

function App() {
  console.log('todosHashMock: ', todosHashMock)
  return (
   <>
      <header className='flex'>
        <div className="header__container">
          <div className="header__logo" />
          <div className="header__right">
            <div className="header__avatar">
              <img src="/assets/images/avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>
      <main className='pt-[40px] h-[calc(100vh-15px)] w-full'>
        <div className="flex flex-row items-start h-full mt-2 px-2">
          {todosHashMock.columns.map(column => {
            const listItem = todosHashMock.lists[column];
            console.log(listItem)

            return (
              <CardList key={column} listItem={listItem} />
            )
          })}
         
        </div>
      </main> 
    </>
  )
}

export default App
