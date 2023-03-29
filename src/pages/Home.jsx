import Posts from '../component/posts/Posts'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Input from '../component/input/Input'

export default function Home() {
    const [posts, setPosts] = useState([])
    const [value, setValue] = useState("")

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("http://localhost:3004/posts")
            setPosts(res.data)
            setValue("")
            console.info(res)
        }
        fetchPost()
    }, [])

    const handleSearch = (search) => {
        axios.get(`http://localhost:3004/posts?q=${search || value}`)
            .then(res => {
                setPosts(res.data)
                setValue(search)
                console.info(res.data)
            })
    }

    return (
        <>
            <Input handleSearch={handleSearch} />
            <Posts posts={posts} />
        </>
    )
}
