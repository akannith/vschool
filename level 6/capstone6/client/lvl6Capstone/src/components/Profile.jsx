import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import ItemForm from './ItemForm';


function Profile(props) {
    const {user, getUserItems,} = useContext(UserContext)
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
        <div>
        
        </div>
        { isUser && (
        <div>
        <h1> {getUserItems} </h1>
        </div>
        )}
        </>
    )
}

export default Profile;