import { PostCard } from "../../Components/PostCard";
import { SideNav } from "../../Components/SideNav/SideNav";
import { SuggestedUser } from "../../Components/SuggestedUsers/Suggestion";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";
import { useUsers } from "../../Contexts/UsersProvider";
import { useUtils } from "../../Contexts/UtilsProvider";
import { likePost } from "../../Services/likeServices";
import "./explore.css";

export const Explore = () => {
  // const { likePostHandler, user } = useUtils();
  const { state } = usePost();
  const { currentUser } = useAuth();
  const { state: userState } = useUsers();
  const isThePostByTheCurrentUser = state?.posts?.filter(
    (post) => post?.username === currentUser?.username
  );
  // const userData = localStorage.getItem("userData");
  // const user = JSON.parse(userData)?.user;
  console.log(
    currentUser.following,
    "jddddddddddddddddddddddddddddddddddddddddddddddd"
  );
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        {state?.posts.map((post) => {
          const likedByArray = post.likes.likedBy.filter(
            (currUser) => currUser._id === currentUser._id
          );

          {
            /* console.log(likedByArray); */
          }

          {
            /* 
          const hasUserLikedThePost = () => likedBy.includes(user); */
          }
          {
            /* const likedByUser = () =>
            post?.likes?.likedBy.filter(
              (currUser) => currUser._id === user?._id
            ).length !== 0; */
          }
          return currentUser?.username !== post?.username ? (
            <PostCard {...post} isLiked={!!likedByArray.length} />
          ) : null;
        })}
      </div>
      <Suggestions />
    </div>
  );
};
