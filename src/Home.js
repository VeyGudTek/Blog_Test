import { useState } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Hungry Nicole", body: "Sheep Sheep Sheep Sheep", author: "Elma", id: 1},
        {title: "Siren", body: "La La La La La La", author: "N-Buna", id: 2},
        {title: "ThoughtCrime", body: "I want to eat your words up completely", author: "Yorushika", id: 3}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Home