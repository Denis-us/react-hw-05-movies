import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import fetch from "../services/api";
import Actors from '../components/Actors'



export default function Cast() {
    const {movieId} = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        fetch.actors(movieId).then(data => {
            setCast(data.data.cast)})
        }, [movieId])

    return (
        <>
            <Actors cast={cast}/>
        </> 
    )
}