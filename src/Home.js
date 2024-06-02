import { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('Elma')
    const [counter, setCounter] = useState(1)

    const handleClick = (e) => {
        setName('Amy')
        setCounter(counter + 1)
        console.log('Wow')
        console.log(e)
    }

    const handleCLickAgain = (name, e) => {
        console.log(name)
        console.log(e.target)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>

            <p>{name} - {counter}</p>
            <button onClick={handleClick}>Click Event</button>
            <button onClick={(e)=>{handleCLickAgain('Elma', e)}}>Click Event with Arguments</button>
        </div>
    )
}

export default Home