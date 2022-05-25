import { useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import fetch from "../services/api"
import Form from '../components/Form'


export default function MoviesPage() {
    const [title, setTitle] = useState('')
    const [movies, setMovies] = useState([])

    const location = useLocation()
    const {pathname} = location

    useEffect(() => {
        fetch.searchMovie(title).then(res =>
            setMovies(res.data.results))
        
    }, [title])

    const handleFormSubmit = (title) => {
        setTitle(title)
    }

    return (
        <>
            <Form onSubmit={handleFormSubmit}/>

            {movies && 
                <ul>
                    {movies.map(movie => (
                        <li>
                            <Link to={`${pathname}/${movie.id}`}>{movie.original_title}</Link>
                        </li>))}
                </ul>
            }
        </>
    )
    }