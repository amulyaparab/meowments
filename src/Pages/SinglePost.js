import { useParams } from "react-router-dom";
import { usePost } from "../Contexts/PostsProvider";
import { PostCard } from "../Components/PostCard";
import { SideNav } from "../Components/SideNav/SideNav";
import { Suggestions } from "../Components/SuggestedUsers/Suggestions";
import "../Components/SuggestedUsers/suggestions.css";
import { Comments } from "../Components/Comments";
import { useAuth } from "../Contexts/AuthProvider";
export const SinglePost = () => {
  const { postId } = useParams();
  const { state } = usePost();
  const { currentUser } = useAuth();
  const findPost = state?.posts?.find((post) => post._id === postId);
  const likedByArray = findPost?.likes.likedBy.filter(
    (currUser) => currUser._id === currentUser._id
  );
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        <PostCard {...findPost} isLiked={!!likedByArray.length} yellow />
        <div>
          <Comments comments={findPost?.comments} showUIForSinglePost />
        </div>
      </div>
      <Suggestions />
    </div>
  );
};
