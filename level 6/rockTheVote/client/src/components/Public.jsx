import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import IssuesList from './IssuesList';


function Public() {

    const {issueState , getAllIssues, getAllComments } = useContext(UserContext)
    

    useEffect(() => {
        getAllIssues(),
        getAllComments()
    }, [])
    return ( 
        <>
        <IssuesList issues = {issueState} />
        
        </>
     );
}

export default Public;