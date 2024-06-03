import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Hungry Nicole", body: "Sheep Sheep Sheep Sheep", author: "Elma", id: 1},
        {title: "Siren", body: "La La La La La La", author: "N-Buna", id: 2},
        {title: "ThoughtCrime", body: "I want to eat your words up completely", author: "Yorushika", id: 3}
    ])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
    )
}

export default Home