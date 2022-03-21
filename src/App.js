import React, {useState}  from "react";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Main from "./components/Main";
import Gallery from "./likes.json";
import Post from "./post.json";

function App() {
  //herenits for main video section
  const [photo, setPhoto] = useState(Gallery);
  //post its only numbers for like followers following
  const [posts, setPosts] = useState(Post);
  console.log(Gallery);
//this function to add like for every click
  const setLikes = (id) => {
    console.log("APP", photo[id]);
    setPhoto([...photo, photo[id].likes = photo[id].likes + 1]);
  }

  return (
    <div className="App">
      < Nav />
      <Info posts={posts}/>
      <Main photo = {photo} setLikes={setLikes}/>
        </div>
  );
}
export default App;