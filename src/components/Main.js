import React, {useState} from "react";
import { FaTh } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const Main = (props)=>{
  const {photo, setLikes} = props;

  function add (id, e){
    setLikes(id);
   // setClicks((prevState)=>prevState + 1);
  }

  const showphoto = photo.map((obj)=>{

    const {
      id,
      title,
      comments,
      img,
      likes,

    } = obj;

    return(
      <div>
        <li key={id} className="image">
      <img src={`${process.env.PUBLIC_URL}/${img}`} width="300px" height="300px" alt={title}  />
      <div className="image--overlay">
        <div >
         
          <FontAwesomeIcon icon={faHeart} onClick={e => add(id)} />

         <div className="like"> {likes}</div>
        </div>
        <div>
      <span> <FontAwesomeIcon icon={faComment} /> </span>

         <div className="comment"> {comments}</div>
        </div>
      </div>
    </li>
      </div>
    );
  });


    return (

    <div>
        <div className="line"></div>
      <div className="Menue-father">
      
           <div><FaTh />Posts</div>
           <div>< FaRegCaretSquareRight />Reels</div>
           <div>< FaDesktop />IGTV</div>
           <div>< FaAddressBook />TAGGED</div>
      </div>  
       

      <div className="image-father">
{showphoto}
    </div>
    </div>    
    );
};
export default Main;