import React from 'react';
import CartItem from '../cartItem/CartItem';
import { CartItemType } from '../utils/types';
import { Wrapper } from './Cart.styles';

type Props = {
	cartItems: CartItemType[];
	addToCart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

	return (
		<Wrapper>
			<h2>Your shopping cart</h2>
			{cartItems.length === 0 ? <p>No items in cart.</p> : null}
			{cartItems.map(item => (
				<CartItem />
			))}
		</Wrapper>
	)
}

export default Cart;