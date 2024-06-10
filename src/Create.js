import { useState } from "react"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Elma")

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
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
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create