const Home = () => {
    const handleClick = (e) => {
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

            <button onClick={handleClick}>Click Event</button>
            <button onClick={(e)=>{handleCLickAgain('Elma', e)}}>Click Event with Arguments</button>
        </div>
    )
}

export default Home