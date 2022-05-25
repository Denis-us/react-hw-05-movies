import {useEffect, useState} from 'react'
import TrendingMovies from '../components/TrendingMovies';

import fetch from "../services/api";

export default function HomePage() {

const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch.trendingMovies().then(res => {
                setMovies(res.data.results)
            })
    }, [])

    return(
        <TrendingMovies movies={movies}/>
    )
}