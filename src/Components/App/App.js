import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ListUsers from "../ListUsers/ListUsers";
import PageUsers from "../PageUsers/PageUsers";
import PostList from "../PostList/PostList";
import PostDetails from "../PostDetails/PostDetails";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PageUsers />} />
        <Route exact path="/user/:userId" element={<ListUsers />} />
        <Route exact path="/user/:userId/posts" element={<PostList />} />
        <Route exact path="/user/:userId/posts/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
