import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as AddToCart from '../actions/AddToCart'
import Shelf from '../components/Shelf'

class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    const CartItems = this.props.cart.map( (item, id) => {
      return (
        <li key={id}>
          {item}
          <button onClick={() => this.props.removeItem(item, id)}>-</button>
        </li>
      )
    })
    return (
      <div>
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Cart</h2>
        <ol>
          {CartItems}
        </ol>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AddToCart, dispatch)
  }
}

// typically the lines below would be condensed into :
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// returns a wrapper that we need to pass the component into
const connection = connect(mapStateToProps, mapDispatchToProps)

// wraps the Cart component with the store connection configured above
const wrappedComponent = connection(Cart)

export default wrappedComponent
