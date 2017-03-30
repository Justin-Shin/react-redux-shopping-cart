// Action Creator function
// This action will be called from a button in the UI
export const removeFromCart = (item, id) => {

  // This console.log is a side effect and technically makes this function 'impure'.
  // It may come in handy when testing to see if we've integrated redux successfully,
  // to determine if our actions are firing

  console.log(`ACTION: removing ${item} from cart`)
  return {
    //actions must have a type property
    type: 'REMOVE_ITEM', //action naming conventions: all caps with snake-case (JAVASCRIPT_CONSTANT naming convention )
    id,
    item //ES6 shorthand again {item: item}
  }
}
