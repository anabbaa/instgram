import React, {useState} from "react";
import { FaTh } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'







const Main = (props)=>{


  

  const {photo} = props;

  const [clicks , setClicks] = useState(0);
  function add (){
    setClicks((prevState)=>prevState + 1);
  }

  const showphoto = photo.map((obj)=>{

    const {
      id,
      title,
      comments,
      img,
    } = obj;

    return(
      <div>
        <li key={id} className="image">
      <img src={img} width="300px" height="300px" alt={title}  />
      <div className="image--overlay">
        <div >
         
          <FontAwesomeIcon icon={faHeart} onClick={add} />

         <div className="like" > {clicks}</div>
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