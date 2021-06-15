import React from 'react';
import { CartItemType } from '../utils/types';
import { Button } from '@material-ui/core';
import { Wrapper } from './Item.styles';

type Props = {
	item: CartItemType;
	handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
	<Wrapper>

	</Wrapper>
)