import { useAuth } from "../Contexts/AuthProvider";
import { usePost } from "../Contexts/PostsProvider";
import { editPost } from "../Services/postServices";
import example from "../assets/Images/example.jpg";
export const EditForm = () => {
  const { state, setEditForm, postDispatch, createPost } = usePost();
  const findPostToBeEdited = state.posts.find(
    (post) => post._id === state.post._id
  );
  const { currentToken } = useAuth();
  const editPostHandler = async () => {
    try {
      const edited = await editPost(state.post._id, state.post, currentToken);
      console.log(edited, "sdfjdslfujklsdjffffffffffff");
      postDispatch({ type: "EDITED_POST", payload: edited });
    } catch (err) {
      console.log(err);
    } finally {
      postDispatch({ type: "CLEAR_FORM" });
      setEditForm(false);
    }
  };
  return (
    <div className="overlay-parent">
      <div className="overlay">
        <div className="edit-form">
          <i
            class="fa-solid fa-circle-xmark cross"
            onClick={() => {
              setEditForm(false);
              postDispatch({ type: "CLEAR_FORM" });
            }}
          ></i>
          {findPostToBeEdited ? <h1>Edit Post</h1> : <h1>Create Post</h1>}
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
              placeholder="Scratch down a meowment here."
            ></textarea>
          </label>
          <div className="edit-buttons">
            {findPostToBeEdited ? (
              <button onClick={editPostHandler}>Save</button>
            ) : (
              <button onClick={createPost}>Post</button>
            )}
            <button>Discard Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};
