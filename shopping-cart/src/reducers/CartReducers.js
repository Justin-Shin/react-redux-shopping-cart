export default(state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state, action.item]
    case 'REMOVE_ITEM':
      console.log(action)
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    default:
      return state
  }
}
