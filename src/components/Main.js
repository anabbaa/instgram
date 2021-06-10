import React from "react";
import { FaTh } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";






const Main = (props)=>{
  
  const {photo} = props;
  const showphoto = photo.map((obj)=>{
    const {
      id,
      title,
      likes,
      comments,
      img,
    } = obj;
    return(
      <div>
        <li key={id} className="image">
      <img src={img} width="300px" height="300px" alt={title}  />
      <div className="image--overlay">
        <div >
          <span>
  {<i class="fas fa-heart"></i>}</span>

         <div className="like"> {obj.likes}</div>
        </div>
        <div>
      <span>{<i class="fas fa-comment"></i>}</span>  

         <div className="comment"> {obj.comments}</div>
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