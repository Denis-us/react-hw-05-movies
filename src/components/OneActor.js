import defaultPoster from '../images/no_poster.jpg'
import s from '../css/Cast.module.css'

export default function OneActor ({profile, name, character}) {
    return (
        <li className={s.listElement}>
                            
            <img className={s.image} src={profile ? `https://themoviedb.org/t/p/w200/${profile}` : defaultPoster} alt={name}/>
            <div className={s.description}>
                <h1 className={s.name}>{name}</h1>
                <p>{character}</p>
            </div> 
        </li>
    )
}