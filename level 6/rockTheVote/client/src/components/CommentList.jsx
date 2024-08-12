import { useContext } from 'react'
import Comment from './Comment'
import { UserContext } from '../context/UserProvider'

export default function CommentList({issueId}) {
   const {commentState} = useContext (UserContext)
    const filteredComments = commentState.filter(comment => comment.issueId === issueId)
    const commentElements = filteredComments.map( comment => {
        return (
            <Comment {...comment} key ={comment._id}/>
        )
    })

    return(
        <div>
            {commentElements}
        </div>
    )
}