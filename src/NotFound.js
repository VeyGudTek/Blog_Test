import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404</h2>
            <p>Not Found</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NotFound