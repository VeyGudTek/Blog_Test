import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Hungry Nicole", body: "Sheep Sheep Sheep Sheep", author: "Elma", id: 1},
        {title: "Siren", body: "La La La La La La", author: "N-Buna", id: 2},
        {title: "ThoughtCrime", body: "I want to eat your words up completely", author: "Yorushika", id: 3},
        {title: "In May", body: "From and Emerald Green Window", author: "Elma", id: 4},
        {title: "August", body: "Moonlight, a Certain Person", author: "Elma", id: 5}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Elma")} title="Elma's Blogs" handleDelete={handleDelete}/>
        </div>
    )
}

export default Home