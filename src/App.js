import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Posts from './components/Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currectPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fecthPosts = async () => {
      setLoading(true);
      const res = await axios.get('xxx.com');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  // Ambil post sekarang
  const indexOfLastPost = currectPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currectPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currectPosts} loading={loading} />
    </div>
  );
}

export default App;
