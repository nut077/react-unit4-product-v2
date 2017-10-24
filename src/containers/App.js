import React from 'react'
import {
  compose,
  withState,
  withHandlers,
  setPropTypes
} from 'recompose'
import PropTypes from 'prop-types'
import {Products, Cart} from '../components'

const App = ({
    products,
    getAvaliableProducts,
    increseBuy,
    getProductsInCart,
    reduceBuy
  }) => (
  <div className='container'>
    <Products
      products={getAvaliableProducts(products)}
      onAddToCart={increseBuy}
    />
    <Cart
      products={getProductsInCart(products)}
      onRemove={reduceBuy}
    />
  </div>
);

function changeBuy(products, setProducts, id, amount) {
  const index = products.findIndex(product => product.id === id);
  const product = products[index];
  setProducts(
    [
      ...products.slice(0, index),
      {...product, buy: product.buy + amount},
      ...products.slice(index + 1)
    ]
  )
}

export default compose(
  setPropTypes({
    changeBuy: PropTypes.func
  }),
  withState('products', 'setProducts', [
    {id: 1, name: 'Product#1', amount: 10, buy: 0},
    {id: 2, name: 'Product#2', amount: 9, buy: 0},
    {id: 3, name: 'Product#3', amount: 8, buy: 0},
    {id: 4, name: 'Product#4', amount: 7, buy: 0},
    {id: 5, name: 'Product#5', amount: 6, buy: 0},
  ]),
  withHandlers({
    getAvaliableProducts: () => (products) => (
      products.filter(({amount, buy}) => amount !== buy)
    ),
    increseBuy: ({products, setProducts}) => id => {
      changeBuy(products, setProducts, id, 1)
    },
    getProductsInCart: () => (products) => (
      products.filter(({buy}) => buy > 0)
    ),
    reduceBuy: ({products, setProducts}) => id => {
      changeBuy(products, setProducts, id, -1)
    }
  })
)(App);
