import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import IssuesList from './IssuesList';
import IssueForm from './IssueForm';


function Profile() {

    const {user, getUserIssues, issue } = useContext(UserContext)

    useEffect(() => {
        getUserIssues()
    }, [])
    console.log(issue)
    return ( 
        <>
            <h1>Username: {user.username} </h1>
            <IssueForm />
            <IssuesList issues = {issue} />
        </>
     );
}

export default Profile;