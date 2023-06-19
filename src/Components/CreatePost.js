import { usePost } from "../Contexts/PostsProvider";
import { useUtils } from "../Contexts/UtilsProvider";

export const CreatePost = () => {
  const { user } = useUtils();
  const { state, postDispatch, createPost } = usePost();

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

  return (
    <>
      <div className="new-post">
        <div className="new-post-div">
          <img className="avatar" src={user?.avatarUrl} alt={user?.username} />
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
      </div>
    </>
  );
};
