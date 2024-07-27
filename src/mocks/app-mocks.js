
export const todosHashMock = {
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