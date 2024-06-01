import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Tutorial Blog'
  const likes = 50
  const link = "https://www.youtube.com/"

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <p>{ Math.random(10) * 10 }</p>

        <a href={link}>youtube link</a>
      </div>
    </div>
  );
}

export default App;
