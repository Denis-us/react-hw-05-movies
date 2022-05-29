import { useState, useEffect} from "react"
import {Link, useSearchParams } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import fetch from "../services/api"
import Form from '../components/Form'


export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [queryParam, setQueryParam] = useSearchParams({});

    const PARAM_QUERY = 'query';

    const location = useLocation()
    const {pathname} = location



    useEffect(() => {
        const query = queryParam.get(PARAM_QUERY);
    
        if (query) handleSearch(query);
      }, []);

      const handleSearch = (query) => {
        setQueryParam({ [PARAM_QUERY]: query });

        fetch.searchMovie(query).then(res =>
            setMovies(res.data.results))
      }

    return (
        <>
            <Form onSubmit={handleSearch}/>

            {movies && 
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${pathname}/${movie.id}`} state={{from: location}}>
                                {movie.original_title}
                            </Link>
                        </li>))}
                </ul>
            }
        </>
    )
    }