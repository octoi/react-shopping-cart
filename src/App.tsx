import { useState } from 'react';
import { useQuery } from 'react-query';
// Utils
import { productsUrl } from './utils/constants';
import { CartItemType } from './utils/types';
// Components
import Item from './item/Item';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper } from './App.styles';

const getProducts = async (): Promise<CartItemType[]> => await (await fetch(productsUrl)).json();

export default function App() {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

    const getTotalItmes = () => null;

    const handleAddToCart = (ClickedItem: CartItemType) => null;

    const handleRemoveFromCart = () => null;

    if (isLoading) return <LinearProgress />
    if (error) return <div>something went wrong</div>

    return (
        <Wrapper>
            <Grid container spacing={3}>
                {data?.map(item => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <Item item={item} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
}