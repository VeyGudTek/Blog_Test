import { useState, useEffect } from "react"
import useFetch from "./useFetch"
import { useNavigate, useParams } from "react-router-dom"

const Update = () => {
    const {id} = useParams()
    const {data: blog, error, isLoading } = useFetch('http://localhost:5189/blogs/' + id)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [isSending, setIsSending] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (blog != null){
            setTitle(blog.title)
            setBody(blog.body)
        }
    }, [blog])

    const handleSubmit = (e) => {
        e.preventDefault()
        const new_blog = {title, body}

        setIsSending(true)

        fetch('http://localhost:5189/blogs/' + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(new_blog)
        }).then((res) => {
            setIsSending(false)
            navigate('/')
        })
    }

    return (
            <div className="create">
                {isLoading && <div>Loading</div>}
                {error && <div> {error} </div>}
                {blog &&
                    <form onSubmit={handleSubmit}>
                    <label>Title: </label>
                    <input
                        type="text"
                        required
                        value = {title}
                        onChange={(e) => {setTitle(e.target.value)}}
                    ></input>
                    <label>Body: </label>
                    <textarea
                        required
                        value = {body}
                        onChange={(e) => {setBody(e.target.value)}}
                    ></textarea>
                    <label>Author: {blog.author}</label>
                    
                    {!isSending && <button>Update Blog</button>}
                    {isSending && <button disabled>Sending</button>}
                </form>
                }
            </div>
            )
}

export default Update