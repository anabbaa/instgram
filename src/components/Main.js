import React  from "react";
import { FaTh } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import infoImgs from "../infImg.json";

const Main = (props)=>{
  const {photo, setLikes} = props;
  function add (id, e){
    setLikes(id);
   // setClicks((prevState)=>prevState + 1);
  }
// here i distract photos from Gallery
  const showphoto = photo.map((obj)=>{
    const {
      id,
      title,
      comments,
      img,
      likes,
    } = obj;
    
    return(
      <div >
        <li key={id} className="image">
      <img src={`${process.env.PUBLIC_URL}/${img}`} width="300px" height="310px" alt={title}  />
      {/*this div for likes and comments*/}
      <div className="image--overlay">
        <div className="like-up-father">
        <div className="like-father" >
          <FontAwesomeIcon icon={faHeart} onClick={e => add(id)} />

         <div className="like"> {likes}</div>
        </div>

        <div  className="like-father">
      <span> <FontAwesomeIcon icon={faComment} /> </span>

         <div className="comment"> {comments}</div>
         </div>
        </div>
      </div>
    </li>
      </div>
    );
  });

  const imgInfos =infoImgs.map((obj)=> {
    const  {
      title,
      img
    } = obj;
    return (
      <div>
              <img className="img" src={`${process.env.PUBLIC_URL}/${img}`}  alt={title}  />   
      </div>
    )
  });

    return (
    <div className="main-father">
            <div className="Info-img-bottom">
              {imgInfos}
                </div>
        <div className="line"></div>
      <div className="Menue-father">
           <div className="menue"><FaTh />Posts</div>
           <div className="menue">< FaRegCaretSquareRight />Reels</div>
           <div className="menue">< FaDesktop />IGTV</div>
           <div className="menue">< FaAddressBook />TAGGED</div>
      </div>  
       
      <div className="image-father">
{showphoto}
    </div>
    </div>    
    );
};
export default Main;