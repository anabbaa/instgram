import { ImHome } from "react-icons/im";
import { FaRegHeart} from "react-icons/fa";
import { FaRegPaperPlane} from "react-icons/fa";
import { FaCompass} from "react-icons/fa";
import { FaUserAlt} from "react-icons/fa";




const Nav = ()=>{

    return (
        <div className="Nav">
            <div className="Nav-photo-father">
                <img className="Nav-img"src="./img/instgram.png" alt="instgram"/>
            </div>
            <form>
            <input type="search" placeholder="search"/>

            </form>
            <div>

        <a href="#">< ImHome /></a>
        <a href="#">< FaRegPaperPlane /></a>
        <a href="#"> < FaCompass /></a>
        <a href="#"><FaRegHeart/> </a>
        <a href="#">< FaUserAlt /> </a>

        
            </div>
        </div>
    );
};
export default Nav;