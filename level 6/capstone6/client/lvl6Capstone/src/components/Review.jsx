import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import ItemList from './ItemList';

function Review() {

    const {itemState, getItems, getAllReviews} = useContext (UserContext)

    useEffect (() => {
        getItems(),
        getAllReviews()
    }, [])

    return(
        <>
            <ItemList items = {itemState} />
        </>
    )
}

export default Review;