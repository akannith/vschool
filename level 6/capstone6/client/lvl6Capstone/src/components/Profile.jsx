import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import ItemForm from './ItemForm';
import ItemList from './ItemList';


function Profile(props) {
    const {user, item, getUserItems,} = useContext(UserContext)
    const {userId} = props


    console.log("userId: ", userId)
    console.log("user._id: ", user._id)

    let isUser = userId === user._id


    useEffect (() => {
        getUserItems()
     }, [])
        
    return(
        <>
        <h1>User: {user.username} </h1>
        <ItemForm />
        <ItemList items= {item} />
        { isUser && (
        <div>
       
        </div>
        )}
        </>
    )
}

export default Profile;