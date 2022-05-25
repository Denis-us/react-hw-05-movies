import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import fetch from '../services/api'

export default function Reviews() {

    const {movieId} = useParams()

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch.review(movieId).then(data => {
            setReview(data.data.results)})
        
        }, [movieId])

    return (
        <>
            <ul>
                {review ? review.map(post => 
                <li key={post.id}>
                    <h3>Author: {post.author}</h3>
                    <p>{post.content}</p>
                </li>) : <h3>We don't have any rewievs for this movie</h3>}
            </ul>
        </>
    )
}