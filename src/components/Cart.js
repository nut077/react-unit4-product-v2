import React from 'react'
import Product from './Product';

const Cart = ({products, onRemove}) => (
  <ul className='list-group'>
    <li className='list-group-item active'>Cart</li>
    {
      products.map(({id, name, buy}) =>
        <Product
          key={id}
          id={id}
          name={name}
          amount={buy}
          onClick={onRemove}
          btnText='Remove'
        />
      )
    }
  </ul>
);

export default Cart