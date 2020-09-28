import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Posts from './components/Posts';
import Pagination from './components/Pagination';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currectPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fecthPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fecthPosts();
  }, []);

  // Ambil post sekarang
  const indexOfLastPost = currectPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currectPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currectPosts} loading={loading} />
      <Pagination 
        postPerPage={postsPerPage} 
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
