import { usePost } from "../Contexts/PostsProvider";
import example from "../assets/Images/example.jpg";
export const EditForm = ({ content, image, id }) => {
  const { state, setEditForm, postDispatch, createPost } = usePost();
  const findPostToBeEdited = state.feedPosts.find((post) => post._id === id);
  console.log(findPostToBeEdited);
  return (
    <div className="overlay-parent">
      <div className="overlay">
        <div className="edit-form">
          <i
            class="fa-solid fa-circle-xmark cross"
            onClick={() => setEditForm(false)}
          ></i>
          {content.length ? <h1>Edit Post</h1> : <h1>Create Post</h1>}
          <img
            src={state?.post?.imageUrl || example}
            alt="edit-post"
            className="edit-post-img"
          />
          <label>
            <textarea
              value={state?.post?.content}
              onChange={(event) =>
                postDispatch({
                  type: "POST_CONTENT",
                  payload: event.target.value,
                })
              }
            ></textarea>
          </label>
          <div className="edit-buttons">
            <button onClick={createPost}>
              {content.length ? "Save" : "Post"}
            </button>
            <button>Discard Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};
