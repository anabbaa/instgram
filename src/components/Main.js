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
      <div >
        <li key={id} className="image">
      <img src={`${process.env.PUBLIC_URL}/${img}`} width="300px" height="300px" alt={title}  />
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

    return (
    <div className="main-father">
            <div className="Info-img-bottom">
                <div><img className="Img"  src={`${process.env.PUBLIC_URL}/${"./img/1.png"}`} alt= "1" width="100px" height="100px" /></div>
                <div><img className="Img" src= {`${process.env.PUBLIC_URL}/${"./img/2.png"}`} alt= "2"  width="100px" height="100px"/></div>
                <div><img className="Img" src= {`${process.env.PUBLIC_URL}/${"./img/3.png"}`} alt= "3"  width="100px" height="100px"/></div>
                <div><img className="Img" src= {`${process.env.PUBLIC_URL}/${"./img/4.png"}`} alt= "4"  width="100px" height="100px"/></div>
                <div><img className="Img" src={`${process.env.PUBLIC_URL}/${"./img/5.png"}`} alt= "5"  width="100px" height="100px"/></div>
                <div><img className="Img" src= {`${process.env.PUBLIC_URL}/${"./img/6.png"}`} alt= "6"  width="100px" height="100px"/></div>
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