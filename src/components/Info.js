import { FaRegCheckCircle} from "react-icons/fa";

const Info = (props)=>{
    const {posts} = props;
    const follow =  posts.map((obj, id) => {
        
        return (
            <div className="Father-follow"key={id}>
                <div >{obj.posts}</div><div  className="Posts">posts</div>
                <div >{obj.followers}</div><div className="Following">Followers</div>
                <div>{obj.following} </div><div className="Followers">Following</div>
                

            </div>
          );
        });

    return(
        <div>
            <div className="Info-father">
            <div className="Info-top">
                <img className="profile-img" src="./img/profile.png" alt="instgraminfo"/>
                
                
                    <span className="instgram-top">Instgram</span> 
                    <span className="Icon-tick"><FaRegCheckCircle /></span>
                    <button>Follow</button>
                    <div className="Square"></div>
                    <span>...</span>
                </div>
                   <div className="follow" >
                       {follow}
                   </div>
                <div className="Info-text">
                <span>instgram</span>
                <div>Bringing you closer to the people and things you love ❤️
                    For up-to-date COVID 19 information visit 
                    <a href="#">www.instagram.com/coronavirus_info</a>
                </div>


            </div>
            
                </div>
                <div className="Info-img-bottom">
                <div><img className="Img"  src="./img/1.png" alt= "1" width="100px" height="100px" /></div>
                <div><img className="Img" src="./img/2.png" alt= "2"  width="100px" height="100px"/></div>
                <div><img className="Img" src="./img/3.png" alt= "3"  width="100px" height="100px"/></div>
                <div><img className="Img" src="./img/4.png" alt= "4"  width="100px" height="100px"/></div>
                <div><img className="Img" src="./img/5.png" alt= "5"  width="100px" height="100px"/></div>
                <div><img className="Img" src="./img/6.png" alt= "6"  width="100px" height="100px"/></div>
                </div>
        </div>
    );
};
export default Info;