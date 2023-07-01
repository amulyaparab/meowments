import { useParams } from "react-router-dom";
import { usePost } from "../Contexts/PostsProvider";
import { PostCard } from "../Components/PostCard";
import { SideNav } from "../Components/SideNav/SideNav";
import { Suggestions } from "../Components/SuggestedUsers/Suggestions";
import "../Components/SuggestedUsers/suggestions.css";
import { Comments } from "../Components/Comments";
export const SinglePost = () => {
  const { postId } = useParams();
  const { state } = usePost();
  const findPost = state?.posts?.find((post) => post._id === postId);

  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        <PostCard {...findPost} />
        <div>
          <Comments comments={findPost?.comments} showUIForSinglePost />
        </div>
      </div>
      <Suggestions />
    </div>
  );
};
