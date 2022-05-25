import { useState } from "react"
import Button from '../components/Button'
import s from '../css/Form.module.css'



export default function Form({onSubmit}) {
    const [query, setQuery] = useState([])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(query)
        setQuery('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        className={s.input}
                        value={query}
                        onChange={handleChange}
                    />
                    <Button type="submit">Search</Button>
                </label>
            </form>
        </>
    )
    }