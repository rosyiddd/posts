import { useRef } from 'react'
import "./input.css"

export default function Input({ handleSearch }) {
    const searchRef = useRef()
    const handleClick = () => {
        console.log(searchRef.current.value)
        handleSearch(searchRef.current.value)
    }
    return (
        <div className='input'>
            <input type="text" className="search" ref={searchRef} />
            <button className='btnSearch' onClick={handleClick}>Search</button>
        </div>
    )
}
