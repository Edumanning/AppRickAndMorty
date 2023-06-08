import { useRef, useState } from "react"
import './styles/formSearch.css'

function FormSearch({setIdLocation}) {

    const idLocationValue = useRef()

    const[inputIsEmpty, setInputIsEmpty ] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = idLocationValue.current.value.trim()

        if(inputValue === '') {
            setInputIsEmpty(true)
            setTimeout(() => {
                setInputIsEmpty(false)
            }, 3000)
        }   else {
            setIdLocation(inputValue)
        }
    }

    return (
        <>
        <form className="form__submit" onSubmit={handleSubmit}>
            <input className="form__input"
                placeholder="Enter Id location"
                type="text"
                ref={idLocationValue}
            />
            <button className="form__btn">Search</button>
        </form>
        {
            inputIsEmpty && <h3>This field is required 👀</h3>
        }
        </>
    )
}

export default FormSearch
