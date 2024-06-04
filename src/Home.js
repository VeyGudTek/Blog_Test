import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then((res) => {
            if (!res.ok) {
                throw Error("Data does not exist")
            }
            return res.json()
        })
        .then((data) => {
            setBlogs(data)
            setIsLoading(false)
            setError(null)
        })
        .catch((e) => {
            setError(e.message)
            setIsLoading(false)
        })
    }, [])

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    )
}

export default Home