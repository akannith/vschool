import { useContext } from 'react'
import UserReview from './UserReview'
import { UserContext } from '../context/UserProvider'

export default function UserReviewList({itemId}) {
    const {reviewState} = useContext (UserContext)
    const filteredReviews = reviewState.filter(userReview => userReview.itemId === itemId)
    const userReviewElements = filteredReviews.map( userReview => {
        return (
            <UserReview {...userReview} key ={userReview._id} />
        )
    })

    return (
        <div>
            {userReviewElements}
        </div>
    )
}