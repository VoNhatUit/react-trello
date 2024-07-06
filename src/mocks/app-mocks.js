export const todosArrayMocks = [
  {
    id: 'list1',
    title: 'List 1',
    cards: [
      {
        id: 'card1',
        title: 'card 1',
        description: 'javascript',
        author: 'tony',
        avatar: 'xxx',
        meta: 'xx'
      },
      {
        id: 'card1',
        title: 'card 1',
        description: 'javascript',
        author: 'tony',
        avatar: 'xxx',
        meta: 'xx'
      }
    ]
  },
  {
    id: 'list2',
    title: 'List 2',
    cards: [
      {
        id: 'card1',
        title: 'card 1',
        description: 'javascript',
        author: 'tony',
        avatar: 'xxx',
        meta: 'xx'
      },
      {
        id: 'card1',
        title: 'card 1',
        description: 'javascript',
        author: 'tony',
        avatar: 'xxx',
        meta: 'xx'
      }
    ]
  }
]

export const todosHashMock = {
  columns: ['list1', 'list2'],  // render list item UI
  lists: {
    list1: {
      id: 'list1',
      title: 'List 1',
      cards: ['card1-1', 'card1-2']
    },
    list2: {
      id: 'list2',
      title: 'List 2',
      cards: ['card2-1']
    }
  },
  cards: {
    "card1-1":  {
      id: 'card1-1',
      title: 'card1-1',
      description: 'javascript',
      author: 'tony',
      avatar: 'xxx',
      meta: ''
    },
    "card1-2":  {
      id: 'card1-2',
      title: 'card1-2',
      description: 'angular',
      author: 'tony',
      avatar: 'xxx',
      meta: 'xx'
    },
    "card2-1":  {
      id: 'card12-1',
      title: 'card2-1',
      description: 'vue',
      author: 'tony',
      avatar: 'xxx',
      meta: 'xx'
    },
  }
}

/* 
scenario 1: add card in list
- clone todosMocks
- loop list -> find index of list
- add card into index list

scenario 2: delete list
- clone todosMocks
- loop list -> find index of list

scenario 3: delete card of list
- clone todosMocks
- loop list -> find index of list
- loop card -> find index of card -> delete card -> return new cards
- add new cards into list

*/