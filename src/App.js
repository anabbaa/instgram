import React, {useState}  from "react";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Main from "./components/Main";
import Gallery from "./likes.json";
import Post from "./post.json";




function App() {
  const [photo, setPhoto] = useState(Gallery);
  const [posts, setPosts] = useState(Post);


  return (
    <div className="App">
      < Nav />
      <Info posts={posts}/>
      <Main photo = {photo} />
        </div>
  );
}

export default App;
