import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Elma")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        setIsLoading(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then((res) => {
            setIsLoading(false)
            navigate('/')
        })
    }

    return (
        <div className="create">
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
                    onChange={(e) => {setBody(e.target.value)}}
                ></textarea>
                <label>Author: </label>
                <select
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Elma">Elma</option>
                    <option value="Amy">Amy</option>
                    <option value="Meru">Meru</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Sending</button>}
            </form>
        </div>
    )
}

export default Create