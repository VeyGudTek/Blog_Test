import { useNavigate, useParams, Route, Routes } from "react-router-dom"
import Nested from './Nested'
import useFetch from "./useFetch"

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
                )}

            <Routes>
                <Route path="/nested" element={<Nested />} />
            </Routes>
        </div>
    )
}

export default BlogDetails