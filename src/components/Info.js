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
            <div className="profileImgfather">
                <img className="profile-img" src={`${process.env.PUBLIC_URL}/${"./img/profile.png"}`} alt="instgraminfo"/>
                </div>
            <div className="Info-top">
               <div className="info-mid-father">               
                    <span className="instgram-top">Ahmed Nabbaa</span>
                    <span className="Icon-tick"><FaRegCheckCircle /></span>
                    <button>Follow</button>
                    <div className="Square"></div>
                    <span>...</span>
                    </div> 
                
                   <div className="follow" >
                       {follow}
                   </div>
                <div className="Info-text">
                <h3 >instgram</h3>
                <div>Bringing you closer to the people and things you love ❤️
                    For up-to-date COVID 19 information visit 
                    <a href="#">www.instagram.com/coronavirus_info</a>
                </div>
                </div> 
            </div>   
                </div>
        </div>
    );
};
export default Info;