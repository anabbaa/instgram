import React from "react";
import { FaTh } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";





const Main = (props)=>{
  
  const {photo} = props;
  const showphoto = photo.map((obj)=>{
    const {
      id,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
    } = obj;
    return(
      <div>
        <img src={img1} alt=""/>
        <img src={img2} alt=""/>
        <img src={img3} alt=""/>
        <img src={img4} alt=""/>
        <img src={img5} alt=""/>
        <img src={img6} alt=""/>
        <img src={img7} alt=""/>
        <img src={img8} alt=""/>
        <img src={img9} alt=""/>
      </div>
    );
  });


    return (

    <div>
      <div className="Menue-father">
           <div><FaTh />Posts</div>
           <div>< FaRegCaretSquareRight />Reels</div>
           <div>< FaDesktop />IGTV</div>
           <div>< FaAddressBook />TAGGED</div>
      </div>  
       

      <div className="Photo">
{showphoto}

  
    </div>
    </div>

    
    );
};
export default Main;