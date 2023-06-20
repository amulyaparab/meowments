import { useEffect } from "react";
import { usePost } from "../Contexts/PostsProvider";
import { useUtils } from "../Contexts/UtilsProvider";
import { useAuth } from "../Contexts/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CreatePost = () => {
  // const { user } = useUtils();
  const { state, postDispatch, createPost } = usePost();
  const { currentUser } = useAuth();
  //     post: {
  //       _id: uuid(),
  //       imageUrl: "",
  //       content: "",
  //       likes: {
  //         likeCount: 0,
  //         likedBy: [],
  //         dislikedBy: [],
  //       },
  //       comments: [
  //         {
  //           _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
  //           username: "adarshsharma",
  //           text: "Black Love.",
  //           votes: {
  //             upvotedBy: [],
  //             downvotedBy: [],
  //           },
  //         },
  //       ],
  //       username: user?.username,
  //       createdAt: formatDate(),
  //       updatedAt: formatDate(),
  //     },

  const handleShowToast = () => {
    toast.success("Toast message!", { position: toast.POSITION.TOP_RIGHT });
  };

  return (
    <>
      <div className="new-post">
        <div className="new-post-div">
          <img
            className="avatar"
            src={currentUser?.avatarUrl}
            alt={currentUser?.username}
          />
          <textarea
            placeholder="Share your meowment"
            onChange={(event) =>
              postDispatch({
                type: "POST_CONTENT",
                payload: event.target.value,
              })
            }
          />
        </div>
        <label>
          <input type="file" />
        </label>
        <button onClick={createPost}>Post</button>
        <div>
          <button onClick={handleShowToast}>Show Toast</button>
        </div>
      </div>
    </>
  );
};
