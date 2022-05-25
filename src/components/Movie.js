import s from '../css/Movie.module.css'

export default function Movie ({poster, title, overview, genres}) {
    return (
        <>
            <div className={s.container}>
                <img className={s.image} src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title}/>
                <div className={s.description}>
                    <h1 className={s.title}>{title}</h1>
                
                    <h2>Overview:</h2>
                    <p>{overview}</p>

                    <h2>Genres:</h2>
                    <ul>
                        {genres && genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                    ))} 
                    </ul>
                </div>
            </div>
        </>
    )
}