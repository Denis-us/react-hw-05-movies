import s from '../css/Button.module.css'

export default function Button ({goBack, children}) {
    return (
        <>
            <button className={s.button} onClick={goBack}>{children}</button>
        </>
        
    )
}