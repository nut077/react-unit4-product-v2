import React from 'react'
import Product from './Product'

const Products = ({products, onAddToCart}) => (
  <ul className='list-group'>
    <li className='list-group-item active'>Products</li>
    {
      products.map(({id, name, amount, buy}) =>
        <Product
          key={id}
          id={id}
          name={name}
          amount={amount - buy}
          onClick={onAddToCart}
          btnText='Add to Cart'
        />
      )
    }
  </ul>
);

export default Products