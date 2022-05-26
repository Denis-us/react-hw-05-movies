import OneActor from "./OneActor"
import s from '../css/Cast.module.css'

export default function Actors ({cast}) {
    return (
        <>
            <ul className={s.actorsList}>
                {cast.map(actor => 
                    <OneActor key={actor.id} profile={actor.profile_path} name={actor.name} character={actor.character}/>
                )}
            </ul>
        </>
    )
}