import { useState, useEffect } from "react"
import { useParams, useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import fetch from "../services/api";
import Button from '../components/Button'
import Movie from '../components/Movie'
import s from '../css/MovieDetailsPage.module.css'


export default function MovieDetailsPage() {
    const navigate = useNavigate()
    const {movieId} = useParams()
    // const location = useLocation()
    const {state} = useLocation()

    const [from, setFrom] = useState(null)
    const [movie, setMovie] = useState([])

     

    useEffect(() => {
        if (state?.from) {
            const {pathname, search} = state.from
            setFrom(`${pathname}${search}`)
            return
        } else {
            setFrom('/')
        }
    }, [state?.from])

    const goBack = () => navigate(from)  


    useEffect(() => {
        fetch.movieDetails(movieId).then(res => res.data).then(({id, poster_path, original_title, overview, genres}) =>  
            setMovie({id, poster_path, original_title, overview, genres}))    
            }, [movieId])

    const { poster_path, original_title, overview, genres} = movie

    return (
        <>
            <Button goBack={goBack}>Go Back</Button>
            <Movie poster={poster_path} title={original_title} overview={overview} genres={genres}/>

            <div>
                <h2 className={s.addInfoHeader}>Additional information</h2>
                <ul className={s.addInfo}>
                    <Link to={`/movies/${movieId}/cast`} className={s.infoLink}>
                        Cast
                    </Link>
                    <Link to={`/movies/${movieId}/reviews`} className={s.infoLink}>
                        Reviews
                    </Link>
                </ul>  
            </div>
            
            <Outlet/>
        </>
        
    )
}