import { PostCard } from "../../Components/PostCard";
import { SideNav } from "../../Components/SideNav/SideNav";
import { SuggestedUser } from "../../Components/SuggestedUsers/Suggestion";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import { usePost } from "../../Contexts/PostsProvider";
import { useUsers } from "../../Contexts/UsersProvider";
import { useUtils } from "../../Contexts/UtilsProvider";
import { likePost } from "../../Services/likeServices";
import "./explore.css";

export const Explore = () => {
  const { likePostHandler, user } = useUtils();
  const { state } = usePost();
  const isThePostByTheCurrentUser = state?.posts?.filter(
    (post) => post?.username === user?.username
  );
  // const userData = localStorage.getItem("userData");
  // const user = JSON.parse(userData)?.user;

  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        {state?.posts.map((post) => {
          const likedByArray = post.likes.likedBy.filter(
            (currUser) => currUser._id === user._id
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
          return user?.username !== post?.username ? (
            <PostCard {...post} isLiked={!!likedByArray.length} />
          ) : null;
        })}
      </div>
      <Suggestions />
    </div>
  );
};
