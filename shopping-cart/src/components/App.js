import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as RemoveFromCart from '../actions/RemoveFromCart'
import Cart from '../containers/Cart'

import '../stylesheets/App.css'

class App extends Component {
  render() {
    console.log(this.props.actions.dispatch)
    return (
      <Cart  removeItem={this.props.actions.removeFromCart}/>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RemoveFromCart, dispatch)
  }
}

// typically the lines below would be condensed into :
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// returns a wrapper that we need to pass the component into
const connection = connect(mapStateToProps, mapDispatchToProps)

// wraps the Cart component with the store connection configured above
const wrappedComponent = connection(App)

export default wrappedComponent
