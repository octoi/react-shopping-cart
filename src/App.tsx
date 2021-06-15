import { useState } from 'react';
import { useQuery } from 'react-query';
// Utils
import { productsUrl } from './utils/constants';
import { CartItemType } from './utils/types';
// Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper } from './App.styles';

const getProducts = async (): Promise<CartItemType> => {
    return await (await fetch(productsUrl)).json();
}

export default function App() {
    return (
        <div className="App">

        </div>
    );
}