import Header from './component/Header';
import './App.css';
import { useEffect, useState } from 'react';
import Post from './component/Post';
import Loading from './component/Loading';

function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='container'>
        {
          (posts) ? (
            posts.map(post => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <Loading />
          )
        }
      </div>
    </div>
  );
}

export default App;
